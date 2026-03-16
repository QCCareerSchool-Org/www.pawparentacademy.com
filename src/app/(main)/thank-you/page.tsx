import type { Metadata } from 'next';
import Link from 'next/link';

import styles from './page.module.scss';
import type { PageComponent } from '@/app/serverComponent';

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Your enrollment was successful. Check your inbox soon for next steps from Paw Parent Academy.',
  alternates: {
    canonical: 'https://www.pawparentacademy.com/thank-you',
  },
};

const ThankYouPage: PageComponent = () => (
  <section className={styles.thankYouSection}>
    <div className={`container ${styles.centerWrap}`}>
      <div className={styles.card}>
        <h3>Thank you!</h3>
        <h5>Your enrollment was successful.</h5>
        <p>You will receive an email shortly with further instructions. If you have any questions in the meantime, feel free to reach out at <a className="link-brand-pink" href="mailto:info@pawparentacademy.com">info@pawparentacademy.com</a>—we're excited to help you start grooming with confidence.</p>
        <Link className={`btn-pill-primary ${styles.ctaButton}`} href="/">Back to Home</Link>
      </div>
    </div>
  </section>
);

export default ThankYouPage;
