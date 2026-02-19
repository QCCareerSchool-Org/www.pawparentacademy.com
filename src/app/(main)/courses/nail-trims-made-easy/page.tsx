import type { Metadata } from 'next';

import {
  courseMetadata,
  courseSchema,
  faqItems,
  featureHighlights,
  finalCtaContent,
  fitChecklistContent,
  heroContent,
  modules,
  overviewContent,
  videoSample,
  videoSchema,
} from './course-content';
import CourseFAQ from '@/components/coursePage/CourseFAQ';
import CourseFeatureGrid from '@/components/coursePage/CourseFeatureGrid';
import CourseFinalCTA from '@/components/coursePage/CourseFinalCTA';
import CourseFitChecklist from '@/components/coursePage/CourseFitChecklist';
import CourseHero from '@/components/coursePage/CourseHero';
import CourseModulesCarousel from '@/components/coursePage/CourseModulesCarousel';
import CourseOverviewIntro from '@/components/coursePage/CourseOverviewIntro';
import CourseVideoCTA from '@/components/coursePage/CourseVideoCTA';
import MoneyBackBanner from '@/components/coursePage/MoneyBackBanner';

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

export default function NailTrimsMadeEasyCoursePage() {
  return (
    <>
      <CourseHero {...heroContent} />
      <CourseFitChecklist {...fitChecklistContent} className="bg-white" />
      <CourseFeatureGrid features={featureHighlights} className="bg-light" />
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
