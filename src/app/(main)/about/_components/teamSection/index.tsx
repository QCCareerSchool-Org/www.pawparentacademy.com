import Image from 'next/image';
import type { FC } from 'react';

import nadia from './nadia.jpg';

export const TeamSection: FC = () => (
  <section className="bg-light pb-0">
    <div className="container">
      <div className="row align-items-end justify-content-center g-4">
        <div className="col-12 col-md-5">
          <Image src={nadia} alt="Grooming expert, Nadia Bongelli, with pug." className="img-fluid" width={800} height={600} />
        </div>

        <div className="col-12 col-md-6 text-center text-md-start">
          <h2>Expert-Led Education</h2>
          <h3 className="subtitle-teal">Nadia Bongelli</h3>
          <p className="mb-s">Your course instructor, Nadia Bongelli, is a highly acclaimed industry leader and Nationally Certified Master Groomer. Recognized for her exceptional talent, she has been ranked as Canada's #1 competitive groomer since 2018, earned the prestigious Barkleigh Honors Groomer of the Year award in 2024, and achieved second place at the 2024 World Grooming Championships in Belgium.</p>
        </div>
      </div>
    </div>
  </section>
);
