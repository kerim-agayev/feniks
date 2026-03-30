import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticleFieldProps {
  count?: number
  color?: string
  spread?: number
  speed?: number
}

export function ParticleField({
  count = 200,
  color = '#C45E1A',
  spread = 6,
  speed = 0.3,
}: ParticleFieldProps) {
  const meshRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const sizes = new Float32Array(count)
    const speeds = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * spread
      positions[i * 3 + 2] = (Math.random() - 0.5) * spread
      sizes[i] = Math.random() * 3 + 0.5
      speeds[i] = Math.random() * speed + speed * 0.2
    }

    return { positions, sizes, speeds }
  }, [count, spread, speed])

  useFrame((_, delta) => {
    if (!meshRef.current) return
    const positions = meshRef.current.geometry.attributes.position.array as Float32Array

    for (let i = 0; i < count; i++) {
      positions[i * 3 + 1] += particles.speeds[i] * delta

      if (positions[i * 3 + 1] > spread / 2) {
        positions[i * 3 + 1] = -spread / 2
        positions[i * 3] = (Math.random() - 0.5) * spread
        positions[i * 3 + 2] = (Math.random() - 0.5) * spread
      }
    }

    meshRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        color={color}
        size={0.03}
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}
