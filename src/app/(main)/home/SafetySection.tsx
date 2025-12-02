import Image from 'next/image';
import styles from './SafetySection.module.scss';

interface SafetyFeature {
  title: string;
  description: string;
  icon: string;
  alt: string;
}

interface SafetySectionProps {
  features: SafetyFeature[];
}

export default function SafetySection({ features }: SafetySectionProps) {
  return (
    <section className={`${styles.section} bg-white`} aria-labelledby="safety-heading">
      <div className="container">
        <div className="text-center mb-4">
          <h5 className="subtitle-teal mb-2">Groom Your Dog Safely and Confidently</h5>
          <h2 id="safety-heading" className="mb-5">Everything You Need to Succeed</h2>
        </div>
        <div className={styles.grid}>
          {features.map((feature) => (
            <article key={feature.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <Image src={feature.icon} alt={feature.alt} width={36} height={36} />
              </div>
              <h3 className="h5 fw-bold">{feature.title}</h3>
              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
