import { useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { categories, getAllImages } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function ProjectGrid({ activeCategory, onOpenImage }) {
  const images = useMemo(() => {
    if (activeCategory === null) {
      return getAllImages();
    }
    const cat = categories.find((c) => c.id === activeCategory);
    if (!cat) return [];
    return cat.images.map((img) => ({
      ...img,
      categoryId: cat.id,
      categoryLabel: cat.label,
      categoryColor: cat.color,
    }));
  }, [activeCategory]);

  // Category description banner
  const activeCat = activeCategory
    ? categories.find((c) => c.id === activeCategory)
    : null;

  return (
    <section className="px-4 pt-6 pb-12" style={{ background: '#0D0D0D' }}>
      {/* Info bar */}
      <div className="flex items-center justify-between mb-5">
        <div>
          {activeCat ? (
            <div>
              <span
                className="font-display uppercase text-sm tracking-widest"
                style={{ color: activeCat.color, fontSize: '11px', letterSpacing: '0.3em' }}
              >
                {activeCat.icon} {activeCat.label}
              </span>
              <p
                className="font-body mt-0.5"
                style={{ fontSize: '12px', color: '#6B7280' }}
              >
                {activeCat.description}
              </p>
            </div>
          ) : (
            <span
              className="font-display uppercase"
              style={{ color: '#4B5563', fontSize: '11px', letterSpacing: '0.3em' }}
            >
              Todos los trabajos
            </span>
          )}
        </div>
      </div>

      {/* Masonry grid with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory ?? 'all'}
          className="masonry-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {images.map((image, index) => (
            <ProjectCard
              key={`${image.src}-${index}`}
              image={image}
              index={index}
              onOpen={onOpenImage}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {images.length === 0 && (
        <div
          className="flex items-center justify-center py-24"
          style={{ color: '#4B5563' }}
        >
          <p className="font-barlow text-sm">Sin proyectos en esta categoría.</p>
        </div>
      )}
    </section>
  );
}
