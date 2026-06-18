import { infoStyles } from './styles';
import { Clock, Calendar, Heart, Leaf } from 'lucide-react';

export function InfoSection() {
  const features = [
    {
      image: '/img/pelayananramah.webp',
      icon: Heart,
      title: 'Pelayanan Sepenuh Hati',
      description: 'Perawatan dengan kasih sayang dan perhatian untuk kesehatan optimal Anda',
    },
    {
      image: '/img/bahanalami.webp',
      icon: Leaf,
      title: 'Bahan Alami & Halal',
      description: 'Obat herbal dari bahan alami yang halal dan terpercaya',
    },
  ];

  const workingHours = [
    { day: 'Senin - Jumat', hours: '08:00 - 20:00' },
    { day: 'Sabtu', hours: '09:00 - 17:00' },
    { day: 'Minggu', hours: 'Tutup', isClosed: true },
  ];

  return (
    <section className={infoStyles.section.container}>
      <div className={infoStyles.grid.container}>
        {/* Feature Cards - Left Side */}
        <div className={infoStyles.features.container}>
          {features.map((feature, index) => (
            <div key={index} className={infoStyles.features.card}>
              <img 
                src={feature.image} 
                alt={feature.title} 
                className={infoStyles.features.image}
              />
              <div className={infoStyles.features.content}>
                <feature.icon className={infoStyles.features.icon} />
                <h3 className={infoStyles.features.title}>{feature.title}</h3>
                <p className={infoStyles.features.description}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Working Hours Widget - Right Side */}
        <div className={infoStyles.workingHours.container}>
          <h3 className={infoStyles.workingHours.title}>
            <Clock className="w-6 h-6 inline mr-2" />
            Jam Operasional
          </h3>
          <table className={infoStyles.workingHours.table}>
            <tbody>
              {workingHours.map((schedule, index) => (
                <tr key={index} className={infoStyles.workingHours.row}>
                  <td className={infoStyles.workingHours.day}>
                    <Calendar className="w-4 h-4 inline mr-2" />
                    {schedule.day}
                  </td>
                  <td className={schedule.isClosed ? infoStyles.workingHours.closed : infoStyles.workingHours.hours}>
                    {schedule.hours}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className={infoStyles.workingHours.description}>
            Silakan datang sesuai jam operasional untuk mendapatkan pelayanan terbaik dari kami.
          </p>
        </div>
      </div>
    </section>
  );
}
