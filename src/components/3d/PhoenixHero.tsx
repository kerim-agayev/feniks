import { Suspense, useRef, useEffect, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function PhoenixModel() {
  const { scene } = useGLTF('/models/phoenix.glb')
  const ref = useRef<THREE.Group>(null)

  useEffect(() => {
    // Center the model and normalize its scale
    const box = new THREE.Box3().setFromObject(scene)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(center)

    // Offset to center
    scene.position.sub(center)

    // Normalize scale so max dimension = 2
    const maxDim = Math.max(size.x, size.y, size.z)
    if (maxDim > 0) {
      const scale = 2 / maxDim
      scene.scale.multiplyScalar(scale)
    }
  }, [scene])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.15
    }
  })

  return (
    <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={ref}>
        <primitive object={scene} />
      </group>
    </Float>
  )
}

function EmberParticles() {
  return (
    <>
      <Sparkles
        count={150}
        scale={4}
        size={3}
        speed={0.3}
        color="#C45E1A"
        opacity={0.6}
      />
      <Sparkles
        count={80}
        scale={3}
        size={2}
        speed={0.5}
        color="#8B0000"
        opacity={0.4}
      />
    </>
  )
}

function LoadingFallback() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 60,
          height: 60,
          border: '2px solid var(--color-surface-high)',
          borderTop: '2px solid var(--color-ember)',
          animation: 'spin 1s linear infinite',
        }}
      />
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}

export function PhoenixHero() {
  return (
    <div style={{ width: '100%', height: '100%', position: 'relative' }}>
      <Suspense fallback={<LoadingFallback />}>
        <Canvas
          camera={{ position: [0, 0, 5], fov: 40 }}
          style={{ background: 'transparent' }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[3, 5, 2]}
            intensity={1.2}
            color="#C45E1A"
          />
          <directionalLight
            position={[-3, 2, -2]}
            intensity={0.3}
            color="#4466ff"
          />
          <pointLight
            position={[0, -2, 2]}
            intensity={0.8}
            color="#8B0000"
            distance={8}
          />
          <PhoenixModel />
          <EmberParticles />
        </Canvas>
      </Suspense>
    </div>
  )
}

useGLTF.preload('/models/phoenix.glb')
