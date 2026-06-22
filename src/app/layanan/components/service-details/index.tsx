'use client';

import { useState } from 'react';
import { BookOpen, Droplets, Activity, Hand, Heart, Baby, Zap, MessageSquare, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';
import { serviceDetailsStyles } from './styles';

const services = [
  {
    id: 'terapi-herbal',
    icon: BookOpen,
    name: 'Terapi Herbal',
    description: 'Pengobatan alami menggunakan tanaman obat untuk mengembalikan keseimbangan tubuh. Terapi ini menggunakan bahan-bahan herbal alami yang telah teruji khasiatnya untuk mengobati berbagai keluhan kesehatan.',
    benefits: ['Bahan herbal alami', 'Tanpa efek samping kimia', 'Mengembalikan keseimbangan tubuh', 'Aman untuk jangka panjang'],
    duration: '30-60 menit',
    price: 'Mulai Rp 100.000',
    image: '/img/bahanalami.webp',
  },
  {
    id: 'terapi-bekam',
    icon: Droplets,
    name: 'Terapi Bekam',
    description: 'Metode pengobatan tradisional dengan mengeluarkan darah kotor dari tubuh. Terapi bekam membantu memperbaiki sirkulasi darah dan meningkatkan sistem kekebalan tubuh.',
    benefits: ['Memperbaiki sirkulasi darah', 'Mengeluarkan toksin', 'Meningkatkan kekebalan', 'Meredakan nyeri'],
    duration: '30-60 menit',
    price: 'Mulai Rp 150.000',
    image: '/img/hero1.webp',
  },
  {
    id: 'terapi-akupunktur',
    icon: Activity,
    name: 'Terapi Akupunktur',
    description: 'Pengobatan tradisional Tiongkok dengan jarum untuk mengaktifkan titik energi. Terapi ini merangsang saraf dan jaringan untuk meningkatkan penyembuhan.',
    benefits: ['Meredakan nyeri kronis', 'Mengurangi stres', 'Meningkatkan energi', 'Memperbaiki tidur'],
    duration: '45-90 menit',
    price: 'Mulai Rp 200.000',
    image: '/img/hero2.webp',
  },
  {
    id: 'terapi-refleksi',
    icon: Hand,
    name: 'Terapi Refleksi',
    description: 'Pijat pada titik-titik refleks untuk memperbaiki fungsi organ tubuh. Terapi ini bekerja dengan merangsang titik-titik saraf di kaki dan tangan.',
    benefits: ['Memperbaiki fungsi organ', 'Meredakan stres', 'Meningkatkan sirkulasi', 'Relaksasi total'],
    duration: '45-60 menit',
    price: 'Mulai Rp 120.000',
    image: '/img/pelayananramah.webp',
  },
  {
    id: 'pijat-syaraf',
    icon: Heart,
    name: 'Pijat Syaraf',
    description: 'Pijat terapi untuk mengendurkan ketegangan syaraf dan otot. Terapi ini efektif untuk mengatasi kelelahan dan stres berlebih.',
    benefits: ['Mengendurkan ketegangan', 'Meredakan stres', 'Memperbaiki sirkulasi', 'Meningkatkan energi'],
    duration: '60-90 menit',
    price: 'Mulai Rp 100.000',
    image: '/img/welcomesection.webp',
  },
  {
    id: 'pijat-bayi',
    icon: Baby,
    name: 'Pijat Bayi dan Anak',
    description: 'Pijat khusus untuk bayi dan anak untuk meningkatkan kesehatan. Teknik pijat yang lembut dan aman untuk pertumbuhan optimal.',
    benefits: ['Meningkatkan pertumbuhan', 'Memperbaiki tidur', 'Menguatkan ikatan', 'Aman untuk bayi'],
    duration: '30-45 menit',
    price: 'Mulai Rp 80.000',
    image: '/img/dokumentasi1.webp',
  },
  {
    id: 'pijat-kebugaran',
    icon: Zap,
    name: 'Pijat Kebugaran',
    description: 'Pijat relaksasi untuk menjaga kebugaran dan kesehatan tubuh. Terapi ini membantu menjaga tubuh tetap fit dan segar.',
    benefits: ['Menjaga kebugaran', 'Relaksasi otot', 'Meningkatkan energi', 'Mencegah cedera'],
    duration: '60-90 menit',
    price: 'Mulai Rp 100.000',
    image: '/img/dokumentasi2.webp',
  },
  {
    id: 'konsultasi-kesehatan',
    icon: MessageSquare,
    name: 'Konsultasi Kesehatan',
    description: 'Konsultasi dan pemeriksaan kesehatan dengan tenaga profesional. Dokter kami akan memberikan rekomendasi kesehatan yang tepat.',
    benefits: ['Pemeriksaan menyeluruh', 'Rekomendasi profesional', 'Monitoring kesehatan', 'Edukasi kesehatan'],
    duration: '30-45 menit',
    price: 'Mulai Rp 75.000',
    image: '/img/dokterberpengalaman.webp',
  },
  {
    id: 'pelatihan-tanaman',
    icon: GraduationCap,
    name: 'Pelatihan Tanaman Obat',
    description: 'Pelatihan mengenai tanaman obat dan cara penggunaannya. Belajar mengenali dan menggunakan tanaman obat untuk kesehatan keluarga.',
    benefits: ['Pengetahuan tanaman obat', 'Praktik langsung', 'Sertifikat pelatihan', 'Modul lengkap'],
    duration: '2-4 jam',
    price: 'Mulai Rp 250.000',
    image: '/img/visionmissionsection.webp',
  },
];

export function ServiceDetailsSection() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? services.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedService(services[newIndex]);
  };

  const handleNext = () => {
    const newIndex = currentIndex === services.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedService(services[newIndex]);
  };

  return (
    <section className={serviceDetailsStyles.section.container}>
      <div className={serviceDetailsStyles.container.wrapper}>
        <div className={serviceDetailsStyles.header.container}>
          <h2 className={serviceDetailsStyles.header.title}>Detail Layanan</h2>
          <p className={serviceDetailsStyles.header.description}>
            Klik pada layanan untuk melihat informasi lengkap
          </p>
        </div>

        <div className={serviceDetailsStyles.content.container}>
          {/* Desktop Tabs */}
          <div className="hidden lg:block">
            <div className={serviceDetailsStyles.tabs.container}>
              {services.map((service) => {
                const Icon = service.icon;
                const isActive = selectedService.id === service.id;
                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      setSelectedService(service);
                      setCurrentIndex(services.findIndex(s => s.id === service.id));
                    }}
                    className={`${serviceDetailsStyles.tab.button} ${isActive ? serviceDetailsStyles.tab.buttonActive : ''}`}
                  >
                    <Icon className={serviceDetailsStyles.tab.icon} />
                    <span className={serviceDetailsStyles.tab.name}>{service.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Carousel Widget */}
          <div className="lg:hidden">
            <div className={serviceDetailsStyles.mobileCarousel.container}>
              <button
                onClick={handlePrevious}
                className={serviceDetailsStyles.mobileCarousel.arrowButton}
              >
                <ChevronLeft className={serviceDetailsStyles.mobileCarousel.arrowIcon} />
              </button>

              <div className={serviceDetailsStyles.mobileCarousel.widget}>
                {(() => {
                  const Icon = selectedService.icon;
                  return (
                    <div className={serviceDetailsStyles.mobileCarousel.widgetContent}>
                      <Icon className={serviceDetailsStyles.mobileCarousel.widgetIcon} />
                      <span className={serviceDetailsStyles.mobileCarousel.widgetName}>{selectedService.name}</span>
                    </div>
                  );
                })()}
              </div>

              <button
                onClick={handleNext}
                className={serviceDetailsStyles.mobileCarousel.arrowButton}
              >
                <ChevronRight className={serviceDetailsStyles.mobileCarousel.arrowIcon} />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className={serviceDetailsStyles.details.container}>
            <div className={serviceDetailsStyles.details.imageWrapper}>
              <img
                src={selectedService.image}
                alt={selectedService.name}
                className={serviceDetailsStyles.details.image}
              />
              <div className={serviceDetailsStyles.details.iconOverlay}>
                {(() => {
                  const Icon = selectedService.icon;
                  return <Icon className={serviceDetailsStyles.details.icon} />;
                })()}
              </div>
            </div>

            <div className={serviceDetailsStyles.details.content}>
              <h3 className={serviceDetailsStyles.details.name}>{selectedService.name}</h3>
              <p className={serviceDetailsStyles.details.description}>{selectedService.description}</p>

              <div className={serviceDetailsStyles.details.info}>
                <div className={serviceDetailsStyles.details.infoItem}>
                  <span className={serviceDetailsStyles.details.infoLabel}>Durasi:</span>
                  <span className={serviceDetailsStyles.details.infoValue}>{selectedService.duration}</span>
                </div>
                <div className={serviceDetailsStyles.details.infoItem}>
                  <span className={serviceDetailsStyles.details.infoLabel}>Harga:</span>
                  <span className={serviceDetailsStyles.details.infoValue}>{selectedService.price}</span>
                </div>
              </div>

              <div className={serviceDetailsStyles.details.benefits}>
                <h4 className={serviceDetailsStyles.details.benefitsTitle}>Manfaat:</h4>
                <ul className={serviceDetailsStyles.details.benefitsList}>
                  {selectedService.benefits.map((benefit, index) => (
                    <li key={index} className={serviceDetailsStyles.details.benefitItem}>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
