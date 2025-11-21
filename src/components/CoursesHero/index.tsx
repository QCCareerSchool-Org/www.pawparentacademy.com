import React from 'react';
import styles from './styles.module.scss';

export default function CoursesHero() {
  return (
    <section className={`py-5 ${styles.hero}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-md-9 text-center">
            <h1 className="display-4">Dog Grooming Courses</h1>
            <h2 className={`mt-2 ${styles.subtitle}`}>Designed for Pet Parents</h2>
            <p className="lead mt-3">
              Our expert-led online dog grooming courses help pet parents confidently groom their pups at home. Choose the course that matches your pup&apos;s coat and master a stress-free grooming routine.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
