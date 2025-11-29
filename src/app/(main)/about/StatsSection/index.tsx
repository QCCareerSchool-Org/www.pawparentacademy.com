import Image from 'next/image';
import styles from './StatsSection.module.scss';
import lockImg from './lock-icon.jpg';
import shieldImg from './shield-icon.jpg';

interface StatsSectionProps {
  className?: string;
}

export default function StatsSection({ className }: StatsSectionProps = {}) {
  const sectionClass = ['py-5', className].filter(Boolean).join(' ').trim();

  return (
    <section className={sectionClass}>
      <div className="container mt-5 mb-5">
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <article className={`${styles.card} ${styles.pink} h-100 d-flex flex-column align-items-center justify-content-start`}>
              <Image
                src={shieldImg}
                alt="Money-back guarantee"
                width={64}
                height={64}
                style={{ objectFit: 'contain' }}
                className={styles.icon}
              />
              <h3 className="h3 text-center mt-3">Money-Back Guarantee</h3>
              <p className="mt-2 text-center">
                At Paw Parent Academy, we stand behind our high-quality dog grooming courses. Within 14 days of enrolling, you are eligible for a full refund. All you need to do is go through the course and contact the school to let us know why it’s not a good fit for you.
              </p>
            </article>
          </div>

          <div className="col-12 col-md-6">
            <article className={`${styles.card} ${styles.navy} h-100 d-flex flex-column align-items-center justify-content-start`}>
              <Image
                src={lockImg}
                alt="Lifetime access"
                width={54}
                height={54}
                style={{ objectFit: 'contain' }}
                className={`${styles.icon} mt-2`}
              />
              <h3 className="h3 text-center mt-3">Lifetime Access</h3>
              <p className="mt-2 text-center">
                With lifetime access to Paw Parent Academy’s dog grooming courses, you can learn at your own pace and gain confidence step by step. You’ll always have expert guidance at your fingertips, so you can revisit lessons whenever you need a refresher!
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
