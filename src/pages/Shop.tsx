import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import { categories, products } from '../data/products'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category')

  const filteredProducts = activeCategory
    ? products.filter((p) => p.category === activeCategory)
    : null

  // If a category is selected, show products
  if (activeCategory && filteredProducts) {
    return (
      <div style={{ paddingTop: '70px' }}>
        {/* Back + Header */}
        <section
          style={{
            padding: 'var(--space-8) var(--space-8) var(--space-6)',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          <Link
            to="/shop"
            style={{
              fontFamily: 'var(--font-label)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              color: 'var(--color-muted)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: 'var(--space-6)',
            }}
          >
            <ArrowLeft size={14} /> BACK TO COLLECTIONS
          </Link>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              lineHeight: 0.9,
              textTransform: 'uppercase',
            }}
          >
            {activeCategory}
          </h1>
        </section>

        {/* Product Grid */}
        <section
          style={{
            padding: '0 var(--space-8) var(--space-16)',
            maxWidth: '1200px',
            margin: '0 auto',
          }}
        >
          {filteredProducts.length === 0 ? (
            <p className="text-body-sm" style={{ padding: 'var(--space-8) 0' }}>
              Coming soon — no products in this category yet.
            </p>
          ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 'var(--space-6)',
              }}
            >
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={cardVariants}
                >
                  <Link
                    to={`/shop/${product.id}`}
                    style={{ display: 'block' }}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        rotateY: 2,
                        rotateX: -1,
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        aspectRatio: '1',
                        background: 'var(--color-surface-mid)',
                        overflow: 'hidden',
                        marginBottom: 'var(--space-3)',
                        position: 'relative',
                      }}
                    >
                      <img
                        src={product.colors[0].image}
                        alt={product.name}
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
                          background: 'linear-gradient(to top, rgba(19,19,19,0.6) 0%, transparent 40%)',
                        }}
                      />
                    </motion.div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-headline)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        marginBottom: '4px',
                      }}
                    >
                      {product.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: 'var(--font-label)',
                        fontSize: '0.85rem',
                        color: 'var(--color-gold)',
                      }}
                    >
                      &#8380;{product.price.toFixed(2)}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </section>
      </div>
    )
  }

  // Default: show category grid
  return (
    <div style={{ paddingTop: '70px' }}>
      {/* Header */}
      <section
        style={{
          padding: 'var(--space-16) var(--space-8) var(--space-12)',
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-8)',
          alignItems: 'end',
        }}
        className="shop-header-grid"
      >
        <div>
          <p className="text-label" style={{ marginBottom: 'var(--space-2)' }}>
            SEASON 01 / ORIGINS
          </p>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(4rem, 10vw, 10rem)',
            lineHeight: 0.9,
            color: 'var(--color-cream)',
          }}>
            THE<br />
            <span style={{ fontFamily: 'var(--font-headline)', fontWeight: 900 }}>
              COLLECTIONS
            </span>
          </h1>
        </div>
        <div>
          <p className="text-body-sm" style={{ maxWidth: '350px', marginLeft: 'auto' }}>
            A fusion of Azerbaijani heritage and tactical streetwear. Each piece is a
            testament to the obsidian spirit — forged in shadow, rising in fire.
          </p>
        </div>
      </section>

      {/* Category Grid */}
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
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 'var(--space-4)',
          }}
          className="category-grid"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
            >
              <Link
                to={cat.slug === 'caps' ? '/shop/caps' : `/shop?category=${cat.slug}`}
                style={{
                  display: 'block',
                  position: 'relative',
                  aspectRatio: '1',
                  overflow: 'hidden',
                  background: 'var(--color-surface-mid)',
                }}
              >
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    rotateY: 2,
                    rotateX: -1,
                  }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="product-image"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.7,
                      transition: 'opacity 0.5s var(--ease-predator)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9' }}
                    onMouseLeave={(e) => { e.currentTarget.style.opacity = '0.7' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(19,19,19,0.8) 0%, transparent 60%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 'var(--space-6)',
                      left: 'var(--space-6)',
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: 'var(--font-headline)',
                        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                        fontWeight: 800,
                        color: 'var(--color-cream)',
                        textTransform: 'uppercase',
                        marginBottom: 'var(--space-2)',
                      }}
                    >
                      {cat.name}
                    </h3>
                    <span
                      style={{
                        fontFamily: 'var(--font-label)',
                        fontSize: '0.65rem',
                        letterSpacing: '0.15em',
                        color: 'var(--color-muted)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      EXPLORE CATEGORY <ArrowRight size={12} />
                    </span>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Shop CTA */}
      <section
        style={{
          padding: 'var(--space-12) var(--space-8) var(--space-16)',
          textAlign: 'center',
          borderTop: '1px solid var(--color-outline)',
        }}
      >
        <p className="text-label" style={{ marginBottom: 'var(--space-4)', color: 'var(--color-muted)' }}>
          AUTHENTICITY RUNS DEEP. QUALITY IS CULTURAL CURRENCY.
        </p>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .shop-header-grid { grid-template-columns: 1fr !important; }
          .category-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
