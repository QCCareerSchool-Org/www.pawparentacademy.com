import Link from 'next/link';
import type { FC } from 'react';

// import styles from './index.module.scss';
import { BackgroundImage } from '../backgroundImage';
import yorkie from './yorkie-2-thumb.jpg';
import { Overlay } from '@/components/overlay';

export const CTASection: FC = () => (
  <section className="bg-dark text-white">
    <BackgroundImage src={yorkie} />
    <Overlay backgroundColor="rgba(0,0,0,0.85)" />
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-12 col-md-10 col-lg-8">
          <h2 className="h3 mb-3">Are You Ready to Start Grooming Your Own Dog?</h2>
          <p className="mb-4">Gain the skills and confidence to groom your dog at home while keeping your fur baby safe, happy, and looking their best!</p>
          <Link href="/courses" className="btn btn-secondary">Browse Courses</Link>
        </div>
      </div>
    </div>
  </section>
);
