'use client';

import Image from 'next/image';
import type { FC } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';

import type { CourseModuleInfo } from '.';
import styles from './carousel.module.scss';

interface Props {
  modules: CourseModuleInfo[];
}

const AUTO_INTERVAL = 3000;
const INTERACTION_DELAY = 6000;

export const CourseOverviewCarousel: FC<Props> = props => {
  const [ activeIndex, setActiveIndex ] = useState(0);
  const total = props.modules.length;
  const hasModules = total > 0;
  const timerRef = useRef<number | null>(null);
  const delayRef = useRef(AUTO_INTERVAL);

  const scheduleRotation = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
    }

    if (total <= 1) {
      return;
    }

    timerRef.current = window.setTimeout(() => {
      delayRef.current = AUTO_INTERVAL;
      setActiveIndex(prev => (prev + 1) % total);
    }, delayRef.current);
  }, [ total ]);

  useEffect(() => {
    scheduleRotation();

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [ activeIndex, scheduleRotation ]);

  const setIndexWithDelay = (updater: (prev: number) => number) => {
    if (total <= 1) { return; }
    delayRef.current = INTERACTION_DELAY;

    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    setActiveIndex(prev => {
      const next = updater(prev);

      if (next === prev) {
        scheduleRotation();
        return prev;
      }

      return next;
    });
  };

  const handlePrev = () => {
    setIndexWithDelay(prev => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setIndexWithDelay(prev => (prev + 1) % total);
  };

  const handleDotClick = (index: number) => {
    setIndexWithDelay(() => index);
  };

  if (!hasModules) {
    return null;
  }

  return (
    <>
      <div className={styles.slider}>
        <button type="button" className={`${styles.navButton} ${styles.prev}`} onClick={handlePrev} aria-label="View previous module" disabled={total <= 1}>
          <span aria-hidden="true" className={styles.navIcon}>&#8249;</span>
        </button>
        <div className={styles.viewport}>
          <div className={styles.track} style={{ transform: `translateX(-${activeIndex * 100}%)` }} aria-live="polite">
            {props.modules.map((module, index) => (
              <article key={module.subtitle} className={styles.card}>
                <div className={styles.cardContent}>
                  <div className={`mb-3 ${styles.imageFrame}`}>
                    <Image src={module.image} alt={`${module.title} - ${module.subtitle}`} fill sizes="(max-width: 768px) 90vw, 600px" className="object-fit-cover rounded-4" priority={index === activeIndex} />
                  </div>
                  <p className={`text-uppercase fw-semibold mb-1 ${styles.moduleLabel}`}>{module.title}</p>
                  <h3 className="h4 fw-bold">{module.subtitle}</h3>
                  <p className="text-muted mb-0">{module.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
        <button type="button" className={`${styles.navButton} ${styles.next}`} onClick={handleNext} aria-label="View next module" disabled={total <= 1}>
          <span aria-hidden="true" className={styles.navIcon}>&#8250;</span>
        </button>
      </div>

      {total > 1 && (
        <div className={styles.dots} aria-label="Carousel pagination">
          {props.modules.map((module, index) => (
            <button key={module.subtitle} type="button" className={`${styles.dot} ${index === activeIndex ? styles.dotActive : ''}`} onClick={() => handleDotClick(index)} aria-label={`Go to module ${index + 1}`} aria-pressed={index === activeIndex} />
          ))}
        </div>
      )}
    </>
  );
};
