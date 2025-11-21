import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';

export interface CourseFeatureProps {
  title: string;
  subtitle?: string;
  description?: string;
  highlights?: string[];
  imageSrc: string;
  learnHref?: string;
  enrollHref?: string;
  price?: string;
  noCol?: boolean;
  greatFor?: string; // Add a new optional property for "Great For"
}

export default function CourseFeature({
  title,
  subtitle,
  description,
  highlights = [],
  imageSrc,
  learnHref = '#',
  enrollHref,
  price,
  noCol = false,
  greatFor,
}: CourseFeatureProps) {
  const card = (
    <div className={`p-3 ${styles.block} bg-white h-100`}>
      <div className={styles.mediaWrap}>
        <Image
          src={imageSrc}
          alt={title}
          width={600}
          height={360}
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="mt-4">
        <h3><strong>{title}</strong></h3>
        {subtitle && <p className="mb-3 mt-3 text-dark"><strong>{subtitle}</strong></p>}
        {description && <p>{description}</p>}
        {greatFor && (
          <p>
            <span className="text-dark"><strong>Great For:</strong></span>
            <span> {greatFor}</span>
          </p>
        )}
        {highlights.length > 0 && (
          <>
            <p className='text-dark'><strong>Highlights:</strong></p> {/* Add subheader before highlights */}
            <ul>
              {highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-3 d-flex align-items-center gap-2">
          <a className="btn btn-info" href={enrollHref ?? learnHref}>
            {enrollHref ? `Enroll Now${price ? ` (${price})` : ''}` : 'Learn More'}
          </a>
          <a className="btn btn-link" href={learnHref}>
            LEARN MORE
          </a>
        </div>
      </div>
    </div>
  );

  if (noCol) {
    return card;
  }

  return <div className="col-12 col-md-6 mb-4">{card}</div>;
}
