import Link from 'next/link';
import { Home } from 'lucide-react';
import { heroStyles } from './styles';

export function HeroSection() {
  return (
    <section 
      className={heroStyles.section.container}
      style={{ backgroundImage: "url('/img/aboutusherosection.webp')" }}
    >
      <div className={heroStyles.section.overlay}></div>
      <div className={heroStyles.container.wrapper}>
        <div className={heroStyles.container.content}>
          <nav className={heroStyles.breadcrumbs.container}>
            <ol className={heroStyles.breadcrumbs.list}>
              <li className={heroStyles.breadcrumbs.item}>
                <Link href="/" className={heroStyles.breadcrumbs.link}>
                  <Home className="w-4 h-4" />
                </Link>
              </li>
              <li className={heroStyles.breadcrumbs.separator}>/</li>
              <li className={heroStyles.breadcrumbs.current}>Layanan</li>
            </ol>
          </nav>
          <div className={heroStyles.title.container}>
            <h1 className={heroStyles.title.heading}>Layanan</h1>
          </div>
        </div>
      </div>
    </section>
  );
}
