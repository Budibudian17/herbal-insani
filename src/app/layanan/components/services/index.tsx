import { BookOpen, Droplets, Activity, Hand, Heart, Baby, Zap, MessageSquare, GraduationCap } from 'lucide-react';
import { servicesStyles } from './styles';

const services = [
  {
    icon: BookOpen,
    name: 'Terapi Herbal',
    description: 'Pengobatan alami menggunakan tanaman obat untuk mengembalikan keseimbangan tubuh',
    image: '/img/bahanalami.webp',
  },
  {
    icon: Droplets,
    name: 'Terapi Bekam',
    description: 'Metode pengobatan tradisional dengan mengeluarkan darah kotor dari tubuh',
    image: '/img/hero1.webp',
  },
  {
    icon: Activity,
    name: 'Terapi Akupunktur',
    description: 'Pengobatan tradisional Tiongkok dengan jarum untuk mengaktifkan titik energi',
    image: '/img/hero2.webp',
  },
  {
    icon: Hand,
    name: 'Terapi Refleksi',
    description: 'Pijat pada titik-titik refleks untuk memperbaiki fungsi organ tubuh',
    image: '/img/pelayananramah.webp',
  },
  {
    icon: Heart,
    name: 'Pijat Syaraf',
    description: 'Pijat terapi untuk mengendurkan ketegangan syaraf dan otot',
    image: '/img/welcomesection.webp',
  },
  {
    icon: Baby,
    name: 'Pijat Bayi dan Anak',
    description: 'Pijat khusus untuk bayi dan anak untuk meningkatkan kesehatan',
    image: '/img/dokumentasi1.webp',
  },
  {
    icon: Zap,
    name: 'Pijat Kebugaran',
    description: 'Pijat relaksasi untuk menjaga kebugaran dan kesehatan tubuh',
    image: '/img/dokumentasi2.webp',
  },
  {
    icon: MessageSquare,
    name: 'Konsultasi Kesehatan',
    description: 'Konsultasi dan pemeriksaan kesehatan dengan tenaga profesional',
    image: '/img/dokterberpengalaman.webp',
  },
  {
    icon: GraduationCap,
    name: 'Pelatihan Tanaman Obat',
    description: 'Pelatihan mengenai tanaman obat dan cara penggunaannya',
    image: '/img/visionmissionsection.webp',
  },
];

export function ServicesSection() {
  return (
    <section className={servicesStyles.section.container}>
      <div className={servicesStyles.container.wrapper}>
        <div className={servicesStyles.header.container}>
          <h2 className={servicesStyles.header.title}>Layanan Kami</h2>
          <p className={servicesStyles.header.description}>
            Temukan berbagai layanan kesehatan herbal yang kami tawarkan untuk memulihkan kesehatan Anda
          </p>
        </div>
        
        <div className={servicesStyles.grid.container}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className={servicesStyles.card.container}>
                <div className={servicesStyles.card.imageWrapper}>
                  <img
                    src={service.image}
                    alt={service.name}
                    className={servicesStyles.card.image}
                  />
                  <div className={servicesStyles.card.iconOverlay}>
                    <Icon className={servicesStyles.card.icon} />
                  </div>
                </div>
                <h3 className={servicesStyles.card.name}>{service.name}</h3>
                <p className={servicesStyles.card.description}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
