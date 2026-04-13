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
import nalaPupStar from './_images/golden-pup-star.jpg';
import fitChecklistImage from './_images/golden-retriever.jpg';
import heroBackground from './_images/hero-golden-retriever.jpg';
import module1Image from './_images/module-1.jpg';
import module2Image from './_images/module-2.jpg';
import module3Image from './_images/module-3.jpg';
import module4Image from './_images/module-4.jpg';
import module5Image from './_images/module-5.jpg';
import module6Image from './_images/module-6.jpg';
import module7Image from './_images/module-7.jpg';
import module8Image from './_images/module-bonus.jpg';
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

const courseCode: CourseCode = 'gr';
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

const HowToGroomAGoldenRetrieverCoursePage: PageComponent = async ({ searchParams }) => {
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
        description="Learn How to Groom Your Golden, Aussie or Other Double-Coated Dog at Home."
        src={heroBackground}
        price={price}
      />
      <CourseFitChecklist
        checklist={checklist}
        src={fitChecklistImage}
        alt="Nadia Bongelli combing a golden retriever."
      />
      <CourseFeatureGrid features={features} className="bg-light" />
      <CourseMascotSpotlight
        pupName="Nala the Golden Retriever"
        bullets={pupBullets}
        src={nalaPupStar}
        alt="Nadia Bongelli patting a golden retriever."
      />
      <CourseVideoCTA
        description="Peek at a real golden retriever lesson pulled straight from the course."
        videoSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/golden-double-coats.mp4"
        posterSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/golden-double-coats.jpg"
      />
      <CourseOverview
        heading="Learn How to Groom a Golden Retriever with Easy-to-Follow Online Lessons"
        body="The grooming process is broken down into short videos that you can re-watch as often as you like. You can also follow along with step-by-step grooming guides and detailed product lists!"
        courseCode={courseCode}
        modules={modules}
        price={price}
      />
      <MoneyBackBanner />
      <FAQSection items={faqItems} className="bg-light" />
    </>
  );
};

export default HowToGroomAGoldenRetrieverCoursePage;

const checklist = [
  'You have a golden retriever, aussie or other double-coated dog.',
  'Keeping your pooch healthy and happy is your top priority.',
  "Staying on top of your dog's coat health is important to you.",
  'You\'re happy to save money where you can.',
  'You\'re eager to bond with your bestie while mastering a new skill.',
  'Spotting health concerns early gives you peace of mind.',
  'You\'re ready to be your dog\'s #1 groomer!',
];

const features: Features = {
  nails: {
    title: 'Master No-Fear Nail Trims',
    description: 'Keep your pup calm and their paws perfectly maintained.',
  },
  coat: {
    title: 'Maintain a Healthy Coat',
    description: 'Prevent hot spots, mats, and tangles on your double-coat dog.',
  },
  bathe: {
    title: 'Bathe and Dry Like a Pro',
    description: 'Learn professional bathing techniques for a clean and happy pet.',
  },
  trims: {
    title: 'Finishing Touches',
    description: "Enhance your pup's look by learning how to do a neat and tidy trim.",
  },
};

const pupBullets = [
  'Makes friends quickly.',
  'Has a beautiful double coat with long feathering.',
  'Gets mats behind the ears, in the armpits, and under the collar.',
];

const modules: CourseModuleInfo[] = [
  {
    title: 'Module 1',
    subtitle: 'Grooming Basics',
    description: 'Discover your dog\'s unique grooming needs including what a proper grooming routine looks like and how you can use the grooming experience to monitor health.',
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
    subtitle: 'Brushing a Double Coat',
    description: 'Discover which tools you should be using for each area of your dog. Master mats and tangles and learn how to make the brushing experience enjoyable.',
    image: module4Image,
  },
  {
    title: 'Module 5',
    subtitle: 'Nails, Eyes, Ears and Teeth',
    description: 'Find out what your dog\'s maintenance schedule should be and learn proper nail, eye, ear and teeth-cleaning techniques.',
    image: module5Image,
  },
  {
    title: 'Module 6',
    subtitle: 'Bathing and Drying',
    description: 'Splish splash—it\'s time for a bath! Learn how to effectively bathe and dry your pet including our expert\'s best tip for keeping yourself dry during the process.',
    image: module6Image,
  },
  {
    title: 'Module 7',
    subtitle: 'Trim and Finishing Touches',
    description: 'Study how to safely use scissors and clippers before learning how to trim your golden retriever\'s feathering, paws and ears.',
    image: module7Image,
  },
  {
    title: 'Bonus Module',
    subtitle: 'Canine Communication',
    description: 'Find out what your dog is really trying to tell you. Observe signals early so you can respond quickly and adjust to your pet\'s needs. You and your dog will work together as a team.',
    image: module8Image,
  },
];

const faqItems: FAQItem[] = [
  {
    question: 'Do I need prior experience?',
    answer: 'Not at all! You can learn how to groom your golden retriever or other double-coated dog with no prior experience grooming dogs. There will be no complicated terminology or techniques skipped over—plus you\'ll be able to watch each technique as often as you like.',
  },
  {
    question: 'Is the course appropriate for all double-coat breeds?',
    answer: 'Yes! This course is perfect for learning to groom a golden retriever, Australian Shepherd, Bernese Mountain Dog or any other double-coated dog mix with a lush, thick coat.',
  },
  {
    question: 'How much will it cost to buy the equipment to groom my dog?',
    answer: 'What you invest in your grooming setup depends on how much of the groom you\'d like to do. For instance, if you\'re going to trim your dog\'s feathering, paws and ears you\'ll invest in clippers and shears. The investment you put into your equipment will pay for itself as your professional grooming expenses are reduced or eliminated altogether.',
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
    answer: <>Paw Parent Academy has a unique course for each coat type. This course is for double-coats and features a golden retriever haircut. You'll want to review all courses and choose one that aligns with your dog's coat. If you need help choosing simply email <EmailLink />. Plus, if you enroll in multiple courses we offer a special discount—just reach out to us for more details!</>,
  },
];
