import Image from 'next/image';
import { visionStyles } from './styles';

export function VisionSection() {
  return (
    <section className={visionStyles.section.container}>
      {/* Content */}
      <div className={visionStyles.container.wrapper}>
        <div className={visionStyles.container.content}>
          <div className={visionStyles.grid.container}>
            {/* Header */}
            <div className={visionStyles.header.container}>
              <h2 className={visionStyles.header.title}>
                NILAI KAMI
              </h2>
              <h3 className={visionStyles.header.subtitle}>
                HERBAL INSANI
              </h3>
              <p className={visionStyles.header.description}>
                Kami berpegang teguh pada prinsip-prinsip yang menjadi fondasi setiap layanan yang kami berikan, memastikan integritas, profesionalisme, dan kepedulian terhadap setiap pasien
              </p>
              <div className={visionStyles.header.points.container}>
                <div className={visionStyles.header.points.item}>
                  <span className={visionStyles.header.points.bullet}>•</span>
                  <span className={visionStyles.header.points.text}>Integritas dan kejujuran</span>
                </div>
                <div className={visionStyles.header.points.item}>
                  <span className={visionStyles.header.points.bullet}>•</span>
                  <span className={visionStyles.header.points.text}>Profesionalisme tinggi</span>
                </div>
                <div className={visionStyles.header.points.item}>
                  <span className={visionStyles.header.points.bullet}>•</span>
                  <span className={visionStyles.header.points.text}>Kepedulian terhadap pasien</span>
                </div>
                <div className={visionStyles.header.points.item}>
                  <span className={visionStyles.header.points.bullet}>•</span>
                  <span className={visionStyles.header.points.text}>Inovasi berkelanjutan</span>
                </div>
              </div>
            </div>

            {/* Image Mobile */}
            <div className={visionStyles.image.container}>
              <Image 
                src="/img/nilaikamisection.webp" 
                alt="Vision Section" 
                width={400}
                height={300}
                className={visionStyles.image.image}
              />
            </div>

            {/* Image Desktop */}
            <div className={visionStyles.imageDesktop.container}>
              <Image 
                src="/img/nilaikamisection.webp" 
                alt="Vision Section" 
                width={600}
                height={400}
                className={visionStyles.imageDesktop.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
