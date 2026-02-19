import type { FC } from 'react';

import { ValueProps } from '@/components/valueProps';

// import styles from './index.module.scss';

export const IntroSection: FC = () => (
  <section className="text-center">
    <div className="container">
      <p className="eyebrow">Step-by-Step Online Training</p>
      <h2>Designed for Pet Parents</h2>
      <p className="mb-5">Grooming your dog at home has never been easier—or more rewarding! With our courses, you'll save money on expensive grooming appointments, learn professional techniques from an award-winning groomer, and deepen the bond with your furry best friend. Designed for loving pet parents, each step-by-step course includes coat-specific guidance to ensure your dog looks and feels their best, all while creating a calm, stress-free grooming experience.</p>
      <ValueProps />
    </div>
  </section>
);
