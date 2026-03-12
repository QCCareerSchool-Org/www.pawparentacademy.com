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
import fitChecklistImage from './_images/archer-pawsitive.jpg';
import ctaBackground from './_images/cta-background.jpg';
import heroImage from './_images/hero-pawsitive.jpg';
import module1Image from './_images/module-1.jpg';
import module2Image from './_images/module-2.jpg';
import bonusModuleImage from './_images/module-bonus.jpg';
import archerPupStar from './_images/pup-star-archer.jpg';
import type { PageComponent } from '@/app/serverComponent';
import type { FAQItem } from '@/components/faqSection';
import { FAQSection } from '@/components/faqSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription, getCourseName, getCourseUrl } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';
import { getServerData } from '@/lib/getServerData';

const courseCode: CourseCode = 'pg';
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

const PawsitiveGroomingCoursePage: PageComponent = async ({ searchParams }) => {
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
        description="Learn How to Make Grooming a Positive Experience for You and Your Dog."
        src={heroImage}
        price={price}
      />
      <CourseFitChecklist
        checklist={checklist}
        src={fitChecklistImage}
        alt="Groomer Nadia Bongelli harnessing an elderly dog in a sling."
      />
      <CourseFeatureGrid features={features} className="bg-light" />
      <CourseMascotSpotlight
        pupName="Archer the Bedlington Terrier"
        bullets={pupBullets}
        src={archerPupStar}
        alt="Expert Groomer Nadia Bongelli grooming Archer the Bedlington terrier."
      />
      <CourseVideoCTA
        description="Take a peek at the pup-friendly behavior tips included in every lesson."
        videoSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/pawsitive-grooming.mp4"
        posterSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/pawsitive-grooming.jpg"
      />
      <CourseOverview
        heading="Learn How to Make Grooming Fun with Easy-to-Follow Online Lessons"
        body="Follow along with short videos that you can re-watch as often as you like. Each module also includes helpful instructions, tip sheets and training guides."
        courseCode={courseCode}
        modules={modules}
        price={price}
      />
      <MoneyBackBanner />
      <FAQSection items={faqItems} className="bg-light" />
      <CourseFinalCTA
        courseCode={courseCode}
        eyebrow="14-DAY MONEY-BACK GUARANTEE"
        heading="Make Grooming Easier for Your Dog!"
        description="Turn every grooming session into a bonding moment with step-by-step lessons and pup-approved behavior strategies."
        backgroundImage={ctaBackground}
      />
    </>
  );
};

export default PawsitiveGroomingCoursePage;

const checklist = [
  'You\'re a proud paw parent to an adorable pooch.',
  'You know that grooming is key to your pet\'s wellbeing and want them to feel at ease throughout the process.',
  'Your furry friend gets nervous during essential grooming tasks and you want to help.',
  'You\'re eager to teach your puppy to be comfortable with grooming right from the start.',
  'Visits to the vet and groomer feel stressful for both you and your pup.',
  'Your anxious or senior pup needs extra care to make grooming easier.',
  'You want grooming to be a positive bonding experience for you and your dog.',
];

const features: Features = {
  'nails': {
    title: 'Make Positive Connections',
    description: 'Help your pup learn to feel good about essential grooming tasks.',
  },
  'nail clippers': {
    title: 'Overcome Grooming Fears',
    description: 'Teach your dog that nail trims and grooming are nothing to fear.',
  },
  'dog': {
    title: 'Customize the Groom',
    description: "Learn to customize the grooming process for your pet's unique needs.",
  },
};

const pupBullets = [
  'A playful puppy learning to love grooming',
  'Proud of his white, fluffy, cloud-like coat',
  'Working hard to compete in grooming shows with his mom, award-winning groomer Nadia Bongelli',
];

const modules: CourseModuleInfo[] = [
  {
    title: 'Module 1',
    subtitle: 'Introduction to Positive Grooming',
    description:
      'Find out what your dog is trying to tell you! Learn to read communication signals, ease their stress, and make grooming more comfortable.',
    image: module1Image,
  },
  {
    title: 'Module 2',
    subtitle: 'Creating a Paws-itive Experience',
    description:
      'Use positive reinforcement to help your dog feel safe and confident with pro handling tips and training exercises.',
    image: module2Image,
  },
  {
    title: 'Bonus Content',
    subtitle: 'Downloadable Content',
    description:
      "You'll quickly gain confidence and grooom your dog with ease thanks to bonus guides that teach you how to make positive associations and overcome any negative ones.",
    image: bonusModuleImage,
  },
];

const faqItems: FAQItem[] = [
  {
    question: 'Do I need prior experience in dog behavior training?',
    answer: 'Not at all! This course is designed for dog parents looking to learn practical behavior tips that make grooming easier for both parent and pup.',
  },
  {
    question: 'Which breeds is this course suitable for?',
    answer: 'This course is perfect for all dogs!',
  },
  {
    question: 'How much will it cost to buy the equipment to groom my dog?',
    answer: 'All you need to create a positive grooming experience for your dog is their favorite treats!',
  },
  {
    question: 'My dog is terrified to go to the groomers. Will this course help?',
    answer: 'Grooming your dog may be the perfect solution for you if your dog is uncomfortable going to the groomer. You\'ll be able to control the environment so your dog feels comfortable and you can give your dog lots of breaks if needed. The course will walk you through all the steps to get your dog comfortable with the grooming process.',
  },
  {
    question: 'How can I determine if I have sufficient physical strength to groom my own dog?',
    answer: 'You\'ll want to have good grip strength for tool handling and be comfortable standing for longer periods. You\'ll learn great tips in the course to set up an ergonomic and comfortable grooming station for you and your pet.',
  },
];
