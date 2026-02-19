import type { FC } from 'react';

import background from './background.jpg';
import { BackgroundImage } from '@/components/backgroundImage';

export const Hero: FC = () => (
  <section className="text-center">
    <BackgroundImage src={background} objectPosition="0% 50%" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-9 col-lg-7 col-xl-6">
          <h1 className="mb-3 fw-bold">Frequently Asked Questions</h1>
          <p className="lead text-muted fw-normal mb-0">Below you'll find answers to common questions about our grooming courses and how we can help you master the art of grooming your dog at home!</p>
        </div>
      </div>
    </div>
  </section>
);
