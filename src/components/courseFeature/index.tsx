import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import { CourseFeatureDataMap } from './data';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription, getCourseName, getCourseSubjects, getCourseUrl, getEnrollmentUrl } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';

interface Props {
  courseCode: CourseCode;
  countryCode: string;
  provinceCode: string | null;
}

export const CourseFeature: FC<Props> = async ({ courseCode, countryCode, provinceCode }) => {
  const data = CourseFeatureDataMap[courseCode];
  const price = await fetchPrice([ courseCode ], countryCode, provinceCode);
  const title = getCourseName(courseCode);
  const subjects = getCourseSubjects(courseCode);

  return (
    <div className="card shadow-lg d-flex">
      <div className="pt-2 px-2">
        <Image src={data.imageSrc} alt={title} sizes="(max-width: 768px) 100vw, 50vw" className="img-fluid rounded" />
      </div>
      <div className="card-body d-flex flex-column justify-content-between gap-3">
        <div>
          <h3>{title}</h3>
          {data.subtitle && <p className="mb-3 mt-3 text-dark"><strong>{data.subtitle}</strong></p>}
          <p>{getCourseDescription(courseCode)}</p>
          {data.greatFor && <p><span className="text-dark"><strong>Great For:</strong></span>{data.greatFor}</p>}
          {subjects && subjects.length > 0 && (
            <>
              <p className="text-dark"><strong>Highlights:</strong></p>
              <ul>{subjects.map((h, i) => <li key={i}>{h}</li>)}</ul>
            </>
          )}
        </div>
        <div className="d-flex flex-column gap-2">
          <Link className="btn btn-outline-secondary w-100" href={getCourseUrl(courseCode)}>Learn More</Link>
          <Link className="btn btn-primary w-100" href={getEnrollmentUrl(courseCode)}>Enroll Now {price.success && `${price.value.currency.symbol}${formatPrice(price.value.cost)}`}</Link>
        </div>
      </div>
    </div>
  );
};
