import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import { PhoenixHero } from '../components/3d/PhoenixHero'
import { ScrollVideo } from '../components/ui/ScrollVideo'
import { ErrorBoundary } from '../components/ui/ErrorBoundary'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function Home() {
  return (
    <div>
      {/* === HERO SECTION === */}
      <section
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          background: 'radial-gradient(ellipse at center top, rgba(139,0,0,0.12) 0%, var(--color-bg) 60%)',
        }}
      >
        {/* 3D Phoenix */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            width: 'clamp(280px, 40vw, 500px)',
            height: 'clamp(280px, 40vw, 500px)',
            marginBottom: 'var(--space-4)',
          }}
        >
          <ErrorBoundary>
            <PhoenixHero />
          </ErrorBoundary>
        </motion.div>

        {/* Title */}
        <motion.h1
          className="text-display"
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{ textAlign: 'center' }}
        >
          BUTAFENIKS
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          style={{
            fontFamily: 'var(--font-label)',
            fontSize: '0.85rem',
            letterSpacing: '0.25em',
            color: 'var(--color-muted)',
            marginTop: 'var(--space-4)',
          }}
        >
          DON'T BE AFRAID
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          style={{
            position: 'absolute',
            bottom: '40px',
            animation: 'scrollIndicator 2s ease-in-out infinite',
          }}
        >
          <ChevronDown size={24} color="var(--color-muted)" />
        </motion.div>
      </section>

      {/* === MANIFESTO — "BORN FROM THE SHADOWS" === */}
      <section
        style={{
          background: 'var(--color-surface-low)',
          padding: 'var(--space-20) var(--space-8)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-12)',
            alignItems: 'center',
          }}
          className="manifesto-grid"
        >
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <p className="text-label" style={{ marginBottom: 'var(--space-4)' }}>
              SEASON 01 / ORIGINS
            </p>
            <h2
              className="text-headline"
              style={{ marginBottom: 'var(--space-4)' }}
            >
              BORN FROM
              <br />
              <span style={{ color: 'var(--color-primary)' }}>THE SHADOWS</span>
            </h2>
            <p
              className="text-body-sm"
              style={{
                maxWidth: '400px',
                marginBottom: 'var(--space-8)',
              }}
            >
              We didn't come to repeat what's already here. Butafeniks is a rebirth
              — forged in shadow, risen in defiance. Each piece carries the ancient
              Azerbaijani "Buta" flame, a mark of survival and transformation.
            </p>
            <Link
              to="/story"
              style={{
                fontFamily: 'var(--font-label)',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                color: 'var(--color-ember)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                borderBottom: '1px solid var(--color-ember)',
                paddingBottom: '4px',
              }}
            >
              OUR STORY <ArrowRight size={14} />
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: '-100px' }}
            style={{
              position: 'relative',
              aspectRatio: '3/4',
              overflow: 'hidden',
              background: 'var(--color-surface-mid)',
            }}
          >
            <img
              src="/images/Gemini_Generated_Image_g67fh8g67fh8g67f.webp"
              alt="Butafeniks Hoodie"
              className="product-image"
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
                background: 'linear-gradient(to top, rgba(19,19,19,0.6) 0%, transparent 50%)',
              }}
            />
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .manifesto-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      {/* === BUTA GEOMETRY === */}
      <section
        style={{
          padding: 'var(--space-20) var(--space-8)',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <p className="text-label" style={{ marginBottom: 'var(--space-2)' }}>
            CULTURAL ARTIFACT
          </p>
          <h2 className="text-headline" style={{ marginBottom: 'var(--space-8)' }}>
            THE BUTA <span style={{ color: 'var(--color-gold)' }}>GEOMETRY</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          style={{
            width: 'clamp(250px, 40vw, 450px)',
            height: 'clamp(250px, 40vw, 450px)',
            margin: '0 auto',
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            overflow: 'hidden',
          }}
        >
          <img
            src="/images/Gemini_Generated_Image_458tz4458tz4458t.webp"
            alt="Buta Pattern"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </motion.div>
      </section>

      {/* === COLLECTION TEASER === */}
      <section
        style={{
          background: 'var(--color-surface-low)',
          padding: 'var(--space-16) var(--space-8)',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <p className="text-label" style={{ marginBottom: 'var(--space-2)' }}>
            NOW AVAILABLE
          </p>
          <h2 className="text-headline" style={{ marginBottom: 'var(--space-8)' }}>
            THE COLLECTION
          </h2>
          <Link
            to="/shop"
            style={{
              display: 'inline-block',
              padding: '16px 48px',
              background: 'var(--color-primary)',
              color: 'var(--color-cream)',
              fontFamily: 'var(--font-label)',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              transition: 'background 0.4s var(--ease-predator)',
              border: '1px solid transparent',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'var(--color-gold)'
              e.currentTarget.style.color = 'var(--color-gold)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'var(--color-primary)'
              e.currentTarget.style.borderColor = 'transparent'
              e.currentTarget.style.color = 'var(--color-cream)'
            }}
          >
            EXPLORE VAULT
          </Link>
        </motion.div>
      </section>

      {/* === SCROLL-DRIVEN VIDEO REVEAL === */}
      <ScrollVideo src="/videos/kling_video_2.mp4" />
    </div>
  )
}
