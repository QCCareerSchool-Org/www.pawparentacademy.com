import Image, { type StaticImageData } from 'next/image';
import styles from './ValuePropsSection.module.scss';

interface ValueProp {
  title: string;
  description: string;
  image: string | StaticImageData;
  alt: string;
}

interface ValuePropsSectionProps {
  items: ValueProp[];
}

export default function ValuePropsSection({ items }: ValuePropsSectionProps) {
  return (
    <section className={`${styles.section} bg-white`} aria-label="Pet parent benefits">
      <div className="container">
        <div className={styles.grid}>
          {items.map((item) => (
            <article key={item.title} className={styles.card}>
              <div className={styles.imageWrap}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1200px) 280px, (min-width: 768px) 240px, 85vw"
                  className={`${styles.image} rounded-4`}
                />
              </div>
              <h4 className={styles.title}>{item.title}</h4>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
