import { heroStyles } from "./styles";


export function HeroSection() {
  return (
    <section 
      className={heroStyles.section.container}
      style={{ backgroundImage: "url('/img/locationHero.webp')" }}
    >
      <div className={heroStyles.section.overlay}></div>
      <div className={heroStyles.container.wrapper}>
        <div className={heroStyles.container.content}>
          {/* Breadcrumbs */}
          <div className={heroStyles.breadcrumbs.container}>
            <nav className={heroStyles.breadcrumbs.list}>
              <a href="/" className={heroStyles.breadcrumbs.item}>
                <span className={heroStyles.breadcrumbs.link}>Beranda</span>
              </a>
              <span className={heroStyles.breadcrumbs.separator}>/</span>
              <span className={heroStyles.breadcrumbs.current}>Cabang</span>
            </nav>
          </div>

          {/* Page Title */}
          <div className={heroStyles.title.container}>
            <h1 className={heroStyles.title.heading}>CABANG KAMI</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
