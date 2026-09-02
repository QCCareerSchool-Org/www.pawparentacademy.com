import type { FC } from 'react';
import type { IconType } from 'react-icons';

import styles from './styles.module.scss';

export interface Feature {
  title: string;
  description: string;
  icon: IconType;
}

interface Props {
  heading?: string;
  features: Feature[];
  className?: string;
}

export const CourseFeatureGrid: FC<Props> = props => (
  <section className={props.className}>
    <div className="container">
      {props.heading && (
        <div className="row mb-4">
          <div className="col text-center">
            <h2 className="fw-bold">{props.heading}</h2>
          </div>
        </div>
      )}
      <div className="row justify-content-center g-4">
        {props.features.map(f => {
          return (
            <div className="col-12 col-sm-6 col-lg-3" key={f.title}>
              <div className={`h-100 text-center ${styles.featureCard}`}>
                <div className="d-flex justify-content-center mb-3">
                  <f.icon size={36} />
                </div>
                <h4 className={`fw-semibold ${styles.featureTitle}`}>{f.title}</h4>
                <p className="text-muted mb-0">{f.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
