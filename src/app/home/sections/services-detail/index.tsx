'use client';

import { useState } from 'react';
import { BookOpen, Droplets, Activity, Hand, ArrowRight } from 'lucide-react';
import { servicesDetailStyles } from './styles';

export function ServicesDetailSection() {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      title: 'Terapi Herbal',
      icon: <BookOpen />,
      description: 'Pengobatan alami menggunakan tanaman obat untuk mengembalikan keseimbangan tubuh',
      image: '/img/dokumentasi7.webp',
      points: [
        'Menggunakan tanaman obat alami berkualitas',
        'Tanpa efek samping yang berbahaya',
        'Disesuaikan dengan kondisi tubuh pasien',
        'Dipandu oleh terapis herbal berpengalaman',
      ],
    },
    {
      title: 'Terapi Bekam',
      icon: <Droplets />,
      description: 'Metode pengobatan tradisional dengan mengeluarkan darah kotor dari tubuh',
      image: '/img/dokumentasi2.webp',
      points: [
        'Mengeluarkan darah kotor dan toksin',
        'Meningkatkan sirkulasi darah',
        'Meredakan nyeri dan ketegangan otot',
        'Dilakukan oleh tenaga profesional bersertifikat',
      ],
    },
    {
      title: 'Terapi Akupunktur',
      icon: <Activity />,
      description: 'Pengobatan tradisional Tiongkok dengan jarum untuk mengaktifkan titik energi',
      image: '/img/whychooseuss.webp',
      points: [
        'Mengaktifkan titik-titik energi tubuh',
        'Mengembalikan keseimbangan chi',
        'Mengatasi berbagai keluhan kesehatan',
        'Jarum steril dan sekali pakai',
      ],
    },
    {
      title: 'Terapi Refleksi',
      icon: <Hand />,
      description: 'Pijat pada titik-titik refleks untuk memperbaiki fungsi organ tubuh',
      image: '/img/dokumentasi4.webp',
      points: [
        'Memijat titik refleks kaki dan tangan',
        'Memperbaiki fungsi organ tubuh',
        'Meredakan stres dan kelelahan',
        'Teknik pijat yang aman dan nyaman',
      ],
    },
  ];

  const selectedServiceData = services[selectedService];

  return (
    <section className={servicesDetailStyles.section.container}>
      <div className={servicesDetailStyles.container.wrapper}>
        <div className={servicesDetailStyles.container.content}>
          {/* Tabs */}
          <div className={servicesDetailStyles.tabs.container}>
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={
                  selectedService === index
                    ? servicesDetailStyles.tabs.itemActive
                    : servicesDetailStyles.tabs.item
                }
              >
                <span className={servicesDetailStyles.tabs.icon}>
                  {service.icon}
                </span>
                <span
                  className={
                    selectedService === index
                      ? servicesDetailStyles.tabs.textActive
                      : servicesDetailStyles.tabs.text
                  }
                >
                  {service.title}
                </span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className={servicesDetailStyles.content.container}>
            <div className={servicesDetailStyles.image.container}>
              <img
                src={selectedServiceData.image}
                alt={selectedServiceData.title}
                className={servicesDetailStyles.image.image}
              />
            </div>

            <div className={servicesDetailStyles.header.container}>
              <h2 className={servicesDetailStyles.header.title}>
                {selectedServiceData.title}
              </h2>
              <p className={servicesDetailStyles.header.description}>
                {selectedServiceData.description}
              </p>
              <div className={servicesDetailStyles.header.points.container}>
                {selectedServiceData.points.map((point, index) => (
                  <div key={index} className={servicesDetailStyles.header.points.item}>
                    <span className={servicesDetailStyles.header.points.bullet}>•</span>
                    <span className={servicesDetailStyles.header.points.text}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
              <button className={servicesDetailStyles.header.button}>
                Lihat Detail
                <ArrowRight className="inline ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
