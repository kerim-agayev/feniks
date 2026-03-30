import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const milestones = [
  { year: '2023', title: 'THE SPARK', desc: 'First concept sketches. The Buta flame is born from pen on paper.' },
  { year: '2023', title: 'FABRIC SOURCING', desc: 'Heavy 500GSM French Terry sourced. No compromise on weight.' },
  { year: '2024', title: 'FIRST DROP', desc: 'Season 01 — "Origins". Hoodies, tracksuits, caps. Baku to the world.' },
  { year: '2024', title: 'THE ARCHIVE', desc: 'Lookbook shot. The Buta Archive opens. #DONOTBEAFRAID goes live.' },
]

export default function Story() {
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
          background: 'radial-gradient(ellipse at center, rgba(139,0,0,0.15) 0%, var(--color-bg) 60%)',
          position: 'relative',
        }}
      >
        {/* Buta Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: 'clamp(120px, 20vw, 200px)',
            height: 'clamp(120px, 20vw, 200px)',
            marginBottom: 'var(--space-8)',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 0 60px rgba(139, 0, 0, 0.3)',
          }}
        >
          <img
            src="/images/Gemini_Generated_Image_1sts2o1sts2o1sts.webp"
            alt="Buta Logo"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </motion.div>

        <motion.h1
          className="text-display"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          QORXMA
        </motion.h1>
        <motion.p
          className="text-label"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: 'var(--space-4)' }}
        >
          THE ORIGIN STORY
        </motion.p>
      </section>

      {/* The Mark of Fire */}
      <section
        style={{
          padding: 'var(--space-20) var(--space-8)',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-12)',
          alignItems: 'center',
        }}
        className="story-grid"
      >
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            aspectRatio: '4/5',
            overflow: 'hidden',
            background: 'var(--color-surface-mid)',
          }}
        >
          <img
            src="/images/Gemini_Generated_Image_458tz4458tz4458t.webp"
            alt="Azerbaijani Carpet"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-headline" style={{ marginBottom: 'var(--space-4)' }}>
            THE MARK<br />
            OF <span style={{ color: 'var(--color-primary)' }}>FIRE</span>
          </h2>
          <p className="text-body-sm" style={{ maxWidth: '450px', marginBottom: 'var(--space-6)' }}>
            The "Buta" — a teardrop flame found in Azerbaijani carpets for centuries.
            It represents the eternal cycle: death and rebirth, destruction and creation.
            We carry this mark not as decoration, but as a declaration.
          </p>
          <p className="text-body-sm" style={{ maxWidth: '450px' }}>
            Every thread, every stitch, every silhouette in Butafeniks carries the weight
            of this heritage. We don't follow trends — we forge from ashes.
          </p>
        </motion.div>
      </section>

      {/* Obsidian Rebirth */}
      <section
        style={{
          background: 'var(--color-surface-low)',
          padding: 'var(--space-20) var(--space-8)',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '700px', margin: '0 auto' }}
        >
          <p className="text-label" style={{ marginBottom: 'var(--space-2)' }}>
            PHILOSOPHY
          </p>
          <h2 className="text-headline" style={{ marginBottom: 'var(--space-6)' }}>
            OBSIDIAN REBIRTH
          </h2>
          <p className="text-body-sm" style={{ marginBottom: 'var(--space-8)' }}>
            From the void, the phoenix rises. From the ashes of convention, a new
            language of fearlessness is born. Butafeniks is not just clothing — it is
            an armor forged from cultural memory and modern defiance.
          </p>
          <Link
            to="/shop"
            style={{
              display: 'inline-block',
              padding: '14px 40px',
              border: '1px solid var(--color-gold)',
              color: 'var(--color-gold)',
              fontFamily: 'var(--font-label)',
              fontSize: '0.75rem',
              letterSpacing: '0.2em',
              transition: 'all 0.4s var(--ease-predator)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--color-gold)'
              e.currentTarget.style.color = 'var(--color-bg)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--color-gold)'
            }}
          >
            JOIN THE CYCLE
          </Link>
        </motion.div>
      </section>

      {/* The Ascension Path — Timeline */}
      <section
        style={{
          padding: 'var(--space-20) var(--space-8)',
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        <motion.h2
          className="text-headline"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 'var(--space-12)', textAlign: 'center' }}
        >
          THE ASCENSION <span style={{ color: 'var(--color-ember)' }}>PATH</span>
        </motion.h2>

        <div style={{ position: 'relative', paddingLeft: '40px' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '8px',
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(to bottom, var(--color-primary), var(--color-gold))',
            }}
          />

          {milestones.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                marginBottom: 'var(--space-12)',
                position: 'relative',
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-36px',
                  top: '4px',
                  width: '12px',
                  height: '12px',
                  background: 'var(--color-primary)',
                  border: '2px solid var(--color-ember)',
                }}
              />
              <p className="text-label" style={{ color: 'var(--color-ember)', marginBottom: 'var(--space-1)' }}>
                {m.year}
              </p>
              <h3 className="text-headline-sm" style={{ marginBottom: 'var(--space-2)' }}>
                {m.title}
              </h3>
              <p className="text-body-sm">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .story-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
