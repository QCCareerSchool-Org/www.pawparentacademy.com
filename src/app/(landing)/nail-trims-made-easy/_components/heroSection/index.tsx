import Image from 'next/image';
import type { FC } from 'react';

import formImage from './images/form-dog.png';
import backgroundImage from './images/nail-trimming-easy-hero-bg.jpg';
import styles from './index.module.scss';
import { Form } from '../../../../../components/form';
import { BackgroundImage } from '@/components/backgroundImage';
import { Overlay } from '@/components/overlay';

export const HeroSection: FC = () => (
  <section className={styles.hero}>
    <BackgroundImage src={backgroundImage} />
    <Overlay background="linear-gradient(120deg, #fff6, #fff5efa6)" />
    <div className="container">
      <div className="row g-4 align-items-start">
        <div className="col-12 col-lg-5">
          <div id="nail-playbook" className={styles.anchor} />
          <div className="card shadow">
            <div className="card-body">
              <Image src={formImage} alt="Limited time only!" priority className="img-fluid mb-2" />
              <h2 className="h4 mb-2">Get the &ldquo;NAIL TRIMS&rdquo; Pup Playbook for <span className={styles.priceStrike}>$39</span> <span className={styles.freeText}>Free</span></h2>
              <p className="text-muted mb-3">Learn stress-free techniques to keep your pup's paws healthy at home!</p>
              <Form />
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-7">
          <p className="eyebrow mb-3">Free Pup Playbook</p>
          <h1 className="h2 mb-3">Get Instant Access to the Pup Playbook!</h1>
          <h2 className="h4 mb-3">Nail Trims Made Easy</h2>
          <p className="mb-5">Learn stress-free nail trimming techniques so you can keep your pup's paws healthy at home.</p>
          <div className={`row g-5 ${styles.listWrap}`}>
            <div className="col-sm-6">
              <h3 className="h6 text-uppercase mb-3"><strong>What you&apos;ll learn</strong></h3>
              <ul>
                {learnList.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="col-sm-6">
              <h3 className="h6 text-uppercase mb-3"><strong>Why join?</strong></h3>
              <ul>
                {reasonsList.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const learnList = [
  'Simple, step-by-step techniques to keep your dog calm & comfortable.',
  'Expert tips to avoid common mistakes like cutting too short.',
  'How to make nail trims a positive experience (for both of you!).',
];

const reasonsList = [
  'Save time and money by doing your own nail trims.',
  'Build trust and strengthen your bond with your pup.',
  'Gain the confidence to handle nail trims like a pro!',
];
