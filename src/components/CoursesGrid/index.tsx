import React from 'react';
import CourseFeature, { CourseFeatureProps } from '../CourseFeature';
import styles from './styles.module.scss';

export interface CoursesGridProps {
  courses: CourseFeatureProps[];
}

export default function CoursesGrid({ courses }: CoursesGridProps) {
  return (
    <div className={`row ${styles.grid}` }>
      {courses.map((c, i) => (
        <CourseFeature key={i} {...c} />
      ))}
    </div>
  );
}
