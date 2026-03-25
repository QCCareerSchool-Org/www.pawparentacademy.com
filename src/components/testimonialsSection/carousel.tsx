'use client';

import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';
import { useEffect, useState } from 'react';

import styles from './carousel.module.scss';
import jason from './images/jason-dozer.jpg';
import meaghan from './images/meaghan-duke.jpg';
import mike from './images/mike-ollie.jpg';
import monica from './images/monica-pepe.jpg';
import sara from './images/sara-timothy.jpg';

export interface TestimonialItem {
  name: string;
  quote: string;
  image: string | StaticImageData;
  alt: string;
}

const AUTO_ROTATE_MS = 6000;

export const Carousel: FC = () => {
  const [ activeIndex, setActiveIndex ] = useState(0);
  const total = testimonials.length;

  useEffect(() => {
    if (total <= 1) {
      return;
    }

    const timer = window.setTimeout(() => {
      setActiveIndex(prev => (prev + 1) % total);
    }, AUTO_ROTATE_MS);

    return () => window.clearTimeout(timer);
  }, [ activeIndex, total ]);

  const handlePrev = () => {
    if (total <= 1) {
      return;
    }
    setActiveIndex(prev => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    if (total <= 1) {
      return;
    }
    setActiveIndex(prev => (prev + 1) % total);
  };

  const handleButtonClick = (index: number) => setActiveIndex(index);

  if (!total) {
    return null;
  }

  return (
    <div>
      <div className={styles.slider}>
        <button type="button" className={styles.navButton} onClick={handlePrev} aria-label="View previous testimonial" disabled={total <= 1}>
          <span aria-hidden="true" className={styles.navIcon}>&lt;</span>
        </button>
        <div className={styles.viewport}>
          <div className={styles.track} style={{ transform: `translateX(-${activeIndex * 100}%)` }} aria-live="polite">
            {testimonials.map(t => (
              <article key={t.name} className={styles.card}>
                <div className={styles.cardInner}>
                  <div className={styles.avatar}>
                    <Image src={t.image} alt={t.alt} width={84} height={84} />
                  </div>
                  <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                  <p className="fw-bold mb-0">{t.name}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <button type="button" className={styles.navButton} onClick={handleNext} aria-label="View next testimonial" disabled={total <= 1}>
          <span aria-hidden="true" className={styles.navIcon}>&gt;</span>
        </button>
      </div>

      {total > 1 && (
        <div className={styles.dots} aria-label="Testimonial pagination">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
              onClick={() => handleButtonClick(i)}
              aria-label={`Go to slide ${i + 1}`}
              aria-pressed={i === activeIndex}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const testimonials: TestimonialItem[] = [
  {
    name: 'Meaghan & Duke',
    quote: 'Trimming my dogs\' nails at home doesn\'t feel like an overwhelming proposition anymore. I feel confident and equipped to give my dogs the care they need. I highly recommend this course!',
    image: meaghan,
    alt: 'Meaghan smiling with Duke',
  },
  {
    name: 'Jason & Dozer',
    quote: 'I especially like learning about the right tools to use and how to make sure my dog is comfortable around those tools. I feel a lot more confident trimming my dog\'s nails!',
    image: jason,
    alt: 'Jason holding Dozer the dog',
  },
  {
    name: 'Monica & Pepe',
    quote: 'Comprehensive and easy to follow. The content is well-structured, breaking down the grooming process into clear, manageable modules based on different dog hair types and specific grooming steps. The instructor provided lots of tips & tricks, and the adorable dog modules are a bonus.',
    image: monica,
    alt: 'Monica with Pepe the Biewer Yorkie',
  },
  {
    name: 'Mike & Ollie',
    quote: 'It was getting harder and harder to leave my senior dog at the groomer for nail trims and baths. This course taught us everything we need to take care of her at home without the stress of leaving her. We even learned great tips for grooming a senior dog!',
    image: mike,
    alt: 'Mike holding Ollie the dog',
  },
  {
    name: '',
    quote: 'I wanted to get my new puppy off to the right start with grooming. With my Paw Parent Academy course, I not only learned how to keep my puppy\'s nails, teeth and coat well maintained, I also learned how to make him feel comfortable with grooming.',
    image: sara,
    alt: 'Sara with Timothy the dachshund',
  },
];
