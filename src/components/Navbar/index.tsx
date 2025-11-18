'use client';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/images/ppa-full-logo.jpg'; // optional static import if you prefer
import styles from './Navbar.module.scss';

export default function Navbar() {
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

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav" aria-controls="mainNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="mainNav">
            <ul className={`navbar-nav ${styles.navList}`}>
              <li className="nav-item"><Link href="/courses" className="nav-link">Courses</Link></li>
              <li className="nav-item"><Link href="/faq" className="nav-link">FAQ</Link></li>
              <li className="nav-item"><Link href="/about" className="nav-link active">About</Link></li>
              <li className="nav-item"><Link href="/blog" className="nav-link">Blog</Link></li>
              <li className="nav-item"><Link href="/login" className="nav-link">Log In</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}