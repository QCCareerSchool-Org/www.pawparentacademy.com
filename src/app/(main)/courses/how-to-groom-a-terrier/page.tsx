import type { Metadata } from 'next';

import type { Features } from '../_components/featureGrid';
import { CourseFeatureGrid } from '../_components/featureGrid';
import { CourseFitChecklist } from '../_components/fitChecklist';
import { CourseHero } from '../_components/hero';
import { CourseMascotSpotlight } from '../_components/mascotSpotlight';
import { MoneyBackBanner } from '../_components/moneyBack';
import type { CourseModuleInfo } from '../_components/overview';
import { CourseOverview } from '../_components/overview';
import { CourseVideoCTA } from '../_components/videoCTA';
import heroImage from './_images/hero-terrier-no-bg.jpg';
import module1 from './_images/modules-1-2.jpg';
import module2 from './_images/modules-2-2.jpg';
import module3 from './_images/modules-3-2.jpg';
import module4 from './_images/modules-4.jpg';
import module5 from './_images/modules-5-2.jpg';
import module6 from './_images/modules-6.jpg';
import module7 from './_images/modules-bonus-7.jpg';
import roxyPupStar from './_images/terrier-pup-star.jpg';
import fitChecklistImage from './_images/terrier.jpg';
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

const courseCode: CourseCode = 'tr';
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

const HowToGroomATerrierCoursePage: PageComponent = async ({ searchParams }) => {
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
        description="Learn How to Groom a Cairn Terrier or Border Terrier at Home."
        src={heroImage}
        price={price}
      />
      <CourseFitChecklist
        checklist={checklist}
        src={fitChecklistImage}
        alt="Grooming expert, Nadia Bongelli, demonstrating how to groom a border terrier."
      />
      <CourseFeatureGrid features={features} className="bg-light" />
      <CourseMascotSpotlight
        pupName="Roxy the Border Terrier"
        bullets={pupBullets}
        src={roxyPupStar}
        alt="Roxy the border terrier"
      />
      <CourseVideoCTA
        description="Peek inside the Terrier lessons with a real clip pulled from the course."
        videoSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/terrier.mp4"
        posterSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/terrier.jpg"
      />
      <CourseOverview
        heading="Learn How to Groom a Terrier with Easy-to-Follow Online Lessons"
        body="The grooming process is broken down into short videos that you can re-watch as often as you like. This course also includes helpful grooming instructions, tip sheets, and tool guides!"
        courseCode={courseCode}
        modules={modules}
        price={price}
      />
      <MoneyBackBanner />
      <FAQSection items={faqItems} className="bg-light" />
    </>
  );
};

const checklist = [
  'You are the loving paw parent of a Cairn Terrier, Border Terrier or other wire-coated pup.',
  'Looking after your terrier\'s health and well-being is your top priority.',
  'You want to protect your dog\'s wire hair with proper grooming.',
  'You\'re ready to tackle handstripping so your dog\'s wire coat always looks great.',
  'More bonding time with your fur baby is your idea of fun.',
  'You want to prevent issues like a blown out coat and hot spots.',
  "You're ready to be your terrier's go-to groomer!",
];

const features: Features = {
  nails: {
    title: 'Master No-Fear Nail Trims',
    description: 'Give your pup a stress-free nail trim at home using pro techniques.',
  },
  coat: {
    title: 'Maintain a Healthy Coat',
    description: 'Prevent mats and blown-out coat through handstripping and brushing.',
  },
  bathe: {
    title: 'Bathe and Dry Like a Pro',
    description: 'Learn professional techniques to keep a wire coat clean and fresh.',
  },
  trims: {
    title: 'Finishing Touches',
    description: "Keep your terrier's paws tidy and coat shining for a polished look.",
  },
};

const pupBullets = [
  'Always greets you with a tail-wag.',
  'Feels like a brand-new pup with a freshly handstripped coat.',
  'Loves a neatly groomed face to showcase her smile.',
];

const modules: CourseModuleInfo[] = [
  {
    title: 'Module 1',
    subtitle: 'Grooming Basics',
    description: 'Discover the ideal grooming routine for your terrier\'s wire coat, and how the grooming process will help you monitor health.',
    image: module1,
  },
  {
    title: 'Module 2',
    subtitle: 'Your Grooming Space',
    description: 'Learn how to set up safe and efficient grooming and bathing areas for you and your pet. We\'ll walk you through the exact setup you need for a smooth grooming process.',
    image: module2,
  },
  {
    title: 'Module 3',
    subtitle: 'Safe Grooming',
    description: 'Find out how you can groom your dog with care for a safe and positive experience - because we know safety comes first!',
    image: module3,
  },
  {
    title: 'Module 4',
    subtitle: 'Handstripping Techniques',
    description: 'Learn pro handstripping techniques with all the right tools to keep your terrier\'s coat healthy and effortlessly fetching!',
    image: module4,
  },
  {
    title: 'Module 5',
    subtitle: 'Nails, Eyes, Ears and Teeth',
    description: 'Discover the care routine you need to keep your dog\'s nails, eyes, ears, and teeth healthy and in tip-top condition.',
    image: module5,
  },
  {
    title: 'Module 6',
    subtitle: 'Bathing and Drying',
    description: 'Discover the best techniques for bathing and drying your pet to maintain a healthy wire jacket - and keep yourself dry while you\'re at it!',
    image: module6,
  },
  {
    title: 'Bonus Module',
    subtitle: 'Canine Communication',
    description: 'Learn to speak dog! Make the grooming process comfortable for your pooch by learning important communication signals.',
    image: module7,
  },
];

const faqItems: FAQItem[] = [
  {
    question: 'Do I need prior experience?',
    answer: 'Not at all! This course is perfect for paw parents of any skill level. You can learn how to groom your terrier, even if you\'ve never groomed a dog before. There will be no complicated terminology or techniques skipped over. Plus, you can watch each technique as many times as you need to feel confident!',
  },
  {
    question: 'Is this course appropriate for all terriers?',
    answer: 'This course is ideal for learning how to handstrip wire-coated terriers, like border terriers or cairn terriers. These breeds have tough, wiry coats that require handstripping to maintain their health and appearance. These techniques can be applied to any wire-coated terrier. However, some terrier breeds, like Schnauzers or Westies, have specific breed styles.',
  },
  {
    question: 'Will this course teach me how to groom a terrier mix?',
    answer: 'This course will teach you how to groom a terrier mix with a harsh wire coat. We\'ll cover the process of handstripping, which is the most effective way to maintain the texture and health of a wire-haired coat. You\'ll learn step-by-step techniques for safely and efficiently handstripping, so you can keep your terrier mix looking sharp and well-groomed!',
  },
  {
    question: 'What is handstripping?',
    answer: 'Handstripping is the best way to groom your dog\'s wire coat. It involves gently pulling out dead hair using a special tool called a hand-stripping knife. This process helps maintain the rough texture of the coat, keeping it healthy and looking great. Unlike clipping, which can soften the coat, handstripping preserves the unique texture of your terrier\'s coat.',
  },
  {
    question: 'How much will it cost to buy the equipment to groom my dog?',
    answer: 'The amount you invest in your grooming setup depends on how much of the grooming process you want to handle yourself. If you plan to handstrip your dog\'s coat, you\'ll need handstripping knives. If you also want to trim your dog\'s paw pads, you\'ll need trimmers. Your investment in tools will pay off over time as you reduce or eliminate your professional grooming expenses.',
  },
  {
    question: 'My dog is afraid of going to the groomer. Will this course help?',
    answer: 'If your dog struggles with visiting the groomer, grooming at home could be an ideal solution. You\'ll be able to create a calm, familiar environment where your dog feels safe, and take breaks whenever necessary. The course will provide step-by-step guidance to help you ease your dog into the grooming process and make it a more comfortable experience for both of you.',
  },
  {
    question: 'I have more than one dog. Will this course teach me everything I need to know for different coat types?',
    answer: <>While this course focuses on the specific techniques used to groom wire-haired terriers, Paw Parent Academy offers a unique course for each coat type. Be sure to review the courses and choose the one that best matches your dog's coat. If you need assistance in selecting the right course, feel free to email us at <EmailLink />. Plus, if you enroll in multiple courses, we offer a special discount—just reach out to us for more details!</>,
  },
];

export default HowToGroomATerrierCoursePage;
