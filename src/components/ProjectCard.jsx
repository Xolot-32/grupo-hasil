import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function ProjectCard({ image, index, onOpen }) {
  const { src, alt, categoryColor } = image;
  const ref = useRef(null);

  // Trigger when 25% of the card is visible — re-triggers on scroll up/down
  const isInView = useInView(ref, { once: false, amount: 0.25 });

  return (
    <motion.div
      ref={ref}
      className="project-card"
      style={{
        borderBottomColor: categoryColor,
        animationDelay: `${(index % 12) * 50}ms`,
        animationFillMode: 'both',
      }}
      onClick={() => onOpen(image)}
      role="button"
      tabIndex={0}
      aria-label={`Ver imagen: ${alt}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpen(image);
        }
      }}
      // Card entry animation
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06, ease: 'easeOut' }}
    >
      {/* Image with grayscale → color reveal on scroll */}
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{ width: '100%', height: 'auto', display: 'block' }}
        animate={
          isInView
            ? {
                filter: 'grayscale(0%) brightness(1) saturate(1.05)',
              }
            : {
                filter: 'grayscale(100%) brightness(0.45) contrast(1.1)',
              }
        }
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Overlay on hover */}
      <div className="card-overlay">
        <p className="card-overlay-text">{alt}</p>
      </div>

      {/* Category color accent — only visible once image is in view */}
      <motion.div
        animate={isInView ? { opacity: 0.75, scaleY: 1 } : { opacity: 0, scaleY: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '3px',
          height: '28px',
          background: categoryColor,
          transformOrigin: 'top',
          boxShadow: `0 0 8px ${categoryColor}99`,
        }}
      />
    </motion.div>
  );
}
