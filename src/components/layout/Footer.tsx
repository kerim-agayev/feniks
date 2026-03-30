export function Footer() {
  return (
    <footer
      style={{
        background: 'var(--color-surface-low)',
        padding: 'var(--space-12) var(--space-8) var(--space-8)',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background brand name */}
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(5rem, 15vw, 16rem)',
          color: 'var(--color-surface-mid)',
          lineHeight: 0.9,
          userSelect: 'none',
          marginBottom: 'var(--space-8)',
        }}
      >
        BUTAFENIKS
      </div>

      {/* Social links */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 'var(--space-6)',
          marginBottom: 'var(--space-4)',
        }}
      >
        {['INSTAGRAM', 'TWITTER', 'TIKTOK', 'WHATSAPP'].map((social) => (
          <a
            key={social}
            href="#"
            style={{
              fontFamily: 'var(--font-label)',
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
              color: 'var(--color-muted)',
              transition: 'color 0.3s',
            }}
          >
            {social}
          </a>
        ))}
      </div>

      {/* Copyright */}
      <p
        style={{
          fontFamily: 'var(--font-label)',
          fontSize: '0.65rem',
          color: 'var(--color-muted)',
          letterSpacing: '0.1em',
          opacity: 0.6,
        }}
      >
        &copy; 2024 BUTAFENIKS #DONOTBEAFRAID
      </p>
    </footer>
  )
}
