import Link from 'next/link';
import styles from './CTASection.module.scss';

export default function CTASection(){
  return (
    <section className={styles.cta} aria-labelledby="cta-heading">
      <div className="sizer">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-8">
              <h2 id="cta-heading" className="h2 text-white">Are You Ready to Start Grooming Your Own Dog?</h2>
              <p className="text-white">Gain the skills and confidence to groom your dog at home while keeping your fur baby safe, happy, and looking their best!</p>
              <Link href="/courses" className="btn btn-lg" role="button"><span className={styles.ctaBtn}>Browse Courses</span></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}