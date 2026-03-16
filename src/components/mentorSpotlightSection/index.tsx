import Image from 'next/image';
import type { FC } from 'react';

import nadia from './images/nadia.jpg';
import styles from './index.module.scss';

export const MentorSpotlight: FC = () => (
  <section className="bg-light">
    <div className="container">
      <div className="row align-items-center g-4">
        <div className="col-12 col-lg-6">
          <article className={styles.card}>
            <h5 className="text-secondary mb-1">Meet Your Grooming Mentor</h5>
            <h2 className="mb-2">Nadia Bongelli</h2>
            <h3 className="h5 text-muted mb-4">Nationally Certified Master Groomer</h3>
            <p>Nadia is a highly acclaimed industry leader whose journey began as a devoted paw parent. Grooming her own dog sparked a passion that led her to the top of the industry.</p>
            <p>She has been ranked among the top competitive groomers since 2018, earned the prestigious Barkleigh Honors Groomer of the Year award in 2024, and secured second place at Belgium's 2024 World Grooming Championships.</p>
          </article>
        </div>
        <div className="col-12 col-lg-6">
          <div className={styles.imageWrap}>
            <Image src={nadia} alt="Nadia Bongelli smiling with a dog" width={720} height={640} />
          </div>
        </div>
      </div>
    </div>
  </section>
);
