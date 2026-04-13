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
import module1 from './_images/module-1.jpg';
import module2 from './_images/module-2.jpg';
import module3 from './_images/module-3.jpg';
import module4 from './_images/module-4.jpg';
import module5 from './_images/module-5.jpg';
import module6 from './_images/module-6.jpg';
import module7 from './_images/module-7.jpg';
import module8 from './_images/modules-bonus.jpg';
import fitChecklistImage from './_images/yorkie-checklist.jpg';
import heroImage from './_images/yorkie-coats-no-bg.jpg';
import yorkiePupStar from './_images/yorkie-pup-star.jpg';
import { EmailLink } from '@/components/emailLink';
import type { FAQItem } from '@/components/faqSection';
import { FAQSection } from '@/components/faqSection';
import { CourseJsonLd } from '@/components/jsonLd/course';
import type { CourseCode } from '@/domain/courseCode';
import { getCourseDescription, getCourseName, getCourseUrl } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

const courseCode: CourseCode = 'yk';
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

const YorkieCoursePage: PageComponent = async ({ searchParams }) => {
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
        description="Learn How to Groom a Yorkie, Morkie or Maltese at Home."
        src={heroImage}
        price={price}
      />
      <CourseFitChecklist
        checklist={checklist}
        src={fitChecklistImage}
        alt="Yorkie about to be groomed."
      />
      <CourseFeatureGrid features={features} className="bg-light" />
      <CourseMascotSpotlight
        pupName="Abby the Yorkie"
        bullets={pupBullets}
        src={yorkiePupStar}
        alt="Grooming expert, Nadia Bongelli, trimming a Yorkie's ears."
      />
      <CourseVideoCTA
        description="Peek inside the Yorkie lessons with a real clip pulled from the course."
        videoSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/abby.mp4"
        posterSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/abby.jpg"
      />
      <CourseOverview
        heading="Learn How to Groom a Yorkie with Easy-to-Follow Online Lessons"
        body="The grooming process is broken down into short videos that you can re-watch as often as you like. Your course also includes helpful grooming instructions, tip sheets and tool guides!"
        courseCode={courseCode}
        modules={modules}
        price={price}
      />
      <MoneyBackBanner />
      <FAQSection items={faqItems} className="bg-light" />
    </>
  );
};

export default YorkieCoursePage;

const checklist = [
  'You are the proud paw parent of a Yorkie, Maltese or other silky-coated dog.',
  'Keeping your dog healthy and happy is your top priority.',
  "Your dog's long and silky coat means regular trips to the groomer.",
  'Saving money while pampering your dog gets your tail wagging.',
  'Bonding with your small and mighty friend is important to you.',
  'You\'d never miss a chance to catch potential health concerns early.',
  'You\'re ready to be your pup\'s personal stylist!',
];

const features: Features = {
  nails: {
    title: 'Master No-Fear Nail Trims',
    description: 'Keep your pup calm and their paws perfectly maintained.',
  },
  coat: {
    title: 'Maintain a Healthy Coat',
    description: "Learn how to keep your pup's high-maintenance coat smooth and silky.",
  },
  bathe: {
    title: 'Bathe and Dry Like a Pro',
    description: 'Learn professional techniques for a clean and happy pet.',
  },
  trims: {
    title: 'Create Adorable Trims',
    description: 'See how you can create an adorable teddy bear cut on your dog.',
  },
};

const pupBullets = [
  'Loves to snuggle.',
  'A natural teddy bear cut is her signature look.',
  'A seasoned pup in the salon but ready to retire to home grooming.',
];

const modules: CourseModuleInfo[] = [
  {
    title: 'Module 1',
    subtitle: 'Grooming Basics',
    description: 'Discover your dog\'s unique grooming needs including what a proper grooming routine looks like and how you can use the grooming experience to monitor health.',
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
    description: 'We know you have safety top of mind and so do we! Learn the techniques and equipment you should be using to prevent injuries.',
    image: module3,
  },
  {
    title: 'Module 4',
    subtitle: 'Brushing a Silky Coat',
    description: 'Discover which tools you should be using for each area of your dog. Master mats and tangles and learn how to make the brushing experience an enjoyable one.',
    image: module4,
  },
  {
    title: 'Module 5',
    subtitle: 'Nails, Eyes, Ears and Teeth',
    description: 'Find out what your dog\'s maintenance schedule should be and learn proper nail, eye, ear and teeth-cleaning techniques.',
    image: module5,
  },
  {
    title: 'Module 6',
    subtitle: 'Bathing and Drying',
    description: 'Splish splash—it\'s time for a bath! Learn how to effectively bathe and dry your pet including our expert\'s best tip for keeping yourself dry during the process.',
    image: module6,
  },
  {
    title: 'Module 7',
    subtitle: 'The Teddy Bear Trim',
    description: 'Learn how to safely use scissors and clippers before diving into the complete grooming process. Let your creativity shine as you create the cutest teddy bear cut on your pooch!',
    image: module7,
  },
  {
    title: 'Bonus Module',
    subtitle: 'Canine Communication',
    description: 'Find out what your Yorkie is really trying to tell you. Observe signals early on so you can make the grooming process easier for you and your pet.',
    image: module8,
  },
];

const faqItems: FAQItem[] = [
  {
    question: 'Do I need prior experience?',
    answer: 'Not at all! You can learn how to groom your pug with no prior experience grooming dogs. There will be no complicated terminology or techniques skipped over—plus you\'ll be able to watch each technique as often as you like.',
  },
  {
    question: 'Which breeds is this course suitable for?',
    answer: 'This course is perfect for learning to groom and deshed a short-coated dog with an undercoat such as pugs, bulldogs and other bully breeds.',
  },
  {
    question: 'Is this course appropriate for large breeds?',
    answer: 'Yes—this course is appropriate for any short-haired breed with an undercoat, from tiny chihuahuas to boxers!',
  },
  {
    question: 'How much will it cost to buy the equipment to groom my dog?',
    answer: 'What you invest in your grooming setup depends on how much of the groom you\'d like to do. For instance, if you\'re going to bathe and dry your pup, you\'ll need dog-safe shampoo, conditioner and a dryer. The investment you put into your equipment will pay for itself as your professional grooming expenses are reduced or eliminated altogether.',
  },
  {
    question: 'My dog is terrified to go to the groomers. Will this course help?',
    answer: 'Grooming your dog may be the perfect solution for you if your dog is uncomfortable going to the groomer. You\'ll be able to control the environment so your dog feels comfortable and you can give your dog lots of breaks if needed. The course will walk you through all the steps to get your dog comfortable with the grooming process.',
  },
  {
    question: 'How can I determine if I have sufficient physical strength to groom my own dog?',
    answer: 'You\'ll want to have good grip strength for tool handling and be comfortable standing for longer periods. You\'ll learn great tips in the course to set up an ergonomic and comfortable grooming station for you and your pet.',
  },
  {
    question: 'I have another dog with a different coat type. Will this course teach me everything I need to know?',
    answer: <>Paw Parent Academy has a unique course for each coat type. You'll want to review the courses and choose one that aligns with your dog's coat. If you need help choosing simply email <EmailLink />. Plus, if you enroll in multiple courses we offer a special discount. Just reach out to us for more details!</>,
  },
];
