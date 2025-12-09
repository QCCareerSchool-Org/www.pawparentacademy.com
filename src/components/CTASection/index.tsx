import Link from 'next/link';
import styles from './CTASection.module.scss';

export default function CTASection(){
  return (
    <section className={styles.cta} aria-labelledby="cta-heading">
      <div className={styles.sizer}>
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h3 id="cta-heading" className="h3 text-white mb-3">Are You Ready to Start Grooming Your Own Dog?</h3>
              <p className="text-white">Gain the skills and confidence to groom your dog at home while keeping your fur baby safe, happy, and looking their best!</p>
              <Link href="/courses" className="btn-pill-primary mb-4">
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}