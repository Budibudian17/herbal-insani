import { Star } from 'lucide-react';
import { testimonialsStyles } from './styles';

const testimonials = [
  {
    name: 'Budi Santoso',
    location: 'Jakarta',
    rating: 5,
    text: 'Layanan bekam di Herbal Insani sangat profesional. Terapisnya berpengalaman dan hasilnya terasa signifikan. Sangat direkomendasikan!',
  },
  {
    name: 'Siti Rahayu',
    location: 'Bandung',
    rating: 5,
    text: 'Saya sudah beberapa kali melakukan terapi herbal di sini. Hasilnya selalu memuaskan dan harganya terjangkau.',
  },
  {
    name: 'Ahmad Fauzi',
    location: 'Surabaya',
    rating: 5,
    text: 'Konsultasi herbal sangat membantu. Resep yang diberikan tepat dan efektif untuk kondisi kesehatan saya.',
  },
];

export function TestimonialsSection() {
  return (
    <section className={testimonialsStyles.section.container}>
      <div className={testimonialsStyles.container.wrapper}>
        <div className={testimonialsStyles.header.container}>
          <h2 className={testimonialsStyles.header.title}>Apa Kata Pasien Kami?</h2>
          <p className={testimonialsStyles.header.description}>
            Testimoni dari pasien yang telah merasakan manfaat layanan kami
          </p>
        </div>

        <div className={testimonialsStyles.grid.container}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={testimonialsStyles.card.container}>
              <div className={testimonialsStyles.card.rating}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className={testimonialsStyles.card.star} fill="currentColor" />
                ))}
              </div>
              <p className={testimonialsStyles.card.text}>{testimonial.text}</p>
              <div className={testimonialsStyles.card.author}>
                <div className={testimonialsStyles.card.avatar}>
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className={testimonialsStyles.card.name}>{testimonial.name}</h4>
                  <p className={testimonialsStyles.card.location}>{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
