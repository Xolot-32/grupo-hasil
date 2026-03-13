import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { categories } from '../data/projects';

const all = { id: null, label: 'Todos', icon: null, color: '#F59E0B' };
const items = [all, ...categories];

export default function CategoryNav({ activeCategory, onSelect }) {
  const [hoveredId, setHoveredId] = useState(undefined);
  const [showRightFade, setShowRightFade] = useState(true);
  const scrollRef = useRef(null);
  const buttonRefs = useRef({});
  const activeItem = items.find((i) => i.id === activeCategory) ?? all;

  // Auto-scroll active pill to the left when category changes
  useEffect(() => {
    const container = scrollRef.current;
    const key = activeCategory ?? 'all';
    const btn = buttonRefs.current[key];
    if (!container || !btn) return;

    const containerLeft = container.getBoundingClientRect().left;
    const btnLeft = btn.getBoundingClientRect().left;
    const offset = container.scrollLeft + (btnLeft - containerLeft) - 16;

    container.scrollTo({ left: offset, behavior: 'smooth' });
  }, [activeCategory]);

  // Peek animation on mount — scroll right then back to hint scrollability
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const timer = setTimeout(() => {
      el.scrollTo({ left: 80, behavior: 'smooth' });
      setTimeout(() => {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      }, 600);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  // Hide right fade when scrolled to end
  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
    setShowRightFade(!atEnd);
  };

  return (
    <nav className="sticky-nav" style={{ position: 'relative' }}>
      {/* Active category color bar */}
      <motion.div
        className="absolute top-0 left-0 right-0"
        style={{ height: '2px', background: activeItem.color, opacity: 0.7 }}
        layoutId="topBar"
        transition={{ type: 'spring', stiffness: 400, damping: 40 }}
      />

      {/* Scroll container */}
      <div
        ref={scrollRef}
        className="nav-scroll"
        onScroll={handleScroll}
      >
        <div
          className="flex items-center gap-1 px-4 py-2.5"
          style={{ minWidth: 'max-content' }}
        >
          {items.map((item, i) => {
            const isActive = activeCategory === item.id;
            const isHovered = hoveredId === item.id;

            return (
              <motion.button
                key={item.id ?? 'all'}
                ref={(el) => { buttonRefs.current[item.id ?? 'all'] = el; }}
                onClick={() => onSelect(item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(undefined)}
                // Staggered entrance on mount
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.055, duration: 0.3, ease: 'easeOut' }}
                className="relative flex items-center gap-2 font-barlow whitespace-nowrap"
                style={{
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  outline: 'none',
                  fontSize: '12px',
                  fontWeight: isActive ? 600 : 500,
                  letterSpacing: '0.04em',
                  color: isActive ? '#0D0D0D' : isHovered ? '#F5F5F5' : '#6B7280',
                  transition: 'color 0.2s ease',
                  zIndex: 1,
                }}
              >
                {/* Active sliding pill */}
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0"
                    style={{
                      borderRadius: '9999px',
                      background: item.color,
                      boxShadow: `0 0 18px ${item.color}66, 0 0 6px ${item.color}44`,
                      zIndex: -1,
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                  />
                )}

                {/* Hover ghost pill */}
                <AnimatePresence>
                  {isHovered && !isActive && (
                    <motion.span
                      className="absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        borderRadius: '9999px',
                        background: `${item.color}18`,
                        border: `1px solid ${item.color}44`,
                        zIndex: -1,
                      }}
                      transition={{ duration: 0.15 }}
                    />
                  )}
                </AnimatePresence>

                {/* Dot — pulses on inactive pills */}
                <motion.span
                  animate={
                    !isActive
                      ? {
                          scale: [1, 1.5, 1],
                          opacity: [0.85, 1, 0.85],
                          boxShadow: [
                            `0 0 4px ${item.color}88`,
                            `0 0 10px ${item.color}cc`,
                            `0 0 4px ${item.color}88`,
                          ],
                        }
                      : { scale: 1, opacity: 0.6 }
                  }
                  transition={
                    !isActive
                      ? {
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: 'easeInOut',
                        }
                      : {}
                  }
                  style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: isActive ? '#0D0D0D' : item.color,
                    flexShrink: 0,
                  }}
                />

                {/* Shimmer on inactive — sweeps every 3s */}
                {!isActive && (
                  <motion.span
                    className="absolute inset-0"
                    style={{
                      borderRadius: '9999px',
                      overflow: 'hidden',
                      pointerEvents: 'none',
                      zIndex: 2,
                    }}
                  >
                    <motion.span
                      animate={{ x: ['-100%', '200%'] }}
                      transition={{
                        duration: 1.2,
                        repeat: Infinity,
                        repeatDelay: 2.5 + i * 0.4,
                        ease: 'easeInOut',
                      }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '40%',
                        height: '100%',
                        background: `linear-gradient(90deg, transparent, ${item.color}33, transparent)`,
                        borderRadius: '9999px',
                      }}
                    />
                  </motion.span>
                )}

                {/* Label */}
                <span style={{ position: 'relative', zIndex: 1 }}>{item.label}</span>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Right fade gradient — indicates more content to scroll */}
      <AnimatePresence>
        {showRightFade && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              bottom: 0,
              width: '48px',
              background: 'linear-gradient(90deg, transparent, #0D0D0D)',
              pointerEvents: 'none',
              zIndex: 10,
            }}
          />
        )}
      </AnimatePresence>

      {/* Bottom border */}
      <div style={{ height: '1px', background: 'rgba(255,255,255,0.05)' }} />
    </nav>
  );
}
