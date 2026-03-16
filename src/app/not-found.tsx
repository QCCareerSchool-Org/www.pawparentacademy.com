import Image from 'next/image';
import Link from 'next/link';

import styles from './not-found.module.scss';
import type { PageComponent } from './serverComponent';
import pinkLogoIcon from '@/app/pink-logo-icon.png';
import './main.scss';

const NotFoundPage: PageComponent = () => (
  <section className={styles.notFoundSection}>
    <div className={`container ${styles.centerWrap}`}>
      <div className={styles.card}>
        <div className={styles.logoWrap}>
          <Image src={pinkLogoIcon} alt="Paw Parent Academy pink logo" priority />
        </div>
        <h3>Oops! Looks like this page went for a walk.</h3>
        <p className={styles.subtitle}>
          <em>But don't worry—you can head back home and find exactly what you're looking for.</em>
        </p>
        <Link className={`btn-pill-primary ${styles.ctaButton}`} href="/">Return to Homepage</Link>
      </div>
    </div>
  </section>
);

export default NotFoundPage;
