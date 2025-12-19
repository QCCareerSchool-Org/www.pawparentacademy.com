import type { Metadata } from 'next';

import { courses } from './courses';
import CoursesHero from './CoursesHero';
import desheddingThumb from './images/deshedding--thumb.jpg';
import nailsThumb from './images/nails-thumb-2.jpg';
import pawsitiveThumb from './images/pawsitive-thumb-no-bg.jpg';
import PupPlaybooksHero from './PupPlaybooksHero';
import CourseFeature from '@/components/CourseFeature';
import CoursesGrid from '@/components/CoursesGrid';

export const metadata: Metadata = {
  title: 'Dog Grooming Courses | Paw Parent Academy',
  description: 'Browse online dog grooming courses for every coat type. Learn pro techniques, save on grooming bills, and bond with your pup at home.',
  alternates: { canonical: 'https://www.pawparentacademy.com/courses' },
};

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

      {/* Pup Playbooks course cards */}
      <section className="py-4 bg-white">
        <div className="container">
          <div className="row justify-content-center">
            <CourseFeature
              title="Nail Trims Made Easy"
              subtitle="Clipper + Grinder Confidence"
              description="Learn calm routines, tool handling, and safety techniques so every nail trim—clipper or grinder—feels stress-free for you and your pup."
              highlights={[
                'Desensitization plans for anxious dogs',
                'Clipper and grinder demos for every paw size',
                'Tool checklists, troubleshooting, and pro tips',
              ]}
              imageSrc={nailsThumb}
              greatFor="All breeds and nervous pups who need gentle nail care"
              learnHref="/courses/nail-trims-made-easy"
              enrollHref="https://enroll.pawparentacademy.com/offers/nail-trims-made-easy/checkout"
              price="$68"
            />

            <CourseFeature
              title="Deshedding Mastery"
              subtitle=""
              description="Keep shedding under control with expert techniques for all breeds. Learn how to reduce loose fur and maintain a clean, healthy coat year-round."
              highlights={[
                'Effective tools for de-shedding',
                'Techniques for reducing fur buildup',
                'Tips for maintaining coat health',
              ]}
              imageSrc={desheddingThumb}
              greatFor="Heavy shedding double-coated breeds"
              learnHref="/courses/deshedding-mastery"
              enrollHref="https://enroll.pawparentacademy.com/offers/deshedding-mastery/checkout"
              price="$68"
            />
          </div>

          <div className="row justify-content-center mt-3">
            <CourseFeature
              title="Paws-itive Grooming"
              subtitle=""
              description="Grooming can be a paws-itive bonding experience for you and your furry friend! Learn to use positive reinforcement to make grooming fun and stress-free for both of you."
              highlights={[
                'Positive reinforcement',
                "Overcoming your dog's fear of grooming",
                'Making accommodations for your dog',
              ]}
              imageSrc={pawsitiveThumb}
              greatFor="Every pup and paw parent"
              learnHref="/courses/paws-itive-grooming"
              enrollHref="https://enroll.pawparentacademy.com/offers/paws-itive-grooming/checkout"
              price="$68"
            />
          </div>
        </div>
      </section>
    </>
  );
}
