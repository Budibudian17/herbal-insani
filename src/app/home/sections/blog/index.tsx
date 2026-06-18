import { blogStyles } from './styles';

export function BlogSection() {
  const news = [
    {
      id: 1,
      title: 'Herbal Insani Membuka Cabang Baru di Jakarta',
      date: '15 Januari 2024',
      author: 'Admin',
      description: 'Kami dengan bangga mengumumkan pembukaan cabang baru Herbal Insani di Jakarta untuk melayani lebih banyak pasien dengan pengobatan herbal terbaik.',
      image: '/img/dokumentasi1.webp',
    },
    {
      id: 2,
      title: 'Workshop Pengobatan Herbal untuk Masyarakat',
      date: '10 Januari 2024',
      author: 'Dr. Sarah',
      description: 'Herbal Insani mengadakan workshop gratis tentang pengobatan herbal tradisional untuk meningkatkan kesadaran masyarakat akan kesehatan alami.',
      image: '/img/dokumentasi2.webp',
    },
    {
      id: 3,
      title: 'Kolaborasi dengan Universitas untuk Riset Herbal',
      date: '5 Januari 2024',
      author: 'Tim Riset',
      description: 'Herbal Insani menjalin kerjasama dengan beberapa universitas terkemuka untuk melakukan riset mendalam tentang khasiat tanaman herbal Indonesia.',
      image: '/img/dokumentasi3.webp',
    },
  ];

  return (
    <section className={blogStyles.section.container}>
      <div className={blogStyles.container.wrapper}>
        <div className={blogStyles.container.content}>
          {/* Header */}
          <div className={blogStyles.header.container}>
            <h2 className={blogStyles.header.title}>
              BERITA TERBARU
            </h2>
            <h3 className={blogStyles.header.subtitle}>
              KABAR DARI HERBAL INSANI
            </h3>
            <p className={blogStyles.header.description}>
              Dapatkan informasi terbaru tentang kegiatan, pengembangan, dan kabar baik dari Herbal Insani
            </p>
          </div>

          {/* News Grid */}
          <div className={blogStyles.grid.container}>
            {news.map((item) => (
              <div key={item.id} className={blogStyles.card.container}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className={blogStyles.card.image}
                />
                <div className={blogStyles.card.content}>
                  <h4 className={blogStyles.card.title}>
                    {item.title}
                  </h4>
                  <div className={blogStyles.card.meta}>
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.author}</span>
                  </div>
                  <p className={blogStyles.card.description}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className={blogStyles.button.container}>
            <button className={blogStyles.button.button}>
              Baca Berita Lainnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
