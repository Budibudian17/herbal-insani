import { theme } from '@/lib/theme';
import { heroStyles } from './styles';

export function HeroSection() {
  return (
    <section className={heroStyles.section.container}>
      {/* Background Image */}
      <div className={heroStyles.background.container}>
        <img 
          src="/img/hero2.webp" 
          alt="Herbal Insani Hero Background" 
          className={heroStyles.background.image}
        />
        <div className={heroStyles.background.overlay}></div>
      </div>

      {/* Content Overlay - Right Side */}
      <div className={heroStyles.content.container}>
        <div className={`${theme.layout.container} ${theme.spacing.page}`}>
          <div className={heroStyles.content.wrapper}>
            <div className={heroStyles.content.textContainer}>
              <h1 className={heroStyles.heading.container}>
                <span className={heroStyles.heading.brandSpan}>RUMAH SEHAT</span>
                <br />
                <span className={heroStyles.heading.contrastSpan}>HERBAL</span>
                <span className={heroStyles.heading.brandSpan}> INSANI</span>
              </h1>
              <p className={heroStyles.paragraph.container}>
                Pelayanan kesehatan herbal terpadu dengan pendekatan <span className={heroStyles.paragraph.highlightSpan}>Islami</span> dan <span className={heroStyles.paragraph.highlightSpan}>alami</span> untuk kesehatan optimal Anda. Kami hadir untuk memberikan solusi kesehatan yang holistik dengan bahan-bahan alami dan halal.
              </p>
              <button className={heroStyles.button.container}>
                Daftarkan Diri
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
