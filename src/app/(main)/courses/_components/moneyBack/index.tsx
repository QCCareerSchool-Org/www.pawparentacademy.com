import Image from 'next/image';
import type { FC } from 'react';

import shieldIcon from './shield-icon.jpg';
import styles from './styles.module.scss';

export const MoneyBackBanner: FC = () => (
  <section className={styles.section}>
    <div className="container">
      <div className="row justify-content-center">
        <div className={`col-lg-8 text-center ${styles.content}`}>
          <Image src={shieldIcon} alt="" className={styles.icon} width={56} height={56} />
          <p className={`text-uppercase fw-semibold mb-2 mt-3 ${styles.eyebrow}`}>14-DAY MONEY-BACK GUARANTEE</p>
          <h3 className="mb-3 text-white">Money-Back Guarantee</h3>
          <p className="mb-0 text-white">At Paw Parent Academy, we stand behind our high-quality dog grooming courses. Within 14 days of enrolling, you are eligible for a full refund. All you need to do is go through the course and contact the School to let us know why it's not a good fit for you.</p>
        </div>
      </div>
    </div>
  </section>
);
