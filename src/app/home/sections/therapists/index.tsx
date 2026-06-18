import { therapistsStyles } from './styles';

export function TherapistsSection() {
  return (
    <section className={therapistsStyles.section.container}>
      <div className={therapistsStyles.container.wrapper}>
        <div className={therapistsStyles.container.content}>
          <div className={therapistsStyles.grid.container}>
            <div className={therapistsStyles.header.container}>
              <h2 className={therapistsStyles.header.title}>
                BERTEMU DENGAN TERAPIS KAMI
              </h2>
              <h3 className={therapistsStyles.header.subtitle}>
                TIM PROFESIONAL HERBAL INSANI
              </h3>
              <p className={therapistsStyles.header.description}>
                Terapis kami berpengalaman dan bersertifikat dalam memberikan pelayanan kesehatan herbal terbaik untuk Anda
              </p>
              <div className={therapistsStyles.header.points.container}>
                <div className={therapistsStyles.header.points.item}>
                  <span className={therapistsStyles.header.points.bullet}>•</span>
                  <span className={therapistsStyles.header.points.text}>Bersertifikat dan berpengalaman</span>
                </div>
                <div className={therapistsStyles.header.points.item}>
                  <span className={therapistsStyles.header.points.bullet}>•</span>
                  <span className={therapistsStyles.header.points.text}>Pendekatan holistik dan personal</span>
                </div>
                <div className={therapistsStyles.header.points.item}>
                  <span className={therapistsStyles.header.points.bullet}>•</span>
                  <span className={therapistsStyles.header.points.text}>Konsultasi komprehensif</span>
                </div>
                <div className={therapistsStyles.header.points.item}>
                  <span className={therapistsStyles.header.points.bullet}>•</span>
                  <span className={therapistsStyles.header.points.text}>Layanan berkelanjutan</span>
                </div>
              </div>
              <button className={therapistsStyles.header.button}>
                Bertemu Terapis
              </button>
            </div>

            <div className={therapistsStyles.image.container}>
              <img
                src="/img/meetourdoctors.webp"
                alt="Therapists Section"
                className={therapistsStyles.image.image}
              />
            </div>

            <div className={therapistsStyles.imageDesktop.container}>
              <img
                src="/img/meetourdoctors.webp"
                alt="Therapists Section"
                className={therapistsStyles.imageDesktop.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
