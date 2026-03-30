import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { products } from '../data/products'
import { useCartStore } from '../store/cartStore'
import { ProductViewer } from '../components/3d/ProductViewer'
import { ErrorBoundary } from '../components/ui/ErrorBoundary'

export default function ProductDetail() {
  const { productId } = useParams()
  const product = products.find((p) => p.id === productId) || products[0]
  const [selectedColor, setSelectedColor] = useState(0)
  const [selectedSize, setSelectedSize] = useState('')
  const addItem = useCartStore((s) => s.addItem)

  const handleAddToCart = () => {
    if (!selectedSize) return
    addItem({
      productId: product.id,
      color: product.colors[selectedColor].name,
      size: selectedSize,
    })
  }

  return (
    <div style={{ paddingTop: '70px' }}>
      {/* Back link */}
      <div style={{ padding: 'var(--space-4) var(--space-8)' }}>
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
          }}
        >
          <ArrowLeft size={14} /> BACK TO SHOP
        </Link>
      </div>

      {/* Product Layout */}
      <section
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 var(--space-8) var(--space-16)',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'var(--space-12)',
          alignItems: 'start',
        }}
        className="product-detail-grid"
      >
        {/* LEFT — 3D Product Viewer */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          style={{
            aspectRatio: '1',
            background: 'var(--color-surface-mid)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {product.modelFile ? (
            <ErrorBoundary>
              <ProductViewer
                modelPath={product.modelFile}
                color={product.colors[selectedColor].hex}
              />
            </ErrorBoundary>
          ) : (
            <img
              src={product.colors[selectedColor].image}
              alt={product.name}
              className="product-image"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          )}
          <div
            style={{
              position: 'absolute',
              bottom: 'var(--space-4)',
              left: 'var(--space-4)',
            }}
          >
            <span className="text-label" style={{ fontSize: '0.6rem', opacity: 0.5 }}>
              {product.modelFile ? 'DRAG TO ROTATE' : ''}
            </span>
          </div>
        </motion.div>

        {/* RIGHT — Product Info */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {product.lookNumber && (
            <p className="text-label" style={{ marginBottom: 'var(--space-2)', color: 'var(--color-muted)' }}>
              {product.lookNumber}
            </p>
          )}
          <h1
            style={{
              fontFamily: 'var(--font-headline)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 1,
              marginBottom: 'var(--space-4)',
            }}
          >
            {product.name}
          </h1>

          <p
            className="text-body-sm"
            style={{ marginBottom: 'var(--space-6)', maxWidth: '400px' }}
          >
            {product.description}
          </p>

          {/* Price */}
          <div
            style={{
              fontFamily: 'var(--font-label)',
              fontSize: '1.1rem',
              letterSpacing: '0.05em',
              marginBottom: 'var(--space-8)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <span style={{ color: 'var(--color-gold)' }}>&#8380;</span>
            <span>{product.price.toFixed(2)}</span>
          </div>

          {/* Color Selector */}
          <div style={{ marginBottom: 'var(--space-6)' }}>
            <p className="text-label" style={{ marginBottom: 'var(--space-2)' }}>
              COLOR — {product.colors[selectedColor].name}
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {product.colors.map((color, i) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(i)}
                  style={{
                    width: '36px',
                    height: '36px',
                    background: color.hex,
                    border:
                      selectedColor === i
                        ? '2px solid var(--color-gold)'
                        : '2px solid var(--color-surface-high)',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s',
                  }}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <p className="text-label" style={{ marginBottom: 'var(--space-2)' }}>
              SIZE
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  style={{
                    padding: '10px 20px',
                    fontFamily: 'var(--font-label)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.1em',
                    background:
                      selectedSize === size
                        ? 'var(--color-cream)'
                        : 'transparent',
                    color:
                      selectedSize === size
                        ? 'var(--color-bg)'
                        : 'var(--color-cream)',
                    border: `1px solid ${
                      selectedSize === size
                        ? 'var(--color-cream)'
                        : 'var(--color-surface-high)'
                    }`,
                    transition: 'all 0.3s var(--ease-predator)',
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            style={{
              width: '100%',
              padding: '18px',
              background: selectedSize ? 'var(--color-primary)' : 'var(--color-surface-high)',
              color: 'var(--color-cream)',
              fontFamily: 'var(--font-label)',
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              cursor: selectedSize ? 'pointer' : 'not-allowed',
              transition: 'background 0.4s var(--ease-predator)',
            }}
          >
            {selectedSize ? 'ADD TO CART' : 'SELECT A SIZE'}
          </button>

          {/* Material */}
          <div
            style={{
              marginTop: 'var(--space-8)',
              paddingTop: 'var(--space-6)',
              borderTop: '1px solid var(--color-outline)',
            }}
          >
            <p className="text-label" style={{ marginBottom: 'var(--space-2)' }}>
              FABRIC ARCHITECTURE
            </p>
            <p className="text-body-sm">{product.material}</p>
          </div>
        </motion.div>
      </section>

      {/* Quote Bar */}
      <section
        style={{
          background: 'var(--color-surface-low)',
          padding: 'var(--space-16) var(--space-8)',
          textAlign: 'center',
        }}
      >
        <p
          className="text-display"
          style={{
            fontSize: 'clamp(2rem, 6vw, 6rem)',
            opacity: 0.15,
            userSelect: 'none',
          }}
        >
          "DO NOT BE AFRAID"
        </p>
        <p className="text-label" style={{ marginTop: 'var(--space-4)', color: 'var(--color-muted)' }}>
          EVERY STITCH TELLS THE STORY OF SURVIVAL
        </p>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .product-detail-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
