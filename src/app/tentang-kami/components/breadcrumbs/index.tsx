import Link from 'next/link';
import { Home } from 'lucide-react';
import { breadcrumbsStyles } from './styles';

export function Breadcrumbs() {
  return (
    <nav className={breadcrumbsStyles.container}>
      <div className={breadcrumbsStyles.wrapper}>
        <ol className={breadcrumbsStyles.list}>
          <li className={breadcrumbsStyles.item}>
            <Link href="/" className={breadcrumbsStyles.link}>
              <Home className="w-4 h-4" />
            </Link>
          </li>
          <li className={breadcrumbsStyles.separator}>/</li>
          <li className={breadcrumbsStyles.current}>Tentang Kami</li>
        </ol>
      </div>
    </nav>
  );
}
