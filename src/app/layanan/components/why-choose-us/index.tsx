import { CheckCircle, Users, Leaf, Award } from 'lucide-react';
import { whyChooseUsStyles } from './styles';

const reasons = [
  {
    icon: Users,
    title: 'Terapis Berpengalaman',
    description: 'Tim terapis kami memiliki pengalaman bertahun-tahun dalam pengobatan herbal dan terapi tradisional',
  },
  {
    icon: Leaf,
    title: 'Bahan Herbal Alami',
    description: 'Menggunakan bahan-bahan herbal alami berkualitas tinggi yang aman dan efektif',
  },
  {
    icon: Award,
    title: 'Pendekatan Holistik',
    description: 'Menggabungkan pengobatan fisik dan spiritual untuk hasil yang maksimal dan menyeluruh',
  },
  {
    icon: CheckCircle,
    title: 'Harga Terjangkau',
    description: 'Layanan kesehatan berkualitas dengan harga yang terjangkau dan bersaing',
  },
];

export function WhyChooseUsSection() {
  return (
    <section className={whyChooseUsStyles.section.container}>
      <div className={whyChooseUsStyles.container.wrapper}>
        <div className={whyChooseUsStyles.header.container}>
          <h2 className={whyChooseUsStyles.header.title}>Kenapa Memilih Herbal Insani?</h2>
          <p className={whyChooseUsStyles.header.description}>
            Kami berkomitmen memberikan pelayanan kesehatan herbal terbaik untuk kesehatan Anda
          </p>
        </div>

        <div className={whyChooseUsStyles.grid.container}>
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div key={index} className={whyChooseUsStyles.card.container}>
                <div className={whyChooseUsStyles.card.iconWrapper}>
                  <Icon className={whyChooseUsStyles.card.icon} />
                </div>
                <h3 className={whyChooseUsStyles.card.title}>{reason.title}</h3>
                <p className={whyChooseUsStyles.card.description}>{reason.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
