import { Suspense, useRef, useEffect, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, OrbitControls, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function PhoenixModel() {
  const { scene } = useGLTF('/models/phoenix.glb')

  // Clone scene so we can safely modify it
  const clonedScene = useMemo(() => {
    const clone = scene.clone(true)

    // Compute bounding box
    const box = new THREE.Box3().setFromObject(clone)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()
    box.getSize(size)
    box.getCenter(center)

    // Normalize: scale so max dimension = 2, then center
    const maxDim = Math.max(size.x, size.y, size.z)
    const scaleFactor = maxDim > 0 ? 2 / maxDim : 1

    // Create a wrapper group that handles centering and scaling
    const wrapper = new THREE.Group()
    wrapper.add(clone)

    // First scale
    wrapper.scale.setScalar(scaleFactor)

    // Then offset to center (need to account for scale)
    clone.position.set(
      -center.x,
      -center.y,
      -center.z
    )

    return wrapper
  }, [scene])

  return <primitive object={clonedScene} />
}

function EmberParticles() {
  return (
    <>
      <Sparkles
        count={120}
        scale={3.5}
        size={2.5}
        speed={0.3}
        color="#C45E1A"
        opacity={0.5}
      />
      <Sparkles
        count={60}
        scale={3}
        size={1.5}
        speed={0.4}
        color="#8B0000"
        opacity={0.3}
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
          camera={{ position: [0, 0, 4], fov: 40 }}
          style={{ background: 'transparent' }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[3, 5, 2]}
            intensity={1.5}
            color="#C45E1A"
          />
          <directionalLight
            position={[-3, 2, -2]}
            intensity={0.4}
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
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}

useGLTF.preload('/models/phoenix.glb')
