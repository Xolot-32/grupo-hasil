import { useState, useMemo } from 'react';
import { categories, getAllImages } from './data/projects';
import Hero from './components/Hero';
import CategoryNav from './components/CategoryNav';
import ProjectGrid from './components/ProjectGrid';
import Lightbox from './components/Lightbox';
import Footer from './components/Footer';
import ContactFloat from './components/ContactFloat';

export default function App() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  // Build the image list that the lightbox will navigate within
  const lightboxImagePool = useMemo(() => {
    if (lightboxImage === null) return [];
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
  }, [activeCategory, lightboxImage]);

  const handleOpenImage = (image) => {
    setLightboxImage(image);
  };

  const handleCloseLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Hero />
      <CategoryNav activeCategory={activeCategory} onSelect={setActiveCategory} />
      <main style={{ flex: 1 }}>
        <ProjectGrid
          activeCategory={activeCategory}
          onOpenImage={handleOpenImage}
        />
      </main>
      <Footer />
      <ContactFloat />

      {lightboxImage && (
        <Lightbox
          image={lightboxImage}
          allImages={lightboxImagePool}
          onClose={handleCloseLightbox}
        />
      )}
    </div>
  );
}
