import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';
import whiteLogoIcon from '@/images/ppa-logo.jpg';

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <Link href="/" aria-label="Paw Parent Academy home">
              <Image src={whiteLogoIcon} alt="Paw Parent Academy logo" width={52} height={52} />
            </Link>
          </div>

          <div className={styles.meta}>
            <nav aria-label="Footer links" className={styles.links}>
              <Link href="/contact" className={styles.link}>
                Contact Us
              </Link>
              <span aria-hidden="true" className={styles.separator}>
                |
              </span>
              <Link href="/privacy-policy" className={styles.link}>
                Privacy Policy
              </Link>
            </nav>
            <p className={styles.copy}>© 2025 Paw Parent Academy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}