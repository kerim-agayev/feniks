import { Suspense, useRef, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, OrbitControls, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

interface ProductModelProps {
  modelPath: string
  color?: string
}

function ProductModel({ modelPath, color }: ProductModelProps) {
  const { scene } = useGLTF(modelPath)
  const ref = useRef<THREE.Group>(null)

  useEffect(() => {
    if (color) {
      scene.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh
          if (mesh.material && (mesh.material as THREE.MeshStandardMaterial).color) {
            (mesh.material as THREE.MeshStandardMaterial).color.set(color)
          }
        }
      })
    }
  }, [color, scene])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1
    }
  })

  return (
    <group ref={ref} scale={1.2}>
      <primitive object={scene} />
    </group>
  )
}

interface ProductViewerProps {
  modelPath: string
  color?: string
}

export function ProductViewer({ modelPath, color }: ProductViewerProps) {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
      <Suspense
        fallback={
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'var(--color-surface-mid)',
            }}
          >
            <p className="text-label" style={{ fontSize: '0.7rem' }}>
              LOADING 3D MODEL...
            </p>
          </div>
        }
      >
        <Canvas
          camera={{ position: [0, 0.5, 2.5], fov: 45 }}
          style={{ background: 'transparent' }}
          gl={{ alpha: true, antialias: true }}
        >
          <ambientLight intensity={0.3} />
          <directionalLight position={[2, 4, 2]} intensity={1} color="#C45E1A" />
          <directionalLight position={[-2, 2, -2]} intensity={0.3} color="#4466ff" />
          <spotLight position={[0, 5, 0]} intensity={0.5} color="#F5F0E8" />
          <ProductModel modelPath={modelPath} color={color} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            minPolarAngle={Math.PI / 3}
            maxPolarAngle={Math.PI / 1.5}
            autoRotate
            autoRotateSpeed={1}
          />
          <ContactShadows
            position={[0, -1.2, 0]}
            opacity={0.3}
            scale={5}
            blur={2}
            color="#8B0000"
          />
          <hemisphereLight groundColor="#131313" intensity={0.5} />
        </Canvas>
      </Suspense>
    </div>
  )
}
