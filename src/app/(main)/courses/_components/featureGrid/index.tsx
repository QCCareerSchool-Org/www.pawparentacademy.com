import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import bathe from './images/bathe-icon.png';
import brush from './images/brush-icon.png';
import coat from './images/coat-icon.png';
import curry from './images/curry-icon.png';
import dog from './images/dog-icon.png';
import nailClippers from './images/nail-clippers-icon.png';
import nails from './images/nails-icon.png';
import trims from './images/trims-icon.png';
import styles from './styles.module.scss';

type Icon = 'bathe' | 'brush' | 'coat' | 'curry' | 'dog' | 'nail clippers' | 'nails' | 'trims';

interface FeatureHighlight {
  title: string;
  description: string;
}

export type Features = Partial<Record<Icon, FeatureHighlight>>;

interface Props {
  heading?: string;
  features: Features;
  className?: string;
}

export const CourseFeatureGrid: FC<Props> = props => {
  const keys = Object.keys(props.features) as Icon[];

  return (
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
          {keys.map(key => {
            const value = props.features[key];
            if (!value) {
              return null;
            }
            return (
              <div className="col-12 col-sm-6 col-lg-3" key={value.title}>
                <div className={`h-100 text-center ${styles.featureCard}`}>
                  <div className="d-flex justify-content-center mb-3">
                    <Image src={getIconSrc(key)} alt={value.title} width={60} height={60} />
                  </div>
                  <h4 className={`fw-semibold mt-4 ${styles.featureTitle}`}>{value.title}</h4>
                  <p className="text-muted mb-0">{value.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const getIconSrc = (icon: Icon): StaticImageData => {
  switch (icon) {
    case 'bathe': return bathe;
    case 'brush': return brush;
    case 'coat': return coat;
    case 'curry': return curry;
    case 'dog': return dog;
    case 'nail clippers': return nailClippers;
    case 'nails': return nails;
    case 'trims': return trims;
  }
};
