export default function Footer() {
  return (
    <footer
      style={{
        background: '#141414',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        marginTop: 'auto',
      }}
    >
      {/* Amber top accent line */}
      <div
        style={{
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #F59E0B 50%, transparent 100%)',
          opacity: 0.5,
        }}
      />

      <div
        className="flex flex-col sm:flex-row items-center justify-between gap-3 px-6 py-6"
        style={{ maxWidth: '1400px', margin: '0 auto', width: '100%' }}
      >
        {/* Brand */}
        <div className="flex items-center gap-3">
          <span
            className="font-display uppercase tracking-widest"
            style={{ fontSize: '14px', fontWeight: 700, color: '#F5F5F5', letterSpacing: '0.2em' }}
          >
            Grupo Hasil
          </span>
          <div style={{ width: '4px', height: '4px', background: '#F59E0B', transform: 'rotate(45deg)' }} />
          <span className="font-barlow" style={{ fontSize: '11px', color: '#4B5563', letterSpacing: '0.15em' }}>
            Anuncios · Imagen · Rotulación
          </span>
        </div>

        {/* Sello GH — centro */}
        <img
          src="/logoHasil/2.png"
          alt="Sello GH"
          style={{ height: '80px', width: 'auto', opacity: 0.9 }}
        />

        {/* Copyright */}
        <p className="font-body" style={{ fontSize: '12px', color: '#4B5563', margin: 0 }}>
          © 2026 Grupo Hasil. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
