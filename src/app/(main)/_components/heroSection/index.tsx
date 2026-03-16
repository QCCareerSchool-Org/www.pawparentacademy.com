import Link from 'next/link';
import type { FC } from 'react';

import heroImage from './images/hero-image-test-1.jpg';
import styles from './index.module.scss';
import { BackgroundImage } from '@/components/backgroundImage';

export const HeroSection: FC = () => (
  <section className={`bg-primary text-white ${styles.section}`}>
    <BackgroundImage src={heroImage} />
    <div className="container">
      <div className="row justify-content-start">
        <div className="col-12 col-lg-9">
          <h1>Be Your Dog's Favorite Groomer</h1>
          <p className="lead mb-5">Learn How to Groom Your Dog From Home Today!</p>
          <Link href="/courses" className="btn btn-lg btn-secondary">Explore Courses</Link>
        </div>
      </div>
    </div>
  </section>
);
