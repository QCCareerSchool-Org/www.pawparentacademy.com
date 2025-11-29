import Image from 'next/image';
import styles from './MentorSpotlight.module.scss';

interface MentorSpotlightProps {
  name: string;
  title: string;
  description: string[];
  image: string;
  imageAlt: string;
}

export default function MentorSpotlight({ name, title, description, image, imageAlt }: MentorSpotlightProps) {
  return (
    <section className={`${styles.section}`} aria-labelledby="mentor-heading">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-12 col-lg-6">
            <article className={styles.card}>
              <h5 className="subtitle-teal mb-1">Meet Your Grooming Mentor</h5>
              <h2 id="mentor-heading" className="mb-2">
                {name}
              </h2>
              <h3 className="h5 text-muted mb-4">{title}</h3>
              {description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          </div>
          <div className="col-12 col-lg-6">
            <div className={styles.imageWrap}>
              <Image src={image} alt={imageAlt} width={720} height={640} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
