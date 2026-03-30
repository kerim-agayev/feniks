import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const archiveImages = [
  { src: '/images/Gemini_Generated_Image_g67fh8g67fh8g67f.webp', label: 'OBSIDIAN I', alt: 'Look 1' },
  { src: '/images/Gemini_Generated_Image_nbbu8fnbbu8fnbbu.webp', label: 'HERITAGE', alt: 'Look 2' },
  { src: '/images/Gemini_Generated_Image_vjd5x5vjd5x5vjd5.webp', label: 'CAP SERIES', alt: 'Look 3' },
  { src: '/images/Gemini_Generated_Image_458tz4458tz4458t.webp', label: 'BUTA MOTIF', alt: 'Look 4' },
  { src: '/images/Gemini_Generated_Image_1sts2o1sts2o1sts.webp', label: 'THE SEAL', alt: 'Look 5' },
  { src: '/images/Gemini_Generated_Image_twkhkxtwkhkxtwkh.webp', label: 'PHOENIX', alt: 'Look 6' },
]

export default function Lookbook() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--color-bg)',
        }}
      >
        {/* Video BG */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.3,
          }}
        >
          <source src="/videos/kling_video.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, rgba(19,19,19,0.4) 0%, rgba(19,19,19,0.9) 100%)',
          }}
        />

        <motion.h1
          className="text-display"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative', zIndex: 1 }}
        >
          QORXMA
        </motion.h1>
        <motion.p
          className="text-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{ position: 'relative', zIndex: 1, marginTop: 'var(--space-4)' }}
        >
          THE AWAKENING &middot; VOL. 01
        </motion.p>
      </section>

      {/* Philosophy */}
      <section
        style={{
          padding: 'var(--space-20) var(--space-8)',
          textAlign: 'center',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 700,
            fontStyle: 'italic',
            lineHeight: 1.3,
          }}
        >
          BORN FROM <span style={{ color: 'var(--color-primary)' }}>FIRE</span>.
          <br />
          WORN WITH <span style={{ color: 'var(--color-gold)' }}>FEARLESSNESS</span>.
        </motion.p>
      </section>

      {/* Buta Archive Grid */}
      <section
        style={{
          padding: '0 var(--space-8) var(--space-16)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <motion.h2
          className="text-headline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 'var(--space-8)' }}
        >
          THE BUTA <span style={{ color: 'var(--color-primary)' }}>ARCHIVE</span>
        </motion.h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-4)',
          }}
          className="archive-grid"
        >
          {archiveImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.03, filter: 'brightness(1.1)' }}
              style={{
                position: 'relative',
                aspectRatio: i % 3 === 1 ? '3/4' : '1',
                overflow: 'hidden',
                background: 'var(--color-surface-mid)',
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(19,19,19,0.7) 0%, transparent 50%)',
                }}
              />
              <span
                className="text-label"
                style={{
                  position: 'absolute',
                  bottom: 'var(--space-4)',
                  left: 'var(--space-4)',
                  fontSize: '0.65rem',
                }}
              >
                {img.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The New Era */}
      <section
        style={{
          background: 'var(--color-surface-low)',
          padding: 'var(--space-24) var(--space-8)',
          textAlign: 'center',
        }}
      >
        <motion.h2
          className="text-headline"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: 'var(--space-8)' }}
        >
          THE NEW ERA
        </motion.h2>
        <Link
          to="/shop"
          style={{
            display: 'inline-block',
            padding: '16px 48px',
            background: 'var(--color-gold)',
            color: 'var(--color-bg)',
            fontFamily: 'var(--font-label)',
            fontSize: '0.8rem',
            letterSpacing: '0.2em',
            transition: 'all 0.4s var(--ease-predator)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.color = 'var(--color-gold)'
            e.currentTarget.style.boxShadow = 'inset 0 0 0 1px var(--color-gold)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--color-gold)'
            e.currentTarget.style.color = 'var(--color-bg)'
            e.currentTarget.style.boxShadow = 'none'
          }}
        >
          EXPLORE COLLECTION
        </Link>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .archive-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .archive-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
