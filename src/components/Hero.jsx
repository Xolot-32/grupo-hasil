export default function Hero() {
  return (
    <header
      className="noise-bg relative flex flex-col items-center justify-center text-center px-6"
      style={{
        minHeight: 'clamp(220px, 35vh, 400px)',
        background: 'linear-gradient(180deg, #111111 0%, #0D0D0D 100%)',
      }}
    >
      {/* Top amber rule */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #F59E0B 50%, transparent 100%)' }}
      />

      {/* Logo Grupo Hasil */}
      <div
        className="mb-4 flex items-center"
        style={{ gap: '4px' }}
      >
        {/* Sculpture image */}
        <img
          src="/logoHasil/1.png"
          alt="Grupo Hasil"
          style={{
            height: 'clamp(160px, 28vw, 260px)',
            width: 'auto',
            objectFit: 'contain',
            filter: 'drop-shadow(0 6px 24px rgba(0,0,0,0.6))',
            flexShrink: 0,
          }}
        />

        {/* Text block */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          {/* Grupo Hasil */}
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(42px, 9vw, 82px)',
              lineHeight: 1.0,
              color: '#C8D8F0',
              letterSpacing: '-0.01em',
              textShadow: '0 2px 20px rgba(140,170,220,0.25)',
            }}
          >
            <div>Grupo</div>
            <div>Hasil</div>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 500,
              fontSize: 'clamp(16px, 3vw, 26px)',
              color: '#6B7280',
              marginTop: '8px',
              letterSpacing: '0.01em',
            }}
          >
            Arte en diseño y Publicidad&nbsp;...
          </div>

        </div>
      </div>

      {/* Tagline */}
      <p
        className="font-display uppercase tracking-widest"
        style={{
          fontSize: 'clamp(13px, 2.5vw, 20px)',
          fontWeight: 600,
          color: '#F59E0B',
          letterSpacing: '0.35em',
          marginBottom: '16px',
        }}
      >
        Anuncios&nbsp;&nbsp;·&nbsp;&nbsp;Imagen&nbsp;&nbsp;·&nbsp;&nbsp;Rotulación
      </p>

      {/* Amber divider */}
      <div className="flex items-center gap-4 mb-4">
        <div style={{ width: '64px', height: '1px', background: 'rgba(245,158,11,0.4)' }} />
        <div style={{ width: '6px', height: '6px', background: '#F59E0B', transform: 'rotate(45deg)' }} />
        <div style={{ width: '64px', height: '1px', background: 'rgba(245,158,11,0.4)' }} />
      </div>

      {/* Subtitle */}
      <p
        className="font-body max-w-xl"
        style={{
          fontSize: 'clamp(13px, 1.8vw, 15px)',
          color: '#9CA3AF',
          lineHeight: 1.6,
          maxWidth: '520px',
        }}
      >
        Fabricación profesional de anuncios luminosos y soluciones de imagen corporativa
      </p>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      />
    </header>
  );
}
