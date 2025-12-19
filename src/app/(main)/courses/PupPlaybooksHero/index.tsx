import React from 'react';

import styles from './styles.module.scss';

export default function PupPlaybooksHero() {
  return (
    <section className={`py-4 ${styles.hero} mt-2`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 text-center">
            <h1>Pup Playbooks</h1>
            <h2 className="subtitle-teal mt-3">Care for Every Dog</h2>
            <p className="mt-3">
              Discover quick and effective techniques to keep your pup happy, clean, and well-maintained with Paw Parent Academy&apos;s Pup Playbooks. These mini-courses are designed to make grooming easy, with simple, at-home care that enhances your pet&apos;s well-being and strengthens the bond you share.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
