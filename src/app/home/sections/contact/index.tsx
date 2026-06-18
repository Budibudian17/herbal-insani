import { Phone } from 'lucide-react';
import { contactStyles } from './styles';

export function ContactSection() {
  return (
    <section 
      className={contactStyles.section.container}
      style={{ backgroundImage: `url('/img/notelpsection.webp')` }}
    >
      {/* Overlay */}
      <div className={contactStyles.section.overlay}></div>

      {/* Content */}
      <div className={contactStyles.container.wrapper}>
        <div className={contactStyles.container.content}>
          <div className={contactStyles.content.container}>
            {/* Icon */}
            <Phone className={contactStyles.content.icon} />

            {/* Title */}
            <h2 className={contactStyles.content.title}>
              Mulai Langkah Pertama Menuju Kesehatan
            </h2>

            {/* Subtitle */}
            <h3 className={contactStyles.content.subtitle}>
              Hubungi Herbal Insani Sekarang
            </h3>

            {/* Phone Number */}
            <p className={contactStyles.content.phone}>
              0812-3456-7890
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
