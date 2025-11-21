import React from 'react';
import CoursesHero from '@/components/CoursesHero';
import CoursesGrid from '@/components/CoursesGrid';
import PupPlaybooksHero from '@/components/PupPlaybooksHero';
import CourseFeature from '@/components/CourseFeature';
import { courses } from './courses';

export default function CoursesPage() {
  return (
    <>
      <CoursesHero />

      <section className="py-4 bg-light">
        <div className="container">
          <CoursesGrid courses={courses} />
        </div>
      </section>

      {/* Pup Playbooks section (hero + single feature) */}
      <PupPlaybooksHero />

      {/* Pup Playbooks feature row: two cards */}
      <section className="py-4 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <CourseFeature
              title="Nail Trimming Made Easy"
              subtitle=""
              description={
                "Safely and confidently trim your dog’s nails to keep them comfortable and healthy. Perfect for all dog owners!"
              }
              highlights={[
                'Step-by-step nail trimming guide',
                'Prevent discomfort and injury',
                'Tools for stress-free trimming',
              ]}
              imageSrc="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2159797494/settings_images/3aa1f3-7d7-e43f-4881-4214ef5ed46_nails-thumb-2.jpg"
              learnHref="/courses/nail-trims-made-easy"
              enrollHref="/resource_redirect/offers/BZSKFNXJ"
              price="$68"
            />

            <CourseFeature
              title="Deshedding Mastery"
              subtitle=""
              description={
                "Keep shedding under control with expert techniques for all breeds. Learn how to reduce loose fur and maintain a clean, healthy coat year-round."
              }
              highlights={[
                'Effective tools for de-shedding',
                'Techniques for reducing fur buildup',
                'Tips for maintaining coat health',
              ]}
              imageSrc="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2159797494/settings_images/0f8646c-da-7703-8b46-6a4c7746a65f_deshedding--thumb.jpg"
              learnHref="/courses/deshedding-mastery"
              enrollHref="/resource_redirect/offers/FvrF2AjN"
              price="$68"
            />
          </div>
        </div>
      </section>

      {/* Paws-itive single centered feature */}
      <section className="py-4 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <CourseFeature
              title="Paws-itive Grooming"
              subtitle=""
              description={
                "Grooming can be a paws-itive bonding experience for you and your furry friend! Learn to use positive reinforcement to make grooming fun and stress-free for both of you."
              }
              highlights={[
                'Positive reinforcement',
                "Overcoming your dog's fear of grooming",
                'Making accommodations for your dog',
              ]}
              imageSrc="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2159797494/settings_images/f5448a7-c4fb-12d2-55be-d02f4e14ade_pawsitive-thumb-no-bg.jpg"
              learnHref="/courses/paws-itive-grooming"
              enrollHref="/resource_redirect/offers/VVEgFcZX"
              price="$68"
              noCol={false} // Ensure consistent column structure
            />
          </div>
        </div>
      </section>
    </>
  );
}
