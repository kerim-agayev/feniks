import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'
import { useCartStore } from '../../store/cartStore'

const navLinks = [
  { path: '/', label: 'HOME' },
  { path: '/shop', label: 'SHOP' },
  { path: '/lookbook', label: 'LOOKBOOK' },
  { path: '/story', label: 'STORY' },
  { path: '/contact', label: 'CONTACT' },
]

export function Navbar() {
  const location = useLocation()
  const totalItems = useCartStore((s) => s.totalItems)
  const toggleCart = useCartStore((s) => s.toggleCart)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9000,
        padding: '0 var(--space-8)',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(14, 14, 14, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        transition: 'background 0.5s var(--ease-predator), backdrop-filter 0.5s',
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.4rem',
          letterSpacing: '0.05em',
          color: 'var(--color-primary)',
          fontWeight: 900,
        }}
      >
        BUTAFENIKS
      </Link>

      {/* Desktop Links */}
      <div
        style={{
          display: 'flex',
          gap: 'var(--space-6)',
          alignItems: 'center',
        }}
        className="nav-desktop"
      >
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              fontFamily: 'var(--font-label)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color:
                location.pathname === link.path
                  ? 'var(--color-primary)'
                  : 'var(--color-cream)',
              position: 'relative',
              paddingBottom: '4px',
              borderBottom:
                location.pathname === link.path
                  ? '2px solid var(--color-primary)'
                  : '2px solid transparent',
              transition: 'color 0.3s, border-color 0.3s',
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Right Icons */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
        <button
          onClick={toggleCart}
          style={{ position: 'relative', color: 'var(--color-cream)' }}
        >
          <ShoppingBag size={20} />
          {totalItems() > 0 && (
            <span
              style={{
                position: 'absolute',
                top: -6,
                right: -8,
                background: 'var(--color-primary)',
                color: 'var(--color-cream)',
                fontSize: '0.6rem',
                width: 16,
                height: 16,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-label)',
              }}
            >
              {totalItems()}
            </span>
          )}
        </button>

        {/* Mobile menu toggle */}
        <button
          className="nav-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ color: 'var(--color-cream)', display: 'none' }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(14, 14, 14, 0.95)',
            backdropFilter: 'blur(20px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'var(--space-8)',
            zIndex: 8999,
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2rem',
                letterSpacing: '0.1em',
                color:
                  location.pathname === link.path
                    ? 'var(--color-primary)'
                    : 'var(--color-cream)',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
