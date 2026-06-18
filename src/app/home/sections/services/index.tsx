import { servicesStyles } from './styles';
import { BookOpen, Droplets, Activity, Hand, Heart, Baby, Zap, MessageSquare, GraduationCap } from 'lucide-react';
import React from 'react';

export function ServicesSection() {
  const services = [
    {
      title: 'Terapi Herbal',
      description: 'Pengobatan alami menggunakan tanaman obat untuk mengembalikan keseimbangan tubuh',
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-green-600 dark:text-green-400" />,
    },
    {
      title: 'Terapi Bekam',
      description: 'Metode pengobatan tradisional dengan mengeluarkan darah kotor dari tubuh',
      icon: <Droplets className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-green-600 dark:text-green-400" />,
    },
    {
      title: 'Terapi Akupunktur',
      description: 'Pengobatan tradisional Tiongkok dengan jarum untuk mengaktifkan titik energi',
      icon: <Activity className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-green-600 dark:text-green-400" />,
    },
    {
      title: 'Terapi Refleksi',
      description: 'Pijat pada titik-titik refleks untuk memperbaiki fungsi organ tubuh',
      icon: <Hand className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-green-600 dark:text-green-400" />,
    },
    {
      title: 'Pijat Syaraf',
      description: 'Pijat terapi untuk mengendurkan ketegangan syaraf dan otot',
      icon: <Heart className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-green-600 dark:text-green-400" />,
    },
    {
      title: 'Pijat Bayi dan Anak',
      description: 'Pijat khusus untuk bayi dan anak untuk meningkatkan kesehatan',
      icon: <Baby className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-green-600 dark:text-green-400" />,
    },
    {
      title: 'Pijat Kebugaran',
      description: 'Pijat relaksasi untuk menjaga kebugaran dan kesehatan tubuh',
      icon: <Zap className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-green-600 dark:text-green-400" />,
    },
    {
      title: 'Konsultasi Kesehatan',
      description: 'Konsultasi dan pemeriksaan kesehatan dengan tenaga profesional',
      icon: <MessageSquare className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-green-600 dark:text-green-400" />,
    },
    {
      title: 'Pelatihan Tanaman Obat',
      description: 'Pelatihan mengenai tanaman obat dan cara penggunaannya',
      icon: <GraduationCap className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-green-600 dark:text-green-400" />,
    },
  ];

  return (
    <section className={servicesStyles.section.container}>
      <div className={servicesStyles.container.wrapper}>
        <div className={servicesStyles.container.content}>
          {/* Header */}
          <div className={servicesStyles.header.container}>
            <h2 className={servicesStyles.header.title}>
              Layanan Kami
            </h2>
            <p className={servicesStyles.header.subtitle}>
              Solusi kesehatan alami terpadu untuk Anda dan keluarga
            </p>
          </div>

          {/* Services Grid */}
          <div className={servicesStyles.grid.container}>
            {services.map((service, index) => (
              <div key={index} className={servicesStyles.card.container}>
                <div className={servicesStyles.card.icon}>
                  {service.icon}
                </div>
                <h3 className={servicesStyles.card.title}>
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
