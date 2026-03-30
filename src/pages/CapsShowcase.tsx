import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { products } from '../data/products'

gsap.registerPlugin(ScrollTrigger)

const caps = products.filter((p) => p.category === 'caps')
const filterColors = [
  { name: 'ALL', hex: '' },
  { name: 'BEIGE', hex: '#C8B48A' },
  { name: 'WHITE', hex: '#F5F0E8' },
  { name: 'GREEN', hex: '#2D5A3D' },
  { name: 'BLACK', hex: '#1a1a1a' },
]

export default function CapsShowcase() {
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [email, setEmail] = useState('')
  const sectionRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const filteredCaps = activeFilter === 'ALL'
    ? caps
    : caps.filter((c) => c.colors[0].name === activeFilter)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const ctx = gsap.context(() => {
      const totalScroll = track.scrollWidth - window.innerWidth

      if (totalScroll > 0) {
        gsap.to(track, {
          x: -totalScroll,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: `+=${totalScroll * 1.5}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        })
      }
    }, section)

    return () => ctx.revert()
  }, [filteredCaps])

  return (
    <div style={{ paddingTop: '70px' }}>
      {/* Header */}
      <section
        style={{
          padding: 'var(--space-12) var(--space-8) var(--space-6)',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: 'var(--space-4)',
        }}
      >
        <div>
          <p className="text-label" style={{ marginBottom: 'var(--space-2)' }}>
            ARCHIVE COLLECTION
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 10vw, 9rem)',
              lineHeight: 0.9,
              color: 'var(--color-cream)',
            }}
          >
            CAP <span style={{ color: 'var(--color-primary)' }}>SERIES</span>
          </h1>
        </div>

        {/* Color Filter */}
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <span className="text-label" style={{ fontSize: '0.6rem', marginRight: '8px' }}>
            FILTER BY FINISH
          </span>
          {filterColors.map((fc) => (
            <button
              key={fc.name}
              onClick={() => setActiveFilter(fc.name)}
              style={{
                width: fc.name === 'ALL' ? 'auto' : '28px',
                height: '28px',
                padding: fc.name === 'ALL' ? '0 12px' : 0,
                background: fc.name === 'ALL' ? 'transparent' : fc.hex,
                border:
                  activeFilter === fc.name
                    ? '2px solid var(--color-gold)'
                    : '2px solid var(--color-surface-high)',
                fontFamily: 'var(--font-label)',
                fontSize: '0.6rem',
                letterSpacing: '0.1em',
                color: 'var(--color-cream)',
                transition: 'border-color 0.3s',
              }}
            >
              {fc.name === 'ALL' ? 'ALL' : ''}
            </button>
          ))}
        </div>
      </section>

      {/* GSAP Horizontal Scroll */}
      <div ref={sectionRef} style={{ overflow: 'hidden' }}>
        <div
          ref={trackRef}
          style={{
            display: 'flex',
            gap: 'var(--space-6)',
            paddingLeft: 'var(--space-8)',
            paddingRight: '30vw',
            paddingTop: 'var(--space-8)',
            paddingBottom: 'var(--space-12)',
            width: 'fit-content',
          }}
        >
          {filteredCaps.map((cap, i) => (
            <motion.div
              key={cap.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                width: 'clamp(280px, 30vw, 380px)',
                flexShrink: 0,
              }}
            >
              <div
                style={{
                  aspectRatio: '3/4',
                  background: 'var(--color-surface-mid)',
                  overflow: 'hidden',
                  marginBottom: 'var(--space-4)',
                  position: 'relative',
                }}
              >
                <img
                  src={cap.images[0]}
                  alt={cap.name}
                  className="product-image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
                <span
                  style={{
                    position: 'absolute',
                    bottom: 'var(--space-4)',
                    left: 'var(--space-4)',
                    fontFamily: 'var(--font-display)',
                    fontSize: '3rem',
                    color: 'var(--color-cream)',
                    opacity: 0.2,
                    lineHeight: 1,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="text-label" style={{ fontSize: '0.65rem', marginBottom: '4px' }}>
                {cap.material}
              </p>
              <p
                style={{
                  fontFamily: 'var(--font-label)',
                  fontSize: '1rem',
                  letterSpacing: '0.05em',
                  color: 'var(--color-cream)',
                }}
              >
                &#8380;{cap.price.toFixed(2)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Scroll hint */}
        <div
          style={{
            padding: '0 var(--space-8) var(--space-6)',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '40px',
                height: '2px',
                background: 'linear-gradient(to right, var(--color-primary), var(--color-gold))',
              }}
            />
            <span className="text-label" style={{ fontSize: '0.6rem' }}>
              SCROLL TO EXPLORE ARCHIVE
            </span>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <section
        style={{
          background: 'var(--color-surface-low)',
          padding: 'var(--space-20) var(--space-8)',
          textAlign: 'center',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(5rem, 12vw, 14rem)',
            color: 'var(--color-surface-mid)',
            lineHeight: 0.9,
            userSelect: 'none',
            marginBottom: 'var(--space-12)',
          }}
        >
          BUTAFENIKS
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
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

        <h3
          style={{
            fontFamily: 'var(--font-headline)',
            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
            fontWeight: 800,
            color: 'var(--color-primary)',
            marginBottom: 'var(--space-6)',
          }}
        >
          SUBSCRIBE TO THE ASHES
        </h3>

        <form
          onSubmit={(e) => e.preventDefault()}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 0,
            maxWidth: '450px',
            margin: '0 auto',
          }}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ENTER YOUR EMAIL"
            style={{
              flex: 1,
              padding: '14px 20px',
              background: 'transparent',
              border: 'none',
              borderBottom: '2px solid var(--color-surface-high)',
              color: 'var(--color-cream)',
              fontFamily: 'var(--font-label)',
              fontSize: '0.75rem',
              letterSpacing: '0.1em',
              outline: 'none',
            }}
          />
          <button
            type="submit"
            style={{
              padding: '14px 32px',
              background: 'var(--color-primary)',
              color: 'var(--color-cream)',
              fontFamily: 'var(--font-label)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
            }}
          >
            JOIN
          </button>
        </form>
      </section>

      <style>{`
        .caps-track::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  )
}
