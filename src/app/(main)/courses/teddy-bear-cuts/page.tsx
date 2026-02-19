import type { Metadata } from 'next';

import {
  courseMetadata,
  courseSchema,
  faqItems,
  featureHighlights,
  fitChecklistContent,
  heroContent,
  mascotSpotlight,
  modules,
  overviewContent,
  videoSample,
  videoSchema,
} from './course-content';
import CourseFAQ from '@/components/coursePage/CourseFAQ';
import CourseFeatureGrid from '@/components/coursePage/CourseFeatureGrid';
import CourseFitChecklist from '@/components/coursePage/CourseFitChecklist';
import CourseHero from '@/components/coursePage/CourseHero';
import CourseMascotSpotlight from '@/components/coursePage/CourseMascotSpotlight';
import CourseModulesCarousel from '@/components/coursePage/CourseModulesCarousel';
import CourseOverviewIntro from '@/components/coursePage/CourseOverviewIntro';
import CourseVideoCTA from '@/components/coursePage/CourseVideoCTA';
import MoneyBackBanner from '@/components/coursePage/MoneyBackBanner';
import { LeadMagnetSection } from '@/components/leadMagnetSection';

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

export default function TeddyBearCutsCoursePage() {
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
      <LeadMagnetSection />
      <CourseStructuredData />
    </>
  );
}
