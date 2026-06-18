'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { theme } from '@/lib/theme';
import { navbarStyles } from './navbar-styles';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Layanan', href: '#services' },
    { name: 'Cabang', href: '#branches' },
    { name: 'Kontak', href: '#contact' },
  ];

  const branch = {
    name: 'Depok Merdeka',
    address: 'Jl Merdeka Raya Blok IV No 13 Depok II Tengah Sukmajaya-Depok',
    phone: '021-7700812',
  };

  return (
    <>
      {/* Top Bar - Branch Contact Info (Not Sticky) */}
      <div className={navbarStyles.topBar.container}>
        <div className={`${theme.layout.container} px-4`}>
          <div className={navbarStyles.topBar.content}>
            <MapPin className={navbarStyles.topBar.icon} />
            <span>{branch.address}</span>
            <span className="hidden md:inline">|</span>
            <Phone className={navbarStyles.topBar.icon} />
            <span>{branch.phone}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar (Sticky) */}
      <nav className={navbarStyles.navbar.container}>
        <div className={`${theme.layout.container} ${theme.spacing.card}`}>
          {/* Desktop Layout */}
          <div className={navbarStyles.navbar.content}>
            {/* Logo */}
            <div className={navbarStyles.logo.container}>
              <img 
                src="/img/logoherbalinsani.webp" 
                alt="Herbal Insani Logo" 
                className={navbarStyles.logo.image}
              />
            </div>

            {/* Desktop Navigation */}
            <div className={navbarStyles.nav.container}>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${navbarStyles.nav.link} ${isActive ? navbarStyles.nav.linkActive : ''}`}
                  >
                    {item.name}
                    <span className={`${navbarStyles.nav.underline} ${isActive ? navbarStyles.nav.underlineActive : ''}`}></span>
                  </a>
                );
              })}
              <button className={navbarStyles.nav.button}>
                Daftarkan Diri
              </button>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className={navbarStyles.navbar.mobileContent}>
            {/* Spacer for balance */}
            <div className="w-10"></div>

            {/* Logo - Centered on Mobile */}
            <div className={navbarStyles.logo.container}>
              <img 
                src="/img/logoherbalinsani.webp" 
                alt="Herbal Insani Logo" 
                className={navbarStyles.logo.mobileImage}
              />
            </div>

            {/* Mobile Menu Button */}
            <button
              className={navbarStyles.mobile.button}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className={navbarStyles.mobile.icon} />
              ) : (
                <Menu className={navbarStyles.mobile.icon} />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className={navbarStyles.mobile.menu}>
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`${navbarStyles.mobile.link} ${isActive ? navbarStyles.mobile.linkActive : ''}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                );
              })}
              <div className={navbarStyles.mobile.buttonWrapper}>
                <button className={navbarStyles.nav.button}>
                  Daftarkan Diri
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
