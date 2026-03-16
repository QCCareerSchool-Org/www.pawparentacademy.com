import type { FC } from 'react';
import type { Course, WithContext } from 'schema-dts';

import { withSuspense } from '../withSuspense';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription, getCourseName, getCourseSubjects, getCourseUrl, getCourseWorkload } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { pawParentAcademyEducationalOrganization } from '@/pawParentAcademyEducationalOrganization';

interface Props {
  courseCode: CourseCode;
  id?: string;
  providerId?: string;
  showPrice?: boolean;
}

const CourseJsonLdBase: FC<Props> = async ({ courseCode, id = '#course', providerId, showPrice }) => {
  const jsonLd = await getCourse(courseCode, id, providerId, showPrice);

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export const CourseJsonLd = withSuspense(CourseJsonLdBase);

export const getCourse = async (courseCode: CourseCode, id?: string, providerId?: string, showPrice?: boolean): Promise<WithContext<Course>> => {
  const course: WithContext<Course> = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': id,
    courseCode,
    'url': getCourseUrl(courseCode),
    'name': getCourseName(courseCode),
    'description': getCourseDescription(courseCode),
    'availableLanguage': 'en',
    'teaches': getCourseSubjects(courseCode),
    'hasCourseInstance': {
      '@type': 'CourseInstance',
      'courseMode': 'online',
      'courseWorkload': getCourseWorkload(courseCode),
    },
    'provider': providerId
      ? { '@id': providerId }
      : {
        '@type': 'EducationalOrganization',
        '@id': 'https://www.pawparentacademy.com/#school',
        'url': 'https://www.pawparentacademy.com',
        'name': 'Paw Parent Academy',
        'sameAs': 'sameAs' in pawParentAcademyEducationalOrganization ? pawParentAcademyEducationalOrganization.sameAs : undefined,
      },
  };

  if (showPrice) {
    const price = await fetchPrice([ courseCode ], 'US', 'MD');

    if (price.success) {
      course.offers = {
        '@type': 'Offer',
        'priceCurrency': price.value.currency.code,
        'price': price.value.discountedCost.toFixed(2),
        'url': 'https://enroll.pawparentacademy.com',
        'availability': 'https://schema.org/InStock',
      };
    };

  }

  return course;
};
