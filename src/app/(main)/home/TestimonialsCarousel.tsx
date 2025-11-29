'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './TestimonialsCarousel.module.scss';

export interface TestimonialItem {
  name: string;
  quote: string;
  image: string;
  alt: string;
}

interface TestimonialsCarouselProps {
  items: TestimonialItem[];
}

const AUTO_ROTATE_MS = 6000;

export default function TestimonialsCarousel({ items }: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = items.length;

  useEffect(() => {
    if (total <= 1) return undefined;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % total);
    }, AUTO_ROTATE_MS);

    return () => window.clearInterval(timer);
  }, [total]);

  const handlePrev = () => {
    if (total <= 1) return;
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    if (total <= 1) return;
    setActiveIndex((prev) => (prev + 1) % total);
  };

  if (!total) {
    return null;
  }

  return (
    <div>
      <div className={styles.slider}>
        <button
          type="button"
          className={styles.navButton}
          onClick={handlePrev}
          aria-label="View previous testimonial"
          disabled={total <= 1}
        >
          <span aria-hidden="true" className={styles.navIcon}>‹</span>
        </button>
        <div className={styles.viewport}>
          <div
            className={styles.track}
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            aria-live="polite"
          >
            {items.map((item) => (
              <article key={item.name} className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.avatar}>
                    <Image src={item.image} alt={item.alt} width={84} height={84} />
                  </div>
                  <p className={styles.quote}>“{item.quote}”</p>
                  <p className="fw-bold mb-0">{item.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <button
          type="button"
          className={styles.navButton}
          onClick={handleNext}
          aria-label="View next testimonial"
          disabled={total <= 1}
        >
          <span aria-hidden="true" className={styles.navIcon}>›</span>
        </button>
      </div>

      {total > 1 && (
        <div className={styles.dots} aria-label="Testimonial pagination">
          {items.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-pressed={index === activeIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
}
