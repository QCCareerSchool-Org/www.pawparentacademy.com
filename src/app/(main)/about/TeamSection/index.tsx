import Image from 'next/image';

import nadiaImg from './nadia-graphic.jpg';
import styles from './TeamSection.module.scss';

export default function TeamSection() {
  return (
    <section className={styles.team} aria-labelledby="team-heading">
      <div className="container container--full">
        <div className="row align-items-center justify-content-center px-3 px-md-0">
          <div className="col-12 col-md-5 mb-4 mb-md-0">
            <Image src={nadiaImg} alt="Grooming expert, Nadia Bongelli, with pug." className="img-fluid" width={800} height={600} />
          </div>

          <div className="col-12 col-md-6 text-center text-md-start">
            <h2 id="team-heading">Expert-Led Education</h2>
            <h3 className="subtitle-teal">Nadia Bongelli</h3>
            <p>Your course instructor, Nadia Bongelli, is a highly acclaimed industry leader and Nationally Certified Master Groomer. Recognized for her exceptional talent, she has been ranked as Canada's #1 competitive groomer since 2018, earned the prestigious Barkleigh Honors Groomer of the Year award in 2024, and achieved second place at the 2024 World Grooming Championships in Belgium.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
