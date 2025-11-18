import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.scss';
import whiteLogoIcon from '@/images/ppa-logo.jpg';

export default function Footer(){
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className="container footer__container media">
        <div className="row align-items-center py-2">
          <div className="col-md-3 text-center text-md-start">
            <Link href="/"><Image src={whiteLogoIcon} alt="Footer Logo" width={55} height={60} /></Link>
          </div>

          <div className="col-md-6 text-center">
            <nav aria-label="Footer links">
              <Link href="/contact" className={styles.link}>Contact Us</Link>
              <span className="mx-3">|</span>
              <Link href="/privacy-policy" className={styles.link}>Privacy Policy</Link>
            </nav>
          </div>

          <div className="col-md-3 text-center text-md-end">
            <div className={styles.social}>
              <a href="https://www.facebook.com/pawparentacademy" aria-label="Facebook" className={styles.icon}><i className="fab fa-facebook-f" /></a>
              <a href="https://www.instagram.com/pawparentacademy" aria-label="Instagram" className={styles.icon}><i className="fab fa-instagram" /></a>
              <a href="https://www.youtube.com/@PawParentAcademy" aria-label="YouTube" className={styles.icon}><i className="fab fa-youtube" /></a>
              <a href="https://in.pinterest.com/pawparentacademy/" aria-label="Pinterest" className={styles.icon}><i className="fab fa-pinterest-p" /></a>
              <a href="https://www.tiktok.com/@pawparentacademy" aria-label="TikTok" className={styles.icon}><i className="fab fa-tiktok" /></a>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center small text-muted">© 2025 Paw Parent Academy</div>
        </div>
      </div>
    </footer>
  );
}