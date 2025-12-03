import styles from './HeroSection.module.scss';
import HeroLeadMagnetForm, { type HeroLeadMagnetCopy } from './HeroLeadMagnetForm.client';

interface HeroSectionProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  learnList: string[];
  reasonsList: string[];
  formCopy: HeroLeadMagnetCopy;
}

export default function HeroSection({
  eyebrow,
  title,
  subtitle,
  description,
  learnList,
  reasonsList,
  formCopy,
}: HeroSectionProps) {
  return (
    <section className={styles.hero} aria-labelledby="nail-hero-heading">
      <div className={styles.overlay} />
      <div className={`container ${styles.inner}`}>
        <div className="row g-5 align-items-start">
          <div className="col-12 col-lg-5">
            <div id="nail-playbook" className={styles.anchor} />
            <HeroLeadMagnetForm copy={formCopy} />
          </div>
          <div className="col-12 col-lg-7">
            <p className="subtitle-teal text-uppercase mb-3">{eyebrow}</p>
            <h1 id="nail-hero-heading" className="display-5 fw-semibold mb-3">
              {title}
            </h1>
            <h2 className="h4 fw-semibold mb-3">{subtitle}</h2>
            <p className="mb-5">{description}</p>
            <div className={`row g-5 ${styles.listWrap}`}>
              <div className="col-sm-6">
                <h3 className="h6 text-uppercase mb-3"><strong>What you&apos;ll learn</strong></h3>
                <ul>
                  {learnList.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="col-sm-6">
                <h3 className="h6 text-uppercase mb-3"><strong>Why join?</strong></h3>
                <ul>
                  {reasonsList.map((item) => (
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
}
