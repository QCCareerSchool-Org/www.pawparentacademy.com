import type { Metadata } from 'next';

import type { Features } from '../_components/featureGrid';
import { CourseFeatureGrid } from '../_components/featureGrid';
import { CourseFitChecklist } from '../_components/fitChecklist';
import { CourseHero } from '../_components/hero';
import { MoneyBackBanner } from '../_components/moneyBack';
import type { CourseModuleInfo } from '../_components/overview';
import { CourseOverview } from '../_components/overview';
import { CourseVideoCTA } from '../_components/videoCTA';
import heroImage from './_images/hero-nail-trimmingv-2.jpg';
import module1Imgae from './_images/module-1.jpg';
import module2Image from './_images/module-2.jpg';
import module3Image from './_images/module-3.jpg';
import module4Image from './_images/module-bonus.jpg';
import fitChecklistImage from './_images/nail-trimming.jpg';
import type { FAQItem } from '@/components/faqSection';
import { FAQSection } from '@/components/faqSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription, getCourseName, getCourseUrl } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const courseCode: CourseCode = 'nt';
const title = getCourseName(courseCode);
const description = getCourseDescription(courseCode);
const canonical = getCourseUrl(courseCode);

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical },
  openGraph: { title: `${title} | Paw Parent Academy`, description, url: canonical, type: 'website' },
  twitter: { card: 'summary_large_image', title, description },
};

const NailTrimsMadeEasyCoursePage: PageComponent = async ({ searchParams }) => {
  const { countryCode, provinceCode } = await getServerData(searchParams);
  const priceResult = await fetchPrice([ courseCode ], countryCode, provinceCode);

  const price = priceResult.success
    ? priceResult.value.currency.symbol + formatPrice(priceResult.value.plans.full.total)
    : undefined;

  return (
    <>
      <CourseJsonLd courseCode={courseCode} showPrice />
      <CourseHero
        courseCode={courseCode}
        description="Learn How to Cut Your Dog's Nails at Home."
        src={heroImage}
        price={price}
      />
      <CourseFitChecklist
        heading="Did We Nail It?"
        checklist={checklist}
        src={fitChecklistImage}
        alt="Yorkie about to be groomed."
      />
      <CourseFeatureGrid features={features} className="bg-light" />
      <CourseVideoCTA
        videoSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/nail-trimming.mp4"
        posterSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/nail-trimming.jpg"
      />
      <CourseOverview
        heading="Learn How to Cut Your Dog's Nails with Easy-to-Follow Online Lessons"
        body="Master the nail trimming process through bite-sized videos that you can re-watch as often as you like. You\'ll also learn from step-by-step instructions, tip sheets, and curated tool lists inside every module."
        courseCode={courseCode}
        modules={modules}
        price={price}
      />
      <MoneyBackBanner />
      <FAQSection items={faqItems} className="bg-light" />
    </>
  );
};

export default NailTrimsMadeEasyCoursePage;

const checklist = [
  'You\'re the loving pet parent of the cutest dog around.',
  'Keeping your pooch comfortable and free from overgrown nails is important to you.',
  'You want to take the stress out of nail trimming for both you and your pup.',
  'Saving money with fewer trips to the groomer sounds like a real treat.',
  'You want to trim your dog\'s nails safely without cutting the quick.',
  'You\'re ready to give your dog the ultimate pet-icure!',
];

const features: Features = {
  'nails': {
    title: 'Enjoy No-Fear Nail Trims',
    description: "Make cutting your dog's nails a positive experience for you and your pup.",
  },
  'nail clippers': {
    title: 'Avoid Cutting the Quick',
    description: 'Master comfortable, pain-free trims with expert tips from a pro groomer.',
  },
  'dog': {
    title: 'Master Dog Handling',
    description: 'Learn the right way to handle your dog for easy, stress-free nail trims.',
  },
};

const modules: CourseModuleInfo[] = [
  {
    title: 'Module 1',
    subtitle: 'Introduction to Nail Trimming',
    description: 'Discover the ideal nail-care routine and learn how to get your dog comfortable with nail trims through expert tips and handling tricks.',
    image: module1Imgae,
  },
  {
    title: 'Module 2',
    subtitle: 'Preparation',
    description: 'Learn to set up a safe and efficient grooming space, plus choose the best clippers and tools to cut your dog\'s nails like a pro.',
    image: module2Image,
  },
  {
    title: 'Module 3',
    subtitle: 'Trimming the Nails',
    description: 'Follow step-by-step demos and learn professional techniques to ensure top-notch nail health with every trim.',
    image: module3Image,
  },
  {
    title: 'Bonus Content',
    subtitle: 'Downloadable Guides',
    description: 'Gain confidence with three bonus guides covering dog handling techniques, essential tools and equipment, and a step-by-step walkthrough of the nail trimming process.',
    image: module4Image,
  },
];

const faqItems: FAQItem[] = [
  {
    question: 'Which breeds is this course suitable for?',
    answer: 'This course is perfect for all dog breeds and sizes! You\'ll learn how to cut black nails, brown nails and clear nails to the perfect length.',
  },
  {
    question: 'What tools do I need to cut my dog\'s nails at home?',
    answer: 'To safely and effectively cut your dog\'s nails at home, you\'ll simply need dog nail clippers and styptic powder. You may choose to invest in additional tools and equipment, such as a nail grinder and grooming table—but that\'s entirely up to you!',
  },
  {
    question: 'How often should I trim my dog\'s nails?',
    answer: 'Trim your dog\'s nails every week to prevent discomfort and overgrown nails. Frequent nail trimming allows you to make smaller cuts, which will be more comfortable for your pet!',
  },
  {
    question: 'How short should I cut my dog\'s nails?',
    answer: 'To encourage healthy nail growth and avoid overgrown nails, cut your dog\'s nail as close to the quick (the sensitive nerve inside the nail) as possible without cutting the quick. The nails shouldn\'t touch the floor when your dog is standing.',
  },
  {
    question: 'My dog hates having his nails trimmed. Will this course help?',
    answer: 'Absolutely! Our goal is to make nail trims easy and stress-free for both you and your dog. This course will show you the best techniques to trim your dog\'s nails comfortably and safely to make the experience more enjoyagble for your pet. You\'ll also learn dog handling methods and training tips that will help your dog feel at ease with the nail trimming process.',
  },
  {
    question: 'Do I need prior experience?',
    answer: 'Not at all! You can learn how to cut your dog\'s nails with no prior experience. There will be no complicated terminology or techniques skipped over—plus you\'ll be able to watch each technique as often as you like.',
  },
];
