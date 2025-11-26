import styles from './styles.module.scss';

export default function FAQHero() {
  const subtitleText =
    "Below you'll find answers to common questions about our grooming courses and how we can help you master the art of grooming your dog at home!";

  return (
    <section className={styles.hero}>
      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className={`col-12 col-lg-8 col-xl-7 ${styles.copy}`}>
            <h1 className={`mb-3 fw-bold ${styles.titleDesktop}`}>
              Frequently Asked
              <br />
              Questions
            </h1>
            <h2 className={`mb-3 fw-bold ${styles.titleMobile}`}>
              Frequently Asked Questions
            </h2>
            <h2 className={`h5 text-muted fw-normal mb-0 ${styles.subtitleDesktop}`}>
              {subtitleText}
            </h2>
            <p className={`text-muted fw-normal mb-0 ${styles.subtitleMobile}`}>
              {subtitleText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
