'use client';

import { useState, useEffect } from 'react';
import { reviewsStyles } from './styles';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

export function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reviews = [
    {
      rating: 5,
      text: 'Pelayanan sangat memuaskan! Terapisnya profesional dan ramah. Saya merasa lebih baik setelah terapi herbal di sini.',
      name: 'Budi Santoso',
      service: 'Terapi Herbal',
      photo: '/img/dokumentasi1.webp',
    },
    {
      rating: 5,
      text: 'Tempat yang nyaman dan bersih. Terapi bekam yang dilakukan sangat membantu mengurangi rasa sakit saya.',
      name: 'Siti Rahayu',
      service: 'Terapi Bekam',
      photo: '/img/dokumentasi2.webp',
    },
    {
      rating: 4,
      text: 'Sangat recommended untuk yang ingin pengobatan alami. Hasilnya terasa dan stafnya sangat membantu.',
      name: 'Ahmad Fauzi',
      service: 'Terapi Akupunktur',
      photo: '/img/dokumentasi3.webp',
    },
    {
      rating: 5,
      text: 'Pengalaman pertama terapi akupunktur yang sangat baik. Terapisnya berpengalaman dan sabar.',
      name: 'Dewi Lestari',
      service: 'Terapi Refleksi',
      photo: '/img/dokumentasi4.webp',
    },
    {
      rating: 5,
      text: 'Konsultasi kesehatan yang sangat informatif. Dapat solusi yang tepat untuk masalah kesehatan saya.',
      name: 'Rudi Hartono',
      service: 'Konsultasi Kesehatan',
      photo: '/img/dokumentasi5.webp',
    },
    {
      rating: 4,
      text: 'Pijat refleksi yang sangat menghilangkan stres. Pasti akan kembali lagi untuk treatment berikutnya.',
      name: 'Maya Sari',
      service: 'Pijat Kebugaran',
      photo: '/img/dokumentasi6.webp',
    },
  ];

  const itemsPerPage = typeof window !== 'undefined' && window.innerWidth >= 1024 ? 3 : typeof window !== 'undefined' && window.innerWidth >= 768 ? 2 : 1;
  const maxIndex = Math.max(0, reviews.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev >= maxIndex) {
            return 0; // Loop back to start
          }
          return prev + 1;
        });
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [isPaused, maxIndex]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 md:w-5 md:h-5 ${
          index < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section className={reviewsStyles.section.container}>
      <div className={reviewsStyles.container.wrapper}>
        <div className={reviewsStyles.container.content}>
          {/* Header */}
          <div className={reviewsStyles.header.container}>
            <h2 className={reviewsStyles.header.title}>
              REVIEW PASIEN
            </h2>
            <p className={reviewsStyles.header.subtitle}>
              Apa kata pasien yang telah merasakan pelayanan Herbal Insani
            </p>
          </div>

          {/* Slider */}
          <div className={reviewsStyles.grid.container}>
            <div
              className={reviewsStyles.slider.container}
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {reviews.map((review, index) => (
                <div key={index} className={reviewsStyles.slider.item}>
                  <div className={reviewsStyles.card.container}>
                    {/* Rating */}
                    <div className={reviewsStyles.card.rating}>
                      {renderStars(review.rating)}
                    </div>

                    {/* Profile Photo */}
                    <img
                      src={review.photo}
                      alt={review.name}
                      className={reviewsStyles.card.photo}
                    />

                    {/* Review Text */}
                    <p className={reviewsStyles.card.text}>
                      {review.text}
                    </p>

                    {/* Service Name */}
                    <p className={reviewsStyles.card.service}>
                      {review.service}
                    </p>

                    {/* Patient Name */}
                    <span className={reviewsStyles.card.name}>
                      {review.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
