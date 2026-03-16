import type { FC } from 'react';

import { Carousel } from './carousel';
// import styles from './index.module.scss';

export const TestimonialsSection: FC = () => (
  <section className="text-center">
    <div className="container">
      <div className="eyebrow mb-2">Proof from Paw Parents</div>
      <h2>Real Results With Real Pups</h2>
      <Carousel />
    </div>
  </section>
);
