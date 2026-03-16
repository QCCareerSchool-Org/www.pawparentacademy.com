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
import heroImage from './_images/hero-pug.jpg';
import bonusModuleImage from './_images/module-bonus.jpg';
import module4Image from './_images/module-brushing.jpg';
import module1Image from './_images/module-intro.jpg';
import module5Image from './_images/module-nails-ears-teeth.jpg';
import module3Image from './_images/module-safe.jpg';
import module2Image from './_images/module-space.jpg';
import module6Image from './_images/modules-bathing.jpg';
import fitChecklistImage from './_images/pug-nadia.jpg';
import chumleyPupStar from './_images/pug-pup-star.jpg';
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

const courseCode: CourseCode = 'pu';
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

const HowToGroomAPugCoursePage: PageComponent = async ({ searchParams }) => {
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
        description="Learn How to Groom Your Pug, Bully or Other Short-Coated Dog at Home."
        src={heroImage}
        price={price}
      />
      <CourseFitChecklist
        checklist={checklist}
        src={fitChecklistImage}
        alt="Chumley the Pug with Nadia Bongelli"
      />
      <CourseFeatureGrid features={features} className="bg-light" />
      <CourseMascotSpotlight
        pupName="Chumley the Pug"
        bullets={pupBullets}
        src={chumleyPupStar}
        alt="Chumley the pug getting ready to be groomed"
      />
      <CourseVideoCTA
        description="Peek at a real short-coat lesson pulled straight from the course."
        videoSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/pugs-and-short-coats.mp4"
        posterSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/pugs-and-short-coats.jpg"
      />
      <CourseOverview
        heading="Learn How to Groom a Pug with Easy-to-Follow Online Lessons"
        body="The grooming process is broken down into short videos that you can re-watch as often as you like. You can also follow along with step-by-step grooming guides and tool lists."
        courseCode={courseCode}
        modules={modules}
        price={price}
      />
      <MoneyBackBanner />
      <FAQSection items={faqItems} className="bg-light" />
    </>
  );
};

export default HowToGroomAPugCoursePage;

const checklist = [
  'You are the proud paw parent of a Pug, Bully or other short-coated dog.',
  'Keeping your dog healthy and happy is your top priority.',
  'You want to learn how to reduce your dog\'s odor with maintenance grooming.',
  "You want to stay on top of your dog's health including taking steps to prevent infections.",
  'Learning a new skill with your fur baby sounds like fun.',
];

const features: Features = {
  nails: {
    title: 'Master Nail Trims',
    description: 'Learn pro techniques to make the nail trimming process a breeze.',
  },
  coat: {
    title: 'Maintain a Healthy Coat',
    description: 'Prevent the buildup of dead hair by learning proper brushing techniques.',
  },
  bathe: {
    title: 'Bathe and Dry Like a Pro',
    description: 'Carefully clean your dog, including under sensitive folds and wrinkles.',
  },
  curry: {
    title: 'Finishing Touches',
    description: 'Give your pup a perfect, shiny coat with a final deshedding process.',
  },
};

const pupBullets = [
  'Has an adorable curly tail and a great smile.',
  'Full of charm and personality and can\'t stop snorting.',
  'Looks and smells better when his wrinkles are clean.',
  'Could benefit from more maintenance grooming at home.',
];

const modules: CourseModuleInfo[] = [
  {
    title: 'Module 1',
    subtitle: 'Grooming Basics',
    description: 'Discover your short-coated dog\'s unique grooming needs including what a proper grooming routine looks like and how you can use the grooming experience to monitor health.',
    image: module1Image,
  },
  {
    title: 'Module 2',
    subtitle: 'Your Grooming Space',
    description: 'Learn how to set up safe and efficient grooming and bathing areas for you and your pet. We\'ll walk you through the exact setup you need for a smooth grooming process.',
    image: module2Image,
  },
  {
    title: 'Module 3',
    subtitle: 'Safe Grooming',
    description: 'We know you have safety top of mind and so do we! Learn the techniques and equipment you should be using to prevent injuries.',
    image: module3Image,
  },
  {
    title: 'Module 4',
    subtitle: 'Brushing a Short Coat',
    description: 'Discover which tools you should be using for each step of the grooming process. Get shedding under control and learn how to make the brushing experience an enjoyable one.',
    image: module4Image,
  },
  {
    title: 'Module 5',
    subtitle: 'Nails, Eyes, Ears and Teeth',
    description: "Find out what your dog's maintenance schedule should be and learn proper nail, eye, ear and teeth-cleaning techniques.",
    image: module5Image,
  },
  {
    title: 'Module 6',
    subtitle: 'Bathing and Drying',
    description: 'Splish splash—it\'s time for a bath! Learn how to effectively bathe and dry your pet including our expert\'s best tip for keeping yourself dry during the process.',
    image: module6Image,
  },
  {
    title: 'Bonus Module',
    subtitle: 'Canine Communication',
    description: 'Learn to recognize early signs of stress and discover tricks for helping your dog through the grooming process.',
    image: bonusModuleImage,
  },
];

const faqItems: FAQItem[] = [
  {
    question: 'Do I need prior experience?',
    answer: 'Not at all! You can learn how to groom your pug with no prior experience grooming dogs. There will be no complicated terminology or techniques skipped over - plus you\'ll be able to watch each technique as often as you like.',
  },
  {
    question: 'Which breeds is this course suitable for?',
    answer: 'This course is perfect for learning to groom and deshed a short-coated dog with an undercoat such as Pugs, Bulldogs and other Bully breeds.',
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
