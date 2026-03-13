# Grupo Hasil — Portafolio

Portafolio profesional de **Grupo Hasil**, empresa especializada en fabricación de anuncios luminosos, rotulación y soluciones de imagen corporativa.

🌐 **En línea:** [grupo-hasil.vercel.app](https://grupo-hasil.vercel.app)

---

## Servicios

- Fabricación de Anuncios Luminosos
- Cajas de Luz
- Impresión de Backlight
- Rotulación de Flotillas
- Anuncios de Acrílico en 3D
- Diseño de Logos
- Foto Montaje
- Cambio de Imagen

---

## Stack

- **React 18** + **Vite**
- **Tailwind CSS v3**
- **Framer Motion** — animaciones y transiciones
- **Vercel** — hosting

## Características

- 34 imágenes clasificadas en 8 categorías
- Filtros animados con sliding pill (Framer Motion layoutId)
- Grid masonry responsive (2 → 3 → 4 columnas)
- Reveal de imágenes en blanco/negro → color al hacer scroll
- Lightbox con navegación swipe en móvil
- Botón de contacto flotante con WhatsApp directo
- Mobile-first

## Nuevas imagenes
 El flujo es sencillo. Todo está centralizado en un solo archivo:

  src/data/projects.js                                                                                                  
  ---                                                                                                                     Añadir fotos a una categoría existente

  1. Copia la imagen a public/images/{carpeta}/
  2. Abre projects.js y agrega la imagen al array de la categoría:

  {
    id: "cajas-luz",
    images: [
      // ... imágenes existentes ...
      { src: "/images/1/nueva-foto.jpg", alt: "Descripción de la foto" }, // ← agregar aquí
    ]
  }

  ---
  Añadir una categoría nueva

  En projects.js agrega un objeto nuevo al array categories:

  {
    id: "senaletica",           // identificador único
    label: "Señalética",        // texto que aparece en el botón
    icon: "🪧 ",                 // emoji del botón
    color: "#6366F1",           // color del acento (cualquier hex)
    description: "Diseño e instalación de señalética corporativa",
    images: [
      { src: "/images/5/foto1.jpg", alt: "Señalética corporativa" },
    ]
  }

  ---
  Flujo completo para publicar los cambios

  # 1. Copiar las fotos nuevas a public/images/
  # 2. Editar src/data/projects.js
  # 3. Verificar en local
  npm run dev

  # 4. Subir a producción
  npm run build
  vercel --prod

  # 5. Guardar en GitHub
  git add .
  git commit -m "Agregar nuevas fotos - categoría X"
  git push origin master

  ---

## Desarrollo local

```bash
npm install
npm run dev
```

## Deploy

```bash
npm run build
vercel --prod
```
