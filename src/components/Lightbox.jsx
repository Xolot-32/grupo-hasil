import { useEffect, useRef, useState, useCallback } from 'react';
import { createPortal } from 'react-dom';

export default function Lightbox({ image, allImages, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(() =>
    allImages.findIndex((img) => img.src === image.src)
  );

  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const currentImage = allImages[currentIndex] ?? image;

  const goPrev = useCallback(() => {
    setCurrentIndex((i) => (i > 0 ? i - 1 : allImages.length - 1));
  }, [allImages.length]);

  const goNext = useCallback(() => {
    setCurrentIndex((i) => (i < allImages.length - 1 ? i + 1 : 0));
  }, [allImages.length]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose, goPrev, goNext]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;
    // Only swipe if horizontal movement dominates
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const hasPrev = allImages.length > 1;
  const hasNext = allImages.length > 1;

  return createPortal(
    <div
      className="lightbox-backdrop"
      onClick={handleBackdropClick}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Visor de imagen"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        aria-label="Cerrar visor"
        style={{
          position: 'absolute',
          top: '16px',
          right: '20px',
          background: 'rgba(255,255,255,0.07)',
          border: '1px solid rgba(255,255,255,0.15)',
          color: '#F5F5F5',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '20px',
          borderRadius: 0,
          lineHeight: 1,
          transition: 'background 0.15s, border-color 0.15s',
          zIndex: 10,
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'rgba(245,158,11,0.15)';
          e.currentTarget.style.borderColor = '#F59E0B';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
        }}
      >
        ✕
      </button>

      {/* Counter */}
      {allImages.length > 1 && (
        <div
          style={{
            position: 'absolute',
            top: '22px',
            left: '50%',
            transform: 'translateX(-50%)',
            fontFamily: '"Barlow", sans-serif',
            fontSize: '11px',
            letterSpacing: '0.2em',
            color: 'rgba(245,158,11,0.6)',
            zIndex: 10,
          }}
        >
          {currentIndex + 1} / {allImages.length}
        </div>
      )}

      {/* Prev button */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          aria-label="Imagen anterior"
          style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: '#F5F5F5',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '22px',
            borderRadius: 0,
            lineHeight: 1,
            transition: 'background 0.15s, border-color 0.15s',
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(245,158,11,0.12)';
            e.currentTarget.style.borderColor = '#F59E0B';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
          }}
        >
          ‹
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          aria-label="Siguiente imagen"
          style={{
            position: 'absolute',
            right: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            color: '#F5F5F5',
            width: '44px',
            height: '44px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            fontSize: '22px',
            borderRadius: 0,
            lineHeight: 1,
            transition: 'background 0.15s, border-color 0.15s',
            zIndex: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(245,158,11,0.12)';
            e.currentTarget.style.borderColor = '#F59E0B';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
          }}
        >
          ›
        </button>
      )}

      {/* Image container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '16px',
          padding: '60px 70px 24px',
          maxWidth: '100%',
          maxHeight: '100%',
          pointerEvents: 'none',
        }}
      >
        <img
          key={currentImage.src}
          src={currentImage.src}
          alt={currentImage.alt}
          className="lightbox-img"
          style={{ pointerEvents: 'none' }}
        />

        {/* Caption */}
        <div
          style={{
            textAlign: 'center',
            pointerEvents: 'none',
          }}
        >
          <p
            style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: '13px',
              color: '#9CA3AF',
              margin: 0,
              lineHeight: 1.5,
            }}
          >
            {currentImage.alt}
          </p>
          {currentImage.categoryLabel && (
            <p
              style={{
                fontFamily: '"Barlow", sans-serif',
                fontSize: '10px',
                color: currentImage.categoryColor || '#F59E0B',
                margin: '4px 0 0',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
              }}
            >
              {currentImage.categoryLabel}
            </p>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
