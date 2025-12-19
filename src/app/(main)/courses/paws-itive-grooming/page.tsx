import type { Metadata } from 'next';

import {
  courseMetadata,
  courseSchema,
  faqItems,
  featureHighlights,
  finalCtaContent,
  fitChecklistContent,
  heroContent,
  mascotSpotlight,
  modules,
  overviewContent,
  videoSample,
  videoSchema,
} from './course-content';
import CourseFAQ from '@/components/CoursePage/CourseFAQ';
import CourseFeatureGrid from '@/components/CoursePage/CourseFeatureGrid';
import CourseFinalCTA from '@/components/CoursePage/CourseFinalCTA';
import CourseFitChecklist from '@/components/CoursePage/CourseFitChecklist';
import CourseHero from '@/components/CoursePage/CourseHero';
import CourseMascotSpotlight from '@/components/CoursePage/CourseMascotSpotlight';
import CourseModulesCarousel from '@/components/CoursePage/CourseModulesCarousel';
import CourseOverviewIntro from '@/components/CoursePage/CourseOverviewIntro';
import CourseVideoCTA from '@/components/CoursePage/CourseVideoCTA';
import MoneyBackBanner from '@/components/CoursePage/MoneyBackBanner';

export const metadata: Metadata = {
  title: `${courseMetadata.title} | Paw Parent Academy`,
  description: courseMetadata.description,
  alternates: {
    canonical: courseMetadata.canonicalUrl,
  },
  openGraph: {
    title: `${courseMetadata.title} | Paw Parent Academy`,
    description: courseMetadata.description,
    url: courseMetadata.canonicalUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: courseMetadata.title,
    description: courseMetadata.description,
  },
};

function CourseStructuredData() {
  const payloads = [ videoSchema, courseSchema ];
  return (
    <>
      {payloads.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

export default function PawsitiveGroomingCoursePage() {
  return (
    <>
      <CourseHero {...heroContent} />
      <CourseFitChecklist {...fitChecklistContent} className="bg-white" />
      <CourseFeatureGrid features={featureHighlights} className="bg-light" />
      <CourseMascotSpotlight {...mascotSpotlight} className="bg-white" />
      <CourseVideoCTA {...videoSample} />
      <CourseOverviewIntro {...overviewContent} className="bg-white" />
      <CourseModulesCarousel
        modules={modules}
        enrollHref={heroContent.ctaHref}
        enrollLabel={heroContent.ctaLabel}
      />
      <MoneyBackBanner />
      <CourseFAQ heading="Frequently Asked Questions" items={faqItems} />
      <CourseFinalCTA {...finalCtaContent} />
      <CourseStructuredData />
    </>
  );
}
