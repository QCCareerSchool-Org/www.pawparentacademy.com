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
import module1 from './_images/modules-1.jpg';
import module2 from './_images/modules-2-2.jpg';
import module3 from './_images/modules-3-2.jpg';
import module4 from './_images/modules-4.jpg';
import module5 from './_images/modules-5.jpg';
import module6 from './_images/modules-6.jpg';
import module7 from './_images/modules-7-2.jpg';
import module8 from './_images/modules-8.jpg';
import fitChecklistImage from './_images/pepe-communication.jpg';
import pepePupStar from './_images/pepe-pupstar.jpg';
import heroImage from './_images/plush-coats-no-bg.jpg';
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

const courseCode: CourseCode = 'tb';
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

const TeddyBearCutsCoursePage: PageComponent = async ({ searchParams }) => {
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
        description="Give your shih tzu or any fluffy-coated dog a teddy bear cut at home."
        src={heroImage}
        price={price}
      />
      <CourseFitChecklist
        heading="Are We Following the Right Scent?"
        checklist={checklist}
        src={fitChecklistImage}
        alt="Grooming expert Nadia Bongelli trims a yorkie's feet."
      />
      <CourseFeatureGrid features={features} className="bg-light" />
      <CourseMascotSpotlight
        pupName="Pepe the Biewer Terrier"
        bullets={pupBullets}
        src={pepePupStar}
        alt="Grooming expert Nadia Bongelli smiling at Pepe the biewer terrier."
      />
      <CourseVideoCTA
        description="Peek inside the Teddy Bear Cuts lessons with a real clip pulled from the course."
        videoSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/yorkies.mp4"
        posterSrc="https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/yorkies.jpg"
      />
      <CourseOverview
        heading="Learn to Give Your Dog a Teddy Bear Cut with Easy-to-Follow Online Lessons"
        body="Learn the whole grooming process step by step! Follow along with short videos that you can re-watch as often as you like. You can also follow along with helpful grooming guides and product lists."
        courseCode={courseCode}
        modules={modules}
        price={price}
      />
      <MoneyBackBanner />
      <FAQSection items={faqItems} className="bg-light" />
    </>
  );
};

export default TeddyBearCutsCoursePage;

const checklist = [
  'You have a Shih Tzu, Pomeranian or other fluffy-coated dog.',
  'Providing top-notch pet care while keeping costs down is important.',
  'Your goal is to keep that fluffy coat looking fabulous.',
  'A teddy bear cut is your top pick for a low-maintenance trim that keeps your pet looking adorable.',
  'Spending quality time with your furry friend is a top priority.',
  'Catching health issues right away eases your worry.',
  'You\'re excited to be your dog\'s #1 groomer.',
];

const features: Features = {
  nails: {
    title: 'Master No-Fear Nail Trims',
    description: 'Keep your pup calm and their nails perfectly maintained.',
  },
  coat: {
    title: 'Maintain a Healthy Coat',
    description: 'Prevent mats, knots, and tangles for a healthy, luxurious coat.',
  },
  bathe: {
    title: 'Bathe and Dry Like a Pro',
    description: 'Learn professional techniques for a clean and happy pet.',
  },
  trims: {
    title: 'Create Adorable Trims',
    description: 'Give your dog an adorable teddy bear cut right at home.',
  },
};

const pupBullets = [
  'Loves to give kisses to his adoring fans.',
  'Has a lush coat perfect for a round, teddy bear face.',
  'Prone to tangles under his harness after long walks.',
];

const modules: CourseModuleInfo[] = [
  {
    title: 'Module 1',
    subtitle: 'Grooming Basics',
    description: 'Discover your dog\'s unique grooming needs and develop an ideal grooming routine. Plus, learn how to monitor your pup\'s health through grooming.',
    image: module1,
  },
  {
    title: 'Module 2',
    subtitle: 'Your Grooming Space',
    description: 'Find out how to setup a safe and efficient grooming space. We\'ll walk  you through the ideal space and equipment for a stress-free groom.',
    image: module2,
  },
  {
    title: 'Module 3',
    subtitle: 'Safe Grooming',
    description: 'Safety is our top priority! We\'ll outline the best ways to work with your pet to create a safe and happy grooming experience.',
    image: module3,
  },
  {
    title: 'Module 4',
    subtitle: 'Brushing a Plush Coat',
    description: 'Find out which tools are best suited to your dog\'s soft, plush coat. Prevent mats and tangles with proper brushing that\'s comfortable for your pet.',
    image: module4,
  },
  {
    title: 'Module 5',
    subtitle: 'Nails, Eyes, Ears, and Teeth',
    description: 'Find out what your dog\'s maintenance schedule should include and learn proper nail, eye, ear and teeth-cleaning techniques.',
    image: module5,
  },
  {
    title: 'Module 6',
    subtitle: 'Bathing and Drying',
    description: 'Discover the best ways to bathe and dry your pup, with expert product picks and an insider trick to keep yourself dry!',
    image: module6,
  },
  {
    title: 'Module 7',
    subtitle: 'The Teddy Bear Trim',
    description: 'Give your pup star the perfect teddy bear haricut! Learn safe clipping and scissoring techqniues before mastering the complete grooming process.',
    image: module7,
  },
  {
    title: 'Bonus Module',
    subtitle: 'Canine Communication',
    description: 'Find out what your dog is really trying to tell you. Observe signals early on so you can make the grooming process comfortable and enjoyable for your pup.',
    image: module8,
  },
];

const faqItems: FAQItem[] = [
  {
    question: 'What is a teddy bear cut?',
    answer: 'A teddy bear cut is a popular, low-maintenance haircut perfect for fluffy-coated dogs like shih tzus, pomeranians, havanese and biewer terriers. This cute and cuddly look features a round teddy bear face and fluffy paws with a neatly clipped body, keeping your pup cute, comfortable and easy to groom. In this course, you\'ll learn everything from how to cut a teddy bear face to shaping those adorable round feet!',
  },
  {
    question: 'Which breeds are a good fit for this course?',
    answer: <>Any small breed with a soft, fluffy, long-growing coat will look absolutely adorable with a teddy bear cut! For instance, the techniques taught in this course are ideal for achieving a charming shih tzu teddy bear cut. Breeds like shih tzus, pomeranians, havanese, lhasa apsos, and biewer terriers are all perfect candidates for this grooming style, making this course a great fit for anyone with a fluffy pup! If you're unsure whether this is the right course for your dog, feel free to email us at <EmailLink />. We'll help you choose the perfect course!</>,
  },
  {
    question: 'Do I need prior experience?',
    answer: 'Not at all! You can learn how to give your dog a teddy bear cut with no prior experience grooming dogs. There will be no complicated terminology or techniques skipped over—plus you\'ll be able to watch each technique as often as you like.',
  },
  {
    question: 'How much will it cost to buy the equipment to groom my dog?',
    answer: 'What you invest in your grooming setup depends on how much of the groom you\'d like to do. For instance, if you\'re going to complete the trim on your pet you\'ll need to purchase clippers and shears. The investment you put into your equipment will pay for itself as your professional grooming expenses are reduced or eliminated altogether.',
  },
  {
    question: 'My dog is anxious about grooming. Can this course help?',
    answer: 'If your dog feels afraid or anxious at the groomer, grooming at home could be the ideal solution. You\'ll have control over the environment, allowing your dog to feel at ease, and you can take plenty of breaks if needed. This course will guide you through every step of the process, from nail trims to achieving the perfect teddy bear cut, helping your dog feel more relaxed and comfortable with grooming.',
  },
  {
    question: 'What if I have another dog with a different coat type?',
    answer: <>Paw Parent Academy has a unique course for each coat type. You'll want to review the courses and choose one that aligns with your dog's coat. If you need help choosing, simply email <EmailLink />. Plus, if you enroll in multiple courses, we offer a special discount—just reach out to us for more details!</>,
  },
];
