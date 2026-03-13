import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const contacts = [
  {
    name: 'Mauricio Rodríguez',
    phone: '55 4833 6631',
    email: 'carlos.rdz.pz@gmail.com',
    whatsapp: 'https://wa.me/525548336631',
    color: '#F59E0B',
  },
  {
    name: 'Jose Durán',
    phone: '55 8816 5984',
    email: 'jose9duran@yahoo.com',
    whatsapp: 'https://wa.me/525588165984',
    color: '#06B6D4',
  },
];

export default function ContactFloat() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 100 }}>
      {/* Contact panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
            style={{
              position: 'absolute',
              bottom: '60px',
              right: 0,
              width: '260px',
              background: '#141414',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(245,158,11,0.1)',
            }}
          >
            {/* Header */}
            <div
              style={{
                padding: '12px 16px 10px',
                borderBottom: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(245,158,11,0.05)',
              }}
            >
              <p
                className="font-display uppercase"
                style={{ fontSize: '10px', letterSpacing: '0.25em', color: '#F59E0B', margin: 0 }}
              >
                ◈ Contacto
              </p>
            </div>

            {/* Contact cards */}
            <div style={{ padding: '12px 16px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {contacts.map((c) => (
                <div key={c.name}>
                  {/* Name */}
                  <p
                    className="font-barlow"
                    style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#F5F5F5',
                      margin: '0 0 6px',
                      borderLeft: `2px solid ${c.color}`,
                      paddingLeft: '8px',
                    }}
                  >
                    {c.name}
                  </p>

                  {/* Phone */}
                  <a
                    href={`tel:${c.phone.replace(/\s/g, '')}`}
                    className="font-body"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      fontSize: '12px',
                      color: '#9CA3AF',
                      textDecoration: 'none',
                      marginBottom: '4px',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = c.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                    </svg>
                    {c.phone}
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${c.email}`}
                    className="font-body"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      fontSize: '11px',
                      color: '#6B7280',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      marginBottom: '8px',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = c.color)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#6B7280')}
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                    {c.email}
                  </a>

                  {/* WhatsApp */}
                  <a
                    href={c.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-barlow"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      fontSize: '11px',
                      fontWeight: 600,
                      letterSpacing: '0.04em',
                      color: '#0D0D0D',
                      background: '#25D366',
                      padding: '4px 10px',
                      borderRadius: '9999px',
                      textDecoration: 'none',
                      transition: 'opacity 0.2s, box-shadow 0.2s',
                      boxShadow: '0 0 10px #25D36644',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.opacity = '0.85';
                      e.currentTarget.style.boxShadow = '0 0 16px #25D36688';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.boxShadow = '0 0 10px #25D36644';
                    }}
                  >
                    {/* WhatsApp icon */}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Escribir por WhatsApp
                  </a>
                </div>
              ))}
            </div>

            {/* Bottom amber line */}
            <div style={{ height: '2px', background: 'linear-gradient(90deg, #F59E0B, #06B6D4)' }} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating button wrapper — sonar rings + label */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>

        {/* Label "Contáctanos" — aparece a la izquierda */}
        <AnimatePresence>
          {!open && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 1.5, duration: 0.4 }}
              className="font-barlow"
              style={{
                position: 'absolute',
                right: '58px',
                whiteSpace: 'nowrap',
                fontSize: '11px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: '#F59E0B',
                background: '#1A1A1A',
                border: '1px solid rgba(245,158,11,0.25)',
                padding: '4px 10px',
                borderRadius: '9999px',
                pointerEvents: 'none',
              }}
            >
              Contáctanos
            </motion.span>
          )}
        </AnimatePresence>

        {/* Sonar rings — solo cuando está cerrado */}
        {!open && (
          <>
            {[1].map((i) => (
              <motion.span
                key={i}
                animate={{ scale: [1, 1.9], opacity: [0.35, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: [0.2, 0.5, 0.8, 1],
                  repeatDelay: 0.5,
                }}
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: '50%',
                  border: '1.5px solid #F59E0B',
                  pointerEvents: 'none',
                }}
              />
            ))}
          </>
        )}

        {/* Dot pulsante — arriba a la derecha */}
        {!open && (
          <motion.span
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#F59E0B',
              border: '2px solid #0D0D0D',
              zIndex: 10,
              pointerEvents: 'none',
            }}
          />
        )}

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        style={{
          width: '48px',
          height: '48px',
          borderRadius: '50%',
          border: '1px solid rgba(245,158,11,0.35)',
          background: open ? '#F59E0B' : '#1A1A1A',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: open
            ? '0 0 24px #F59E0B66, 0 4px 20px rgba(0,0,0,0.5)'
            : '0 0 14px rgba(245,158,11,0.2), 0 4px 20px rgba(0,0,0,0.5)',
          transition: 'background 0.25s ease, box-shadow 0.25s ease',
          outline: 'none',
          position: 'relative',
        }}
        aria-label="Contacto"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#0D0D0D" strokeWidth="2.5" strokeLinecap="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </motion.svg>
          ) : (
            <motion.svg
              key="phone"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              width="18" height="18" viewBox="0 0 24 24" fill="none"
              stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.91a16 16 0 006.16 6.16l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
      </div>
    </div>
  );
}
