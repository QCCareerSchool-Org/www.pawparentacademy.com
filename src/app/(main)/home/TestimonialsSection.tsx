import TestimonialsCarousel, { TestimonialItem } from './TestimonialsCarousel';
import styles from './TestimonialsSection.module.scss';

interface TestimonialsSectionProps {
  items: TestimonialItem[];
}

export default function TestimonialsSection({ items }: TestimonialsSectionProps) {
  return (
    <section className={`${styles.section} bg-white`} aria-labelledby="testimonials-heading">
      <div className="container">
        <div className={styles.heading}>
          <h5 className="subtitle-teal mb-2">Proof from Paw Parents</h5>
          <h2 id="testimonials-heading">Real Results With Real Pups</h2>
        </div>
        <TestimonialsCarousel items={items} />
      </div>
    </section>
  );
}
