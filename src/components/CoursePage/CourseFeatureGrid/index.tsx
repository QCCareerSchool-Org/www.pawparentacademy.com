import Image from 'next/image';
import styles from './styles.module.scss';
import type { StaticImageData } from 'next/image';

export interface FeatureHighlight {
  iconSrc: string | StaticImageData;
  title: string;
  description: string;
}

interface CourseFeatureGridProps {
  heading?: string;
  features: FeatureHighlight[];
  className?: string;
}

export default function CourseFeatureGrid({ heading, features, className }: CourseFeatureGridProps) {
  return (
    <section className={className}>
      <div className="container py-5">
        {heading && (
          <div className="row mb-4">
            <div className="col text-center">
              <h2 className="fw-bold">{heading}</h2>
            </div>
          </div>
        )}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4">
          {features.map((feature) => (
            <div className="col" key={feature.title}>
              <div className={`h-100 text-center p-4 ${styles.featureCard}`}>
                <div className="d-flex justify-content-center mb-3">
                  <Image src={feature.iconSrc} alt={feature.title} width={60} height={60} />
                </div>
                <h4 className={`fw-semibold mt-4 ${styles.featureTitle}`}>{feature.title}</h4>
                <p className="text-muted mb-0">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
