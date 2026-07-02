import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { ctaStyles } from './styles';

export function CTASection() {
  return (
    <section className={ctaStyles.section.container} style={{ backgroundImage: ctaStyles.section.backgroundImage }}>
      <div className={ctaStyles.section.overlay}></div>
      <div className={ctaStyles.container.wrapper}>
        <div className={ctaStyles.content.container}>
          <h2 className={ctaStyles.content.title}>
            Siap Memulai Perjalanan Kesehatan Anda?
          </h2>
          <p className={ctaStyles.content.description}>
            Hubungi kami sekarang untuk konsultasi atau booking layanan herbal terbaik untuk kesehatan Anda
          </p>

          <div className={ctaStyles.actions.container}>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className={ctaStyles.button.primary}>
              <MessageCircle className={ctaStyles.button.icon} />
              <span>Konsultasi via WhatsApp</span>
            </a>

            <a href="tel:+6281234567890" className={ctaStyles.button.secondary}>
              <Phone className={ctaStyles.button.icon} />
              <span>Hubungi via Telepon</span>
            </a>

            <a href="#contact" className={ctaStyles.button.secondary}>
              <Calendar className={ctaStyles.button.icon} />
              <span>Booking Jadwal</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
