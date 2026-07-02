'use client';

import { useState, useEffect } from 'react';
import { testimonialsStyles } from './styles';
import { Star } from 'lucide-react';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
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
  const maxIndex = Math.max(0, testimonials.length - itemsPerPage);

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
            return 0;
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
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className={testimonialsStyles.section.container}>
      <div className={testimonialsStyles.container.wrapper}>
        <div className={testimonialsStyles.container.content}>
          <div className={testimonialsStyles.header.container}>
            <h2 className={testimonialsStyles.header.title}>Apa Kata Pasien Kami?</h2>
            <p className={testimonialsStyles.header.description}>
              Testimoni dari pasien yang telah merasakan manfaat layanan kami
            </p>
          </div>

          <div className={testimonialsStyles.grid.container}>
            <div
              className={testimonialsStyles.slider.container}
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className={testimonialsStyles.slider.item}>
                  <div className={testimonialsStyles.card.container}>
                    <div className={testimonialsStyles.card.rating}>
                      {renderStars(testimonial.rating)}
                    </div>

                    <img
                      src={testimonial.photo}
                      alt={testimonial.name}
                      className={testimonialsStyles.card.photo}
                    />

                    <p className={testimonialsStyles.card.text}>
                      {testimonial.text}
                    </p>

                    <p className={testimonialsStyles.card.service}>
                      {testimonial.service}
                    </p>

                    <span className={testimonialsStyles.card.name}>
                      {testimonial.name}
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
