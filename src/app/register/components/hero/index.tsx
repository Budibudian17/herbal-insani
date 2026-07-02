import { heroStyles } from "./styles";


export function HeroSection() {
  return (
    <section className={heroStyles.section.container} style={{ backgroundImage: heroStyles.section.backgroundImage }}>
      <div className={heroStyles.section.overlay}></div>
      <div className={heroStyles.container.wrapper}>
        <div className={heroStyles.content.container}>
          <h1 className={heroStyles.content.title}>Pendaftaran Pasien</h1>
          <p className={heroStyles.content.description}>
            Daftarkan diri Anda untuk mendapatkan layanan kesehatan herbal terbaik dari Herbal Insani
          </p>
        </div>
      </div>
    </section>
  );
}
