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
import goldendoodleShaving from './_images/goldendoodle-shaving.jpg';
import heroBackground from './_images/hero-background.jpg';
import module1 from './_images/module-1.jpg';
import module2 from './_images/module-2.jpg';
import module3 from './_images/module-3.jpg';
import module4 from './_images/module-4.jpg';
import module5 from './_images/module-5.jpg';
import module6 from './_images/module-6.jpg';
import module7 from './_images/module-7.jpg';
import module8 from './_images/module-8.jpg';
import remyPupStar from './_images/remy-pup-star.jpg';
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

const courseCode: CourseCode = 'gd';
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

const GoldendoodleCoursePage: PageComponent = async ({ searchParams }) => {
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
        description="Learn How to Groom Your Doodle, Poodle or Other Curly-Coated Dog at Home."
        src={heroBackground}
        price={price}
      />
      <CourseFitChecklist
        checklist={checklist}
        src={goldendoodleShaving}
        alt="Nadia Bongelli uses clippers on a Goldendoodle."
      />
      <CourseFeatureGrid features={features} className="bg-light" />
      <CourseMascotSpotlight
        pupName="Remy the Goldendoodle"
        bullets={pupBullets}
        src={remyPupStar}
        alt="Remy the Goldendoodle smiling after a groom."
      />
      <CourseVideoCTA
        description="Peek inside the lessons with a real clip pulled directly from the course."
        videoSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/golden-doodle.mp4"
      />
      <CourseOverview
        heading="Learn How to Groom a Goldendoodle with Easy-to-Follow Online Lessons"
        body="The grooming process is broken down into short videos that you can re-watch as often as you like. Each module also includes helpful grooming instructions, tip sheets and tool lists."
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
  'You are the proud paw parent of a goldendoodle, poodle or any other curly-coated dog.',
  'Keeping your dog healthy and happy is your top priority.',
  'Saving money gets your tail wagging.',
  'Grooming at home means less worry for you and your dog.',
  'A strong bond with your furry friend is important to you.',
  'You\'d never miss a chance to catch potential health concerns early.',
  'You want to be your dog\'s #1 groomer!',
];

const features: Features = {
  nails: {
    title: 'Master No-Fear Nail Trims',
    description: 'Keep your pup calm and their paws perfectly maintained.',
  },
  coat: {
    title: 'Maintain a Healthy Coat',
    description: 'Prevent mats, knots, and tangles for a healthy finish.',
  },
  bathe: {
    title: 'Bathe and Dry Like a Pro',
    description: 'Learn professional techniques for a clean and happy pet.',
  },
  trims: {
    title: 'Create Adorable Trims',
    description: 'Give your dog a polished, adorable look right at home.',
  },
};

const pupBullets = [
  'Loves pets behind the ears and is a pro at holding a paw',
  'Looks great in a natural Teddy-Bear \'do',
  'A regular at the salon but prefers to be home with his paw parents',
];

const modules: CourseModuleInfo[] = [
  {
    title: 'Module 1',
    subtitle: 'Grooming Basics',
    description:
      "Discover your dog's unique grooming needs including what a proper grooming routine looks like and how you can use the grooming experience to monitor health.",
    image: module1,
  },
  {
    title: 'Module 2',
    subtitle: 'Your Grooming Space',
    description: "Learn how to set up safe and efficient grooming and bathing areas for you and your pet. We'll walk you through the exact setup you need for a smooth grooming process.",
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
    subtitle: 'Brushing a Curly Coat',
    description: 'Discover which tools you should be using for each area of your dog. Master mats and tangles and learn how to make the brushing experience an enjoyable one.',
    image: module4,
  },
  {
    title: 'Module 5',
    subtitle: 'Nails, Eyes, Ears & Teeth',
    description: "Find out what your dog's maintenance schedule should be and learn proper nail, eye, ear and teeth-cleaning techniques.",
    image: module5,
  },
  {
    title: 'Module 6',
    subtitle: 'Bathing & Drying',
    description: "Splish splash - it's time for a bath! Learn how to effectively bathe and dry your pet including our expert's best tip for keeping yourself dry during the process.",
    image: module6,
  },
  {
    title: 'Module 7',
    subtitle: 'The Teddy Bear Trim',
    description: 'Learn how to safely use scissors and clippers before diving into the complete grooming process. Let your creativity shine as you create the cutest teddy bear trim on your pooch!',
    image: module7,
  },
  {
    title: 'Bonus Module',
    subtitle: 'Canine Communication',
    description: 'Find out what your dog is really trying to tell you. Observe signals early on so you can make the grooming process comfortable for your pet.',
    image: module8,
  },
];

const faqItems: FAQItem[] = [
  {
    question: 'Do I need prior experience?',
    answer: 'Not at all! You can learn how to groom your goldendoodle with no prior experience grooming dogs. There will be no complicated terminology or techniques skipped over - plus you\'ll be able to watch each technique as often as you like.',
  },
  {
    question: 'Is the course appropriate for all curly-coat breeds?',
    answer: 'This course is perfect for learning to complete a Teddy Bear groom on your Poodle, Golden Doodle, Labradoodle or any other Poodle mix with a lush, curly coat.',
  },
  {
    question: 'How much will it cost to buy the equipment to groom my dog?',
    answer: 'What you invest in your grooming setup depends on how much of the groom you\'d like to do. For instance, if you\'re going to complete the trim on your pet you\'ll need to purchase clippers and shears. The investment you put into your equipment will pay for itself as your professional grooming expenses are reduced or eliminated altogether.',
  },
  {
    question: 'Which goldendoodle haircut is taught in the course?',
    answer: 'Your instructor teaches the teddy-bear doodle haircut. Learn how to create this super cute and cuddly style on your doodle in no time. This short and clean doodle haircut is perfect for dog owners who are looking for lower maintenance.',
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
    answer: <>Paw Parent Academy has a unique course for each coat type. You'll want to review the courses and choose one that aligns with your dog's coat. If you need help choosing simply email <EmailLink />. Plus, if you enroll in multiple courses we offer a special discount—just reach out to us for more details!</>,
  },
];

export default GoldendoodleCoursePage;
