import type { Metadata } from 'next';
import styles from './ContactPage.module.scss';

const emailAddress = 'info@pawparentacademy.com';
const mailtoLink = `mailto:${emailAddress}`;

export const metadata: Metadata = {
  title: 'Contact Paw Parent Academy | Get in Touch',
  description:
    'Need help with our grooming courses? Reach Paw Parent Academy for support and quick answers via email.',
  alternates: {
    canonical: 'https://www.pawparentacademy.com/contact',
  },
};

export default function ContactPage() {
  return (
    <section className={styles.contactSection}>
      <div className={`container ${styles.centerWrap}`}>
        <div className={styles.card}>
          <h3>Get in Touch with Paw Parent Academy!</h3>
          <h5>Have questions about our grooming courses?</h5>
          <p>
            We&apos;re here to help! Whether you need support, have inquiries, or just want to say hello, we&apos;d love to
            hear from you. Reach us at{' '}
            <a className="link-brand-pink" href={mailtoLink}>
              {emailAddress}
            </a>
            .
          </p>
          <a className={`btn-pill-primary ${styles.ctaButton}`} href={mailtoLink}>
            Email Us
          </a>
        </div>
      </div>
    </section>
  );
}
