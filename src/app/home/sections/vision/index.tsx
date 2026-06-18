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
                VISI KAMI
              </h2>
              <h3 className={visionStyles.header.subtitle}>
                HERBAL INSANI
              </h3>
              <p className={visionStyles.header.description}>
                Menjadi pusat kesehatan herbal terdepan yang mengintegrasikan kearifan lokal dengan ilmu pengetahuan modern untuk memberikan solusi kesehatan holistik dan berkelanjutan bagi masyarakat Indonesia
              </p>
              <div className={visionStyles.header.points.container}>
                <div className={visionStyles.header.points.item}>
                  <span className={visionStyles.header.points.bullet}>•</span>
                  <span className={visionStyles.header.points.text}>Integrasi kearifan lokal dan ilmu modern</span>
                </div>
                <div className={visionStyles.header.points.item}>
                  <span className={visionStyles.header.points.bullet}>•</span>
                  <span className={visionStyles.header.points.text}>Solusi kesehatan holistik</span>
                </div>
                <div className={visionStyles.header.points.item}>
                  <span className={visionStyles.header.points.bullet}>•</span>
                  <span className={visionStyles.header.points.text}>Layanan berkelanjutan</span>
                </div>
                <div className={visionStyles.header.points.item}>
                  <span className={visionStyles.header.points.bullet}>•</span>
                  <span className={visionStyles.header.points.text}>Melayani masyarakat Indonesia</span>
                </div>
              </div>
            </div>

            {/* Image Mobile */}
            <div className={visionStyles.image.container}>
              <img 
                src="/img/visionmissionsection.webp" 
                alt="Vision Section" 
                className={visionStyles.image.image}
              />
            </div>

            {/* Image Desktop */}
            <div className={visionStyles.imageDesktop.container}>
              <img 
                src="/img/visionmissionsection.webp" 
                alt="Vision Section" 
                className={visionStyles.imageDesktop.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
