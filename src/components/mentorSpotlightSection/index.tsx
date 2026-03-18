import Image from 'next/image';
import type { FC } from 'react';

import nadia from './images/nadia.jpg';
import styles from './index.module.scss';

/**
 * The section has no bottom padding so that the image can touch the bottom. The first column has a
 * section-padding-sized margin at the bottom to compensate when in two-column view
 */
export const MentorSpotlight: FC = () => (
  <section className="bg-light pb-0">
    <div className="container">
      <div className="row align-items-bottom g-4">
        <div className="col-12 col-lg-6 mb-s">
          <article className="card shadow-lg">
            <div className={`card-body ${styles.variablePadding}`}>
              <h5 className="text-secondary mb-1">Meet Your Grooming Mentor</h5>
              <h2 className="mb-2">Nadia Bongelli</h2>
              <h3 className="h5 text-muted mb-4">Nationally Certified Master Groomer</h3>
              <p className="card-text">Nadia is a highly acclaimed industry leader whose journey began as a devoted paw parent. Grooming her own dog sparked a passion that led her to the top of the industry.</p>
              <p className="card-text">She has been ranked among the top competitive groomers since 2018, earned the prestigious Barkleigh Honors Groomer of the Year award in 2024, and secured second place at Belgium's 2024 World Grooming Championships.</p>
            </div>
          </article>
        </div>
        <div className="col-12 col-lg-6 d-flex align-items-end">
          <div>
            <Image src={nadia} alt="Nadia Bongelli smiling with a dog" className="img-fluid" style={{ maxWidth: 540 }} />
          </div>
        </div>
      </div>
    </div>
  </section>
);
