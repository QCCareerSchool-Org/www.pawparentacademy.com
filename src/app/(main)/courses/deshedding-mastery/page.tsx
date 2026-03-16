import type { Metadata } from 'next';

import type { Features } from '../_components/featureGrid';
import { CourseFeatureGrid } from '../_components/featureGrid';
import { CourseFinalCTA } from '../_components/finalCTA';
import { CourseFitChecklist } from '../_components/fitChecklist';
import { CourseHero } from '../_components/hero';
import { CourseMascotSpotlight } from '../_components/mascotSpotlight';
import { MoneyBackBanner } from '../_components/moneyBack';
import type { CourseModuleInfo } from '../_components/overview';
import { CourseOverview } from '../_components/overview';
import { CourseVideoCTA } from '../_components/videoCTA';
import finalBackground from './_images/finalBackground.jpg';
import heroImage from './_images/hero-de-shedding-no-bg.jpg';
import module1Image from './_images/module-1.jpg';
import module2Image from './_images/module-2.jpg';
import bonusModuleImage from './_images/modules-bonus.jpg';
import fitChecklistImge from './_images/Ollie deshed.jpg';
import OlliePupStar from './_images/ollie-pup-star.jpg';
import type { PageComponent } from '@/app/serverComponent';
import { EmailLink } from '@/components/emailLink';
import type { FAQItem } from '@/components/faqSection';
import { FAQSection } from '@/components/faqSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription, getCourseName, getCourseUrl } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';
import { getServerData } from '@/lib/getServerData';

const courseCode: CourseCode = 'dm';
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

const DesheddingMasteryCoursePage: PageComponent = async ({ searchParams }) => {
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
        description="Learn How to Deshed Your Aussie, Retriever, or Other Double-Coated Dog at Home."
        src={heroImage}
        price={price}
      />
      <CourseFitChecklist
        checklist={checklist}
        src={fitChecklistImge}
        alt="Grooming expert Nadia Bongelli brushing an Australian Shepherd."
      />
      <CourseFeatureGrid features={features} className="bg-light" />
      <CourseMascotSpotlight
        pupName="Ollie the Australian Shepherd"
        bullets={pupBullets}
        src={OlliePupStar}
        alt="Ollie the Australian Shepherd posing for the Deshedding Mastery course."
      />
      <CourseVideoCTA
        description="Take a quick look inside the Deshedding Mastery lessons."
        videoSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/deshedding.mp4"
        posterSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/deshedding.jpg"
      />
      <CourseOverview
        heading="Learn How to Deshed Your Dog with Easy-to-Follow Online Lessons"
        body="The deshedding process is broken down into short videos that you can re-watch as often as you like. You'll also enjoy helpful tip sheets including a brushing guide and tool list!"
        courseCode={courseCode}
        modules={modules}
        price={price}
      />
      <MoneyBackBanner />
      <FAQSection items={faqItems} className="bg-light" />
      <CourseFinalCTA
        courseCode={courseCode}
        eyebrow="14 DAY MONEY-BACK GUARANTEE"
        heading="Tired of Dog Hair? Deshed Like a Pro!"
        description="Enroll now to keep shedding under control with step-by-step lessons and printable guides."
        backgroundImage={finalBackground}
      />
    </>
  );
};

const checklist = [
  'You have an Aussie, Golden Retriever, Bernese Mountain Dog or other pup with a thick double coat.',
  'Making sure your dog\'s coat stays healthy and mat-free is important to you.',
  'You want to prevent hot spots and other skin irritations that can come with a thick, tangled coat.',
  'Keeping your pup\'s shedding under control without constantly reaching for the vacuum sounds like a dream come true.',
  'You\'re excited to spend more quality time with your dog while learning a new skill.',
  'You want to be your dog\'s #1 groomer!',
];

const features: Features = {
  coat: {
    title: 'Maintain a Healthy Coat',
    description: 'Prevent mats, knots, and tangles for a healthy finish.',
  },
  brush: {
    title: 'Manage Shedding',
    description: 'Learn the best ways to reduce shedding and keep hair off the couch.',
  },
  dog: {
    title: 'Build a Routine',
    description: 'Find the perfect brushing routine so your pet looks and feels great.',
  },
};

const pupBullets = [
  'Enjoys a good ear rub',
  'Always is a \'happy boy\'',
  'Loves to play with his friends',
];

const modules: CourseModuleInfo[] = [
  {
    title: 'Module 1',
    subtitle: 'Introduction to Deshedding',
    description: "Discover why deshedding is crucial for your dog's coat and skin health. Then, learn how to set up an ideal grooming station at home.",
    image: module1Image,
  },
  {
    title: 'Module 2',
    subtitle: 'The Deshedding Process',
    description: 'Find out the most effective tools and techniques to thoroughly deshed your pup\'s thick double coat and prevent matting.',
    image: module2Image,
  },
  {
    title: 'Bonus Content',
    subtitle: 'Downloadable Guides',
    description: 'Say goodbye to hair EVERYWHERE! Enjoy bonus downloadables that outline what you need to get the job done and the entire deshedding process.',
    image: bonusModuleImage,
  },
];

const faqItems: FAQItem[] = [
  {
    question: 'Why is my dog shedding so much?',
    answer: 'Regular shedding is your dog\'s natural way of getting rid of old or damaged fur. It helps regulate body temperature, keep the coat healthy, and adapt to seasonal changes.',
  },
  {
    question: 'Which breeds is this course suitable for?',
    answer: 'This course is perfect for dogs with thick double coats such as Australian Shepherds, Golden Retrievers, Bernese Mountain Dogs, and similar breeds.',
  },
  {
    question: 'How much will it cost to buy the equipment to groom my dog?',
    answer: 'That\'s up to you! A small selection of brushes and deshedding tools is all you need to master the process. You may choose to invest in a grooming table, but even a basic toolkit will save money versus frequent salon visits.',
  },
  {
    question: 'My dog is terrified to go to the groomers. Will this course help?',
    answer: 'Yes. Grooming at home lets you control the environment so your dog stays comfortable. You can move at their pace, add breaks, and keep the experience positive with the tips shared in the course.',
  },
  {
    question: 'How can I determine if I have sufficient physical strength to groom my own dog?',
    answer: 'You will want solid grip strength for brush handling and to feel comfortable standing for longer sessions. The course shares ergonomic setup advice so you and your pup stay comfortable.',
  },
  {
    question: 'I have another dog with a different coat type. Will this course teach me everything I need to know?',
    answer: <>Paw Parent Academy has a unique course for each coat type. Email <EmailLink /> for guidance and bundle discounts if you enroll in more than one course.</>,
  },
];

export default DesheddingMasteryCoursePage;
