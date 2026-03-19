import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import calendarCheckIcon from './images/calendar-check.jpg';
import checklistIcons from './images/checklist-icon.png';
import heartBookIcon from './images/heart-book-icon.png';
import scissorsIcon from './images/scissors-icon.png';
import styles from './index.module.scss';

interface SafetyFeature {
  title: string;
  description: string;
  icon: string | StaticImageData;
  alt: string;
}

export const SafetySection: FC = () => (
  <section className={`${styles.section} bg-white`} aria-labelledby="safety-heading">
    <div className="container">
      <div className="text-center mb-4">
        <h5 className="subtitle-teal mb-2">Groom Your Dog Safely and Confidently</h5>
        <h2 id="safety-heading" className="mb-5">Everything You Need to Succeed</h2>
      </div>
      <div className={styles.grid}>
        {safetyFeatures.map(feature => (
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

const safetyFeatures: SafetyFeature[] = [
  {
    title: 'Self-Directed',
    description: 'Complete the course at your own pace with lifetime access.',
    icon: calendarCheckIcon,
    alt: 'Calendar icon',
  },
  {
    title: 'Tools of the Trade',
    description: "Discover the best tools for your dog's breed and coat type.",
    icon: scissorsIcon,
    alt: 'Pair of scissors icon',
  },
  {
    title: 'Easy to Follow',
    description: 'Follow step-by-step instructions for the entire grooming process.',
    icon: checklistIcons,
    alt: 'Checklist icon',
  },
  {
    title: 'Bonus Guides',
    description: "Enjoy bonus guides that you can refer to as you're grooming.",
    icon: heartBookIcon,
    alt: 'Book with heart icon',
  },
];
