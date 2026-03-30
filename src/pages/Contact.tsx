import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Flame } from 'lucide-react'

export default function Contact() {
  const [email, setEmail] = useState('')

  return (
    <div>
      {/* Hero */}
      <section
        style={{
          height: '60vh',
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 var(--space-8)',
          paddingTop: '70px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem, 10vw, 10rem)',
            lineHeight: 0.9,
            textTransform: 'uppercase',
          }}
        >
          STAY IN<br />THE FIRE
        </motion.h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: 'var(--space-6)',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-body-sm"
            style={{ maxWidth: '400px' }}
          >
            For inquiries, collaborations, or whispers from the void.
            Reach out and join the lineage of the obsidian rebirth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            style={{ textAlign: 'right' }}
          >
            <p className="text-label" style={{ fontSize: '0.6rem', marginBottom: '4px' }}>
              LOCATION
            </p>
            <p className="text-headline-sm" style={{ fontSize: '1rem' }}>
              BAKU / AZERBAIJAN
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section
        style={{
          padding: '0 var(--space-8) var(--space-16)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-4)',
          }}
          className="contact-grid"
        >
          {/* Manifesto Updates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'var(--color-surface-low)',
              padding: 'var(--space-8)',
            }}
          >
            <h3 className="text-headline-sm" style={{ marginBottom: 'var(--space-4)' }}>
              MANIFESTO<br />UPDATES
            </h3>
            <p className="text-body-sm" style={{ marginBottom: 'var(--space-6)' }}>
              Sacrifice your anonymity. Be the first to witness new drops and clandestine events.
            </p>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ENTER YOUR EMAIL"
                style={{
                  width: '100%',
                  padding: '12px 0',
                  background: 'transparent',
                  border: 'none',
                  borderBottom: '2px solid var(--color-surface-high)',
                  color: 'var(--color-cream)',
                  fontFamily: 'var(--font-label)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  outline: 'none',
                }}
              />
            </form>
          </motion.div>

          {/* Connect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              background: 'var(--color-surface-low)',
              padding: 'var(--space-8)',
            }}
          >
            <h3 className="text-headline-sm" style={{ marginBottom: 'var(--space-6)' }}>
              CONNECT
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontFamily: 'var(--font-label)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  color: 'var(--color-cream)',
                }}
              >
                <Flame size={16} /> INSTAGRAM / @BUTAFENIKS
              </a>
              <a
                href="#"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontFamily: 'var(--font-label)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  color: 'var(--color-cream)',
                }}
              >
                <MessageCircle size={16} /> WHATSAPP / ENCRYPTED
              </a>
            </div>
            <div style={{ marginTop: 'var(--space-8)' }}>
              <p className="text-label" style={{ fontSize: '0.6rem', marginBottom: '4px' }}>
                SUPPORT
              </p>
              <a
                href="mailto:void@butafeniks.com"
                style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.1em',
                  color: 'var(--color-ember)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Mail size={14} /> VOID@BUTAFENIKS.COM
              </a>
            </div>
          </motion.div>

          {/* Rise from the Ashes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              background: 'var(--color-surface-mid)',
            }}
          >
            <img
              src="/images/Gemini_Generated_Image_458tz4458tz4458t.webp"
              alt="Rise from the ashes"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.4,
              }}
            />
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(19,19,19,0.9) 0%, transparent 50%)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: 'var(--space-8)',
                left: 'var(--space-6)',
                right: 'var(--space-6)',
              }}
            >
              <h3
                style={{
                  fontFamily: 'var(--font-headline)',
                  fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  lineHeight: 1.1,
                }}
              >
                RISE FROM<br />THE ASHES
              </h3>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section
        style={{
          background: 'var(--color-surface-low)',
          padding: 'var(--space-24) var(--space-8)',
          textAlign: 'center',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 8rem)',
              color: 'var(--color-gold)',
              lineHeight: 0.9,
              marginBottom: 'var(--space-4)',
            }}
          >
            #DONOTBEAFRAID
          </h2>
          <p className="text-label" style={{ marginBottom: 'var(--space-8)' }}>
            MEMENTO MORI
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-6)' }}>
            {['INSTAGRAM', 'TWITTER', 'TIKTOK', 'WHATSAPP'].map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.15em',
                  color: 'var(--color-muted)',
                }}
              >
                {s}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
