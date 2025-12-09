import type { Metadata } from 'next';
import CourseHero from '@/components/CoursePage/CourseHero';
import CourseFitChecklist from '@/components/CoursePage/CourseFitChecklist';
import CourseFeatureGrid from '@/components/CoursePage/CourseFeatureGrid';
import CourseMascotSpotlight from '@/components/CoursePage/CourseMascotSpotlight';
import CourseVideoCTA from '@/components/CoursePage/CourseVideoCTA';
import CourseOverviewIntro from '@/components/CoursePage/CourseOverviewIntro';
import CourseModulesCarousel from '@/components/CoursePage/CourseModulesCarousel';
import MoneyBackBanner from '@/components/CoursePage/MoneyBackBanner';
import CourseFAQ from '@/components/CoursePage/CourseFAQ';
import CourseFinalCTA from '@/components/CoursePage/CourseFinalCTA';
import {
  courseMetadata,
  heroContent,
  fitChecklistContent,
  featureHighlights,
  mascotSpotlight,
  videoSample,
  overviewContent,
  modules,
  faqItems,
  finalCtaContent,
  videoSchema,
  courseSchema,
} from './course-content';

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
  const payloads = [videoSchema, courseSchema];
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
