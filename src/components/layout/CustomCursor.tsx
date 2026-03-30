import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window
    if (isTouchDevice) return

    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }

    const onLeave = () => setVisible(false)
    const onEnter = () => setVisible(true)

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
    }
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTrail(pos)
    }, 80)
    return () => clearTimeout(timeout)
  }, [pos])

  useEffect(() => {
    const checkHover = () => {
      const el = document.elementFromPoint(pos.x, pos.y)
      const isInteractive = el?.closest('a, button, [role="button"], input, textarea, select')
      setHovering(!!isInteractive)
    }
    checkHover()
  }, [pos])

  if (!visible) return null

  return (
    <>
      <div
        style={{
          position: 'fixed',
          left: pos.x - 4,
          top: pos.y - 4,
          width: 8,
          height: 8,
          background: '#C45E1A',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference',
          transition: 'transform 0.15s var(--ease-predator)',
          transform: hovering ? 'scale(2.5)' : 'scale(1)',
        }}
      />
      <div
        style={{
          position: 'fixed',
          left: trail.x - 16,
          top: trail.y - 16,
          width: 32,
          height: 32,
          border: '1px solid rgba(196, 94, 26, 0.4)',
          pointerEvents: 'none',
          zIndex: 99998,
          transition: 'transform 0.3s var(--ease-heavy), opacity 0.3s',
          transform: hovering ? 'scale(1.5)' : 'scale(1)',
          opacity: hovering ? 0.6 : 0.3,
        }}
      />
    </>
  )
}
