import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TOTAL_FRAMES = 121
const FRAME_PATH = '/frames/frame_'

function getFrameSrc(index: number): string {
  const num = String(Math.min(Math.max(index, 1), TOTAL_FRAMES)).padStart(4, '0')
  return `${FRAME_PATH}${num}.jpg`
}

interface ScrollVideoProps {
  src?: string
  className?: string
}

export function ScrollVideo({ className }: ScrollVideoProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const [loadProgress, setLoadProgress] = useState(0)
  const [loaded, setLoaded] = useState(false)

  // Preload all frames
  useEffect(() => {
    let loadedCount = 0
    const images: HTMLImageElement[] = []

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image()
      img.src = getFrameSrc(i)
      img.onload = () => {
        loadedCount++
        setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100))
        if (loadedCount === TOTAL_FRAMES) {
          setLoaded(true)
        }
      }
      images.push(img)
    }

    imagesRef.current = images
  }, [])

  // Draw frames on scroll
  useEffect(() => {
    if (!loaded) return

    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size from first image
    const firstImg = imagesRef.current[0]
    canvas.width = firstImg.naturalWidth
    canvas.height = firstImg.naturalHeight

    // Draw first frame
    ctx.drawImage(firstImg, 0, 0)

    const frameObj = { frame: 0 }

    const st = ScrollTrigger.create({
      trigger: container,
      start: 'top top',
      end: '+=300%',
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const frameIndex = Math.floor(self.progress * (TOTAL_FRAMES - 1))
        if (frameIndex !== frameObj.frame && imagesRef.current[frameIndex]) {
          frameObj.frame = frameIndex
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(imagesRef.current[frameIndex], 0, 0)
        }
      },
    })

    return () => {
      st.kill()
    }
  }, [loaded])

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        width: '100%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0a0a',
      }}
    >
      {/* Loading progress */}
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
          }}
        >
          <p
            className="text-label"
            style={{ marginBottom: '16px', fontSize: '0.65rem' }}
          >
            LOADING CINEMATIC EXPERIENCE
          </p>
          <div
            style={{
              width: '200px',
              height: '2px',
              background: 'var(--color-surface-high)',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${loadProgress}%`,
                height: '100%',
                background: 'linear-gradient(to right, #8B0000, #C9A84C)',
                transition: 'width 0.2s',
              }}
            />
          </div>
          <p
            className="text-label"
            style={{ marginTop: '8px', fontSize: '0.6rem', color: 'var(--color-ember)' }}
          >
            {loadProgress}%
          </p>
        </div>
      )}

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 0.5s',
        }}
      />

      {/* Gradient overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(19,19,19,0.4) 0%, transparent 20%, transparent 80%, rgba(19,19,19,0.8) 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Scroll hint */}
      {loaded && (
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            textAlign: 'center',
            pointerEvents: 'none',
            animation: 'scrollIndicator 2s ease-in-out infinite',
          }}
        >
          <p
            className="text-label"
            style={{ fontSize: '0.6rem', opacity: 0.5 }}
          >
            SCROLL TO REVEAL
          </p>
        </div>
      )}
    </div>
  )
}
