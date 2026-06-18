'use client';

import { useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { documentationStyles } from './styles';

export function DocumentationSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    '/img/dokumentasi1.webp',
    '/img/dokumentasi2.webp',
    '/img/dokumentasi3.webp',
    '/img/dokumentasi4.webp',
    '/img/dokumentasi5.webp',
    '/img/dokumentasi6.webp',
  ];

  return (
    <section className={documentationStyles.section.container}>
      <div className={documentationStyles.container.wrapper}>
        <div className={documentationStyles.container.content}>
          <div className={documentationStyles.header.container}>
            <h3 className={documentationStyles.header.subtitle}>
              GALERI KEGIATAN HERBAL INSANI
            </h3>
            <p className={documentationStyles.header.description}>
              Dokumentasi kegiatan dan aktivitas Herbal Insani dalam memberikan pelayanan kesehatan herbal terbaik bagi masyarakat
            </p>
          </div>

          <div className={documentationStyles.gallery.container}>
            {images.map((image, index) => (
              <div
                key={index}
                className={documentationStyles.gallery.item}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image}
                  alt={`Documentation ${index + 1}`}
                  className={documentationStyles.gallery.image}
                />
                <div className={documentationStyles.gallery.overlay}>
                  <ZoomIn className={documentationStyles.gallery.icon} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className={documentationStyles.lightbox.container}
          onClick={() => setSelectedImage(null)}
        >
          <button
            className={documentationStyles.lightbox.close}
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={selectedImage}
            alt="Full size documentation"
            className={documentationStyles.lightbox.image}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
