import Image from 'next/image';
import { introStyles } from './styles';

export function IntroSection() {
  return (
    <section className={introStyles.section.container}>
      {/* Content */}
      <div className={introStyles.container.wrapper}>
        <div className={introStyles.container.content}>
          <div className={introStyles.grid.container}>
            {/* Image */}
            <div className={introStyles.image.container}>
              <Image 
                src="/img/aboutuspage.webp" 
                alt="Tentang Kami Section" 
                width={600}
                height={400}
                className={introStyles.image.image}
              />
            </div>

            {/* Header */}
            <div className={introStyles.header.container}>
              <h2 className={introStyles.header.title}>
                APA ITU
              </h2>
              <h3 className={introStyles.header.subtitle}>
                RUMAH HERBAL INSANI
              </h3>
              <p className={introStyles.header.description}>
                Rumah Sehat Herbal Insani adalah pusat kesehatan herbal terdepan yang berdedikasi untuk mengintegrasikan kearifan lokal Indonesia dengan standar ilmiah modern dalam memberikan solusi kesehatan holistik. Sejak didirikan, kami telah berkomitmen untuk mengembalikan keseimbangan tubuh dan pikiran melalui pengobatan herbal alami yang telah terbukti efektif selama berabad-abad.
              </p>
              <p className={introStyles.header.description}>
                Dengan tim terapis berpengalaman dan fasilitas modern, kami menyediakan berbagai layanan kesehatan herbal yang dirancang khusus untuk memenuhi kebutuhan unik setiap individu, mulai dari terapi bekam, akupunktur, hingga konsultasi nutrisi herbal. Kami percaya bahwa kesehatan sejati tidak hanya tentang mengobati penyakit, tetapi juga tentang mencegahnya melalui gaya hidup sehat dan penggunaan herbal yang tepat.
              </p>
              <div className={introStyles.header.ceo}>
                <p className={introStyles.header.ceoName}>PT. Herbal Insani</p>
                <Image 
                  src="/img/signaturelow.webp" 
                  alt="CEO Signature" 
                  width={200}
                  height={80}
                  className={introStyles.header.signature}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
