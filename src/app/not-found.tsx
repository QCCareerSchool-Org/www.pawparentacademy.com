import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BootstrapClient from '@/components/BootstrapClient';
import styles from './NotFoundPage.module.scss';
import pinkLogoIcon from '@/app/pink-logo-icon.png';

export default function NotFoundPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className={styles.notFoundSection}>
          <div className={`container ${styles.centerWrap}`}>
            <div className={styles.card}>
              <div className={styles.logoWrap}>
                <Image src={pinkLogoIcon} alt="Paw Parent Academy pink logo" priority />
              </div>
              <h3>Oops! Looks like this page went for a walk.</h3>
              <p className={styles.subtitle}>
                <em>But don&apos;t worry—you can head back home and find exactly what you&apos;re looking for.</em>
              </p>
              <Link className={`btn-pill-primary ${styles.ctaButton}`} href="/">
                Return to Homepage
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BootstrapClient />
    </>
  );
}
