import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99999,
            background: '#0a0a0a',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Buta flame SVG */}
          <motion.svg
            width="80"
            height="110"
            viewBox="0 0 80 110"
            fill="none"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Outer flame */}
            <motion.path
              d="M40 105 C40 105, 8 70, 8 42 C8 12, 40 2, 40 2 C40 2, 72 12, 72 42 C72 70, 40 105, 40 105 Z"
              stroke="#8B0000"
              strokeWidth="1.5"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            {/* Inner flame */}
            <motion.path
              d="M40 85 C40 85, 20 60, 20 42 C20 22, 40 15, 40 15 C40 15, 60 22, 60 42 C60 60, 40 85, 40 85 Z"
              stroke="#C45E1A"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            />
            {/* Core */}
            <motion.circle
              cx="40"
              cy="45"
              r="6"
              fill="#C9A84C"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            />
            {/* Curl */}
            <motion.path
              d="M40 105 C40 105, 30 112, 24 108 C18 104, 22 96, 28 94"
              stroke="#8B0000"
              strokeWidth="1"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            />
          </motion.svg>

          {/* Brand name */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.2rem',
              letterSpacing: '0.3em',
              color: '#F5F0E8',
              marginTop: '24px',
            }}
          >
            BUTAFENIKS
          </motion.p>

          {/* Loading bar */}
          <motion.div
            style={{
              width: '120px',
              height: '1px',
              background: 'rgba(53,53,52,0.5)',
              marginTop: '20px',
              overflow: 'hidden',
            }}
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 2.4, ease: 'linear' }}
              style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to right, #8B0000, #C9A84C)',
                transformOrigin: '0%',
              }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
