import styles from './IntroSection.module.scss';

interface IntroSectionProps {
  eyebrow: string;
  title: string;
  body: string;
}

export default function IntroSection({ eyebrow, title, body }: IntroSectionProps) {
  return (
    <section className={`${styles.section} bg-white`} aria-labelledby="intro-heading">
      <div className="container">
        <p className={styles.eyebrow}>{eyebrow}</p>
        <h2 id="intro-heading" className={styles.title}>
          {title}
        </h2>
        <p className={styles.body}>{body}</p>
      </div>
    </section>
  );
}
