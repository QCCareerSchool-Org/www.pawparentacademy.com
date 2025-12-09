import React from 'react';
import styles from './styles.module.scss';

export default function CoursesHero() {
  return (
    <section className={`py-5 ${styles.hero}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-11 col-md-9 text-center">
            <h1>Dog Grooming Courses</h1>
            <h2 className="subtitle-teal mt-3">Designed for Pet Parents</h2>
            <p className="mt-3">
              Our expert-led online dog grooming courses help pet parents confidently groom their pups at home. Whether you&apos;re dealing with <strong>mats and tangles</strong>, falling behind on <strong>haircuts</strong>, struggling with <strong>excessive shedding</strong>,  or overcoming challenging <strong>nail trims</strong>, you&apos;ll find step-by-step guidance tailored to your dog&apos;s needs. Just choose the course that matches your pup&apos;s coat, and master a stress-free grooming routine designed for you and your dog. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
