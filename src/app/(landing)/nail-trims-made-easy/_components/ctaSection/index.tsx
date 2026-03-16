import Link from 'next/link';
import type { FC } from 'react';

import styles from './index.module.scss';

export const CTASection: FC = () => (
  <section className={styles.cta} aria-labelledby="nail-trim-cta">
    <div className={styles.inner}>
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h2 id="nail-trim-cta" className="text-white mb-3">Ready to Make Nail Trims Easy?</h2>
            <p className="text-white mb-4">No more stress. No more struggles. Just happy, healthy paws!</p>
            <Link href="#nail-playbook" className="btn btn-lg btn-secondary">Sign Up and Get Instant Access</Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);
