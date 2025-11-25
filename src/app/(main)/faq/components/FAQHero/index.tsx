import type { CSSProperties } from 'react';
import heroImage from './faq-bg-image.jpg';
import styles from './styles.module.scss';

export default function FAQHero() {
  const sectionStyle: CSSProperties = {
    backgroundImage: `url(${heroImage.src})`
  };

  return (
    <section className={styles.hero} style={sectionStyle}>
      <div className="container position-relative">
        <div className="row justify-content-center text-center">
          <div className="col-12 col-lg-8 col-xl-7">
            <h1 className="mb-3 fw-bold">Frequently Asked<br />Questions</h1>
            <h2 className="h5 text-muted fw-normal mb-0">
              Below you&rsquo;ll find answers to common questions about our grooming courses and how we can help you master the art of grooming your dog at home!
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
