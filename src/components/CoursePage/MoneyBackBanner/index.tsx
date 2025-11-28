import Image from 'next/image';
import styles from './styles.module.scss';
import shieldIcon from './shield-icon.jpg';

const EYEBROW = '14 DAY MONEY-BACK GUARANTEE';
const HEADING = 'Money-Back Guarantee';
const BODY = 'At Paw Parent Academy, we stand behind our high-quality dog grooming courses. Within 14 days of enrolling, you are eligible for a full refund. All you need to do is go through the course and contact the school to let us know why it’s not a good fit for you.';

export default function MoneyBackBanner() {
  return (
    <section className={styles.wrapper}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className={`col-lg-8 text-center ${styles.content}`}>
            <Image
              src={shieldIcon}
              alt="Shield icon representing our money-back guarantee"
              className={styles.icon}
              width={56}
              height={56}
              priority
            />
            <p className={`text-uppercase fw-semibold mb-2 mt-5 ${styles.eyebrow}`}>{EYEBROW}</p>
            <h3 className="mb-3 text-white mt-3">{HEADING}</h3>
            <p className="mb-0 text-white">{BODY}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
