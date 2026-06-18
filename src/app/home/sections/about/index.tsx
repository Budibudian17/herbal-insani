import { aboutStyles } from './styles';

export function AboutSection() {
  return (
    <section className={aboutStyles.section.container}>
      {/* Content */}
      <div className={aboutStyles.container.wrapper}>
        <div className={aboutStyles.container.content}>
          <div className={aboutStyles.grid.container}>
            {/* Image */}
            <div className={aboutStyles.image.container}>
              <img 
                src="/img/whychooseuss.webp" 
                alt="About Section" 
                className={aboutStyles.image.image}
              />
            </div>

            {/* Header */}
            <div className={aboutStyles.header.container}>
              <h2 className={aboutStyles.header.title}>
                KENAPA MEMILIH
              </h2>
              <h3 className={aboutStyles.header.subtitle}>
                HERBAL INSANI
              </h3>
              <p className={aboutStyles.header.description}>
                Herbal Insani adalah pilihan terbaik untuk kesehatan Anda. Kami menggabungkan kearifan lokal dengan standar profesional untuk memberikan layanan kesehatan herbal yang terpercaya. Dengan tim ahli berpengalaman dan bahan-bahan alami berkualitas, kami berkomitmen untuk membantu Anda mencapai kesehatan optimal secara holistik dan alami
              </p>
              <button className={aboutStyles.header.button}>
                Baca Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
