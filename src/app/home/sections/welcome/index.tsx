import { welcomeStyles } from './styles';

export function WelcomeSection() {
  return (
    <section className={welcomeStyles.section.container}>
      {/* Content */}
      <div className={welcomeStyles.container.wrapper}>
        <div className={welcomeStyles.container.content}>
          <div className={welcomeStyles.grid.container}>
            {/* Image */}
            <div className={welcomeStyles.image.container}>
              <img 
                src="/img/welcomesection.webp" 
                alt="Welcome Section" 
                className={welcomeStyles.image.image}
              />
            </div>

            {/* Header */}
            <div className={welcomeStyles.header.container}>
              <h2 className={welcomeStyles.header.title}>
                RUMAH SEHAT
              </h2>
              <h3 className={welcomeStyles.header.subtitle}>
                HERBAL INSANI
              </h3>
              <p className={welcomeStyles.header.description}>
                Selamat Datang di Rumah Sehat Herbal Insani. Solusi Kesehatan Alami Terpadu dalam Satu Tempat. Kami memadukan khasiat herbal alami dengan pelayanan profesional untuk mengembalikan keseimbangan tubuh Anda, menjaga vitalitas, dan menyembuhkan secara menyeluruh dari dalam
              </p>
              <div className={welcomeStyles.header.ceo}>
                <p className={welcomeStyles.header.ceoName}>PT. Herbal Insani</p>
                <img 
                  src="/img/signaturelow.webp" 
                  alt="CEO Signature" 
                  className={welcomeStyles.header.signature}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
