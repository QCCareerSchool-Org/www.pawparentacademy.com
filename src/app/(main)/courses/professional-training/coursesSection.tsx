'use client';

import type { FC } from 'react';
import BoostrapAccordion from 'react-bootstrap/Accordion';

import type { Props as CourseProps } from './course';
import { Course } from './course';
import DDCourseImage from './pro-dog-daycare.jpg';
import DGCourseImage from './pro-dog-grooming.jpg';
import DTCourseImage from './pro-dog-training.jpg';

export const CoursesSection: FC = () => (
  <section className="bg-light">
    <div className="container">
      <h2 className="mb-4 text-center">Which Dog Career Is Right for You?</h2>
      <BoostrapAccordion defaultActiveKey="dg">
        {courses.map(c => <Course key={c.code} {...c} />)}
      </BoostrapAccordion>
    </div>
  </section>
);

const courses: CourseProps[] = [
  {
    code: 'dg',
    title: 'Professional Dog Grooming',
    description: (
      <>
        <p>If you enjoy brushing, bathing, trimming, and styling your own dog, professional dog grooming could be the perfect next step.</p>
        <p>QC Pet Studies' <a href="https://www.qcpetstudies.com/certification-courses/dog-grooming">Dog Grooming Course</a> teaches you professional grooming techniques for a wide range of breeds and coat types. You'll develop practical skills through hands-on assignments, receive personalized feedback from experienced groomers, and learn how to approach professional grooming with confidence.</p>
        <a href="https://www.qcpetstudies.com/certification-courses/dog-grooming" className="btn btn-secondary">Explore the Dog Grooming Course</a>
      </>
    ),
    reasons: [
      'Want to turn your love of grooming into a career',
      'Want to work with different breeds and coat types',
      'Are interested in professional and breed-specific styling',
      'Want to groom dogs beyond your own pet',
      'Dream of working in a salon or starting your own grooming business',
    ],
    topics: [
      'Perform professional bathing, brushing, drying, clipping, and trimming for all coat types',
      'Work safely with different coat types and grooming needs',
      'Develop professional grooming and styling techniques for the most popular breeds',
      'Practice your skills with real dogs',
      'Refine your techniques with personalized feedback from pro groomers',
      'Build the skills needed to pursue professional grooming opportunities',
    ],
    imageSrc: DGCourseImage,
  },
  {
    code: 'dt',
    title: 'Professional Dog Training',
    description: (
      <>
        <p>If you find yourself enjoying training your own dog, you may have a natural talent for helping dogs learn.</p>
        <p>QC Pet Studies' <a href="https://www.qcpetstudies.com/certification-courses/dog-training">Dog Training Course</a> can help you turn that interest into professional skills. You'll learn about canine behavior, communication, learning theory, and effective training techniques you can use with dogs at different stages of life.</p>
        <a href="https://www.qcpetstudies.com/certification-courses/dog-training" className="btn btn-secondary">Explore the Dog Training Course</a>
      </>
    ),
    reasons: [
      'Enjoy teaching your dog new behaviors and skills',
      'Want to better understand why dogs behave the way they do',
      'Love helping dogs and their owners succeed together',
      'Want to pursue work as a professional dog trainer',
      'Are interested in eventually offering training services independently',
    ],
    topics: [
      'Understand canine behavior and body language',
      'Apply positive, effective training techniques',
      'Teach essential obedience and practical behaviors',
      'Work with different dogs, personalities, and learning needs',
      'Build your confidence as a professional dog trainer',
    ],
    imageSrc: DTCourseImage,
  },
  {
    code: 'dd',
    title: 'Professional Dog Daycare Provider',
    description: (
      <>
        <p>Maybe your favorite part of having a dog is simply being around them. If you enjoy keeping dogs active, engaged, and happy, a career in dog daycare could be a great fit.</p>
        <p>QC Pet Studies' <a href="https://www.qcpetstudies.com/certification-courses/dog-daycare">Dog Daycare Course</a> teaches you how to provide safe, professional care for dogs in a daycare environment. You'll learn about canine behavior, health and safety, play, enrichment, and the responsibilities involved in caring for multiple dogs.</p>
        <a href="https://www.qcpetstudies.com/certification-courses/dog-daycare" className="btn btn-secondary">Explore the Dog Daycare Course</a>
      </>
    ),
    reasons: [
      'Love spending time with dogs',
      'Want to make a career out of caring for animals',
      'Enjoy keeping dogs active and engaged',
      'Are interested in working in a dog daycare or pet care environment',
      'Dream of eventually starting your own dog daycare or pet care business',
    ],
    topics: [
      'Recognize canine body language and behavior',
      'Create safe and engaging activities for dogs',
      'Manage groups of dogs responsibly',
      'Understand important health and safety practices',
      'Provide professional-quality care in a daycare environment',
    ],
    imageSrc: DDCourseImage,
  },
];
