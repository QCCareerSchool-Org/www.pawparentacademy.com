import Image from 'next/image';
import type { FC } from 'react';

import aboutDog from './about-dog.jpg';
// import styles from './index.module.scss';

export const HeroSection: FC = () => (
  <section>
    <div className="container">
      <div className="row justify-content-center mb-4">
        <div className="col-12 col-md-10 text-center">
          <h2 className="mb-0">Empowering Pet Parents</h2>
        </div>
      </div>

      <div className="row align-items-center g-5 mb-4">
        <div className="col-12 col-lg-5">
          <p><strong>At Paw Parent Academy</strong>, we believe every pet parent deserves the knowledge and confidence to care for their furry family members in the best way possible. As pet parents ourselves, we know how much love and effort goes into keeping our dogs happy and healthy. But we also understand the challenges—grooming costs are rising, times are tough, and many dogs feel uneasy or stressed at the groomer.</p>
          <p>That's why we created Paw Parent Academy: to empower dog owners with the skills to groom their own pets at home. Our online courses teach you breed-specific techniques so you can keep your pup looking and feeling their best—without the stress of expensive salon visits or uncomfortable trips to the groomer. Not only will you save money, but you'll also strengthen the bond with your dog, turning grooming into a positive and rewarding experience.</p>
        </div>
        <div className="col-12 col-lg-7 text-center">
          <Image src={aboutDog} alt="Happy dog" width={900} height={600} className="img-fluid" />
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-md-6 text-center">
          <p className="lead mb-0">Join us and discover how simple, affordable, and stress-free at-home grooming can be!</p>
        </div>
      </div>

    </div>
  </section>
);
