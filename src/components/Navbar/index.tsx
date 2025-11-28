'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logo from '@/images/ppa-full-logo.jpg'; // optional static import if you prefer
import styles from './Navbar.module.scss';

export default function Navbar() {
  const pathname = usePathname();
  const links = [
    { href: '/courses', label: 'Courses' },
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
    { href: '/login', label: 'Log In' },
  ];

  return (
    <header className={styles.header} role="banner">
      <nav className="navbar navbar-expand-lg">
        <div className="container header__container">
          <Link href="/" aria-label="Paw Parent Academy home" className="navbar-brand">
            <Image
              src={logo}
              alt="Paw Parent Academy"
              width={150}
              height={40}
              priority
              className={styles.navbarBrandImg}
            />
          </Link>

          <button
            className={`navbar-toggler ${styles.toggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon ${styles.togglerIcon}`} />
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="mainNav">
            <ul className={`navbar-nav ${styles.navList}`}>
              {links.map(({ href, label }) => {
                const isActive = pathname === href || pathname === `${href}/`;

                return (
                  <li className="nav-item" key={href}>
                    <Link
                      href={href}
                      className={`nav-link ${isActive ? 'active' : ''}`.trim()}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}