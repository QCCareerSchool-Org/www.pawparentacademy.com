import type { AccordionItem } from '@/components/AccordionGroup';
import bathIcon from '../images/bathe-icon.png';
import coatIcon from '../images/coat-icon.png';
import nailsIcon from '../images/nails-icon.png';
import trimsIcon from '../images/trims-icon.png';
import heroImage from './images/hero-golden-retriever.jpg';
import fitChecklistImage from './images/golden-retriever.jpg';
import nalaPupStar from './images/golden-pup-star.jpg';
import module1Image from './images/module-1.jpg';
import module2Image from './images/module-2.jpg';
import module3Image from './images/module-3.jpg';
import module4Image from './images/module-4.jpg';
import module5Image from './images/module-5.jpg';
import module6Image from './images/module-6.jpg';
import module7Image from './images/module-7.jpg';
import module8Image from './images/module-bonus.jpg';

export const courseMetadata = {
  title: 'How to Groom a Golden Retriever',
  description:
    "Learn how to groom your Golden Retriever at home! Paw Parent Academy's online course teaches easy, step-by-step techniques. Enroll Now!",
  canonicalUrl: 'https://www.pawparentacademy.com/courses/how-to-groom-a-golden-retriever',
};

export const heroContent = {
  title: 'How to Groom a Golden Retriever',
  description: 'Learn How to Groom Your Golden, Aussie or Other Double-Coated Dog at Home.',
  ctaLabel: 'Enroll Now ($248)',
  ctaHref: '/resource_redirect/offers/W4jL2sL9',
  backgroundImage: heroImage,
};

export const fitChecklistContent = {
  heading: 'Are We Sniffing Out the Right Trail?',
  checklist: [
    'You have a Golden Retriever, Aussie or other double-coated dog.',
    'Keeping your pooch healthy and happy is your top priority.',
    "Staying on top of your dog's coat health is important to you.",
    "You're happy to save money where you can.",
    "You're eager to bond with your bestie while mastering a new skill.",
    'Spotting health concerns early gives you peace of mind.',
    "You're ready to be your dog's #1 groomer!",
  ],
  image: {
    src: fitChecklistImage,
    alt: 'Nadia Bongelli combing a golden retriever.',
  },
};

export const featureHighlights = [
  {
    iconSrc: nailsIcon,
    title: 'Master No-Fear Nail Trims',
    description: 'Keep your pup calm and their paws perfectly maintained.',
  },
  {
    iconSrc: coatIcon,
    title: 'Maintain a Healthy Coat',
    description: "Prevent hot spots, mats, and tangles on your double-coat dog.",
  },
  {
    iconSrc: bathIcon,
    title: 'Bathe and Dry Like a Pro',
    description: 'Learn professional bathing techniques for a clean and happy pet.',
  },
  {
    iconSrc: trimsIcon,
    title: 'Finishing Touches',
    description: "Enhance your pup's look by learning how to do a neat and tidy trim.",
  },
];

export const mascotSpotlight = {
  heading: 'Meet Your Course Pup Star',
  pupName: 'Nala the Golden Retriever',
  bullets: [
    'Makes friends quickly.',
    'Has a beautiful double coat with long feathering.',
    'Gets mats behind the ears, in the armpits, and under the collar.',
  ],
  image: {
    src: nalaPupStar,
    alt: 'Nadia Bongelli patting a golden retriever.',
  },
};

export const videoSample = {
  heading: 'Watch a Course Sample',
  description: 'Peek at a real Golden Retriever lesson pulled straight from the course.',
  videoSrc:
    'https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/golden-double-coats.mp4',
  posterSrc:
    'https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/golden-double-coats.jpg',
};

export const overviewContent = {
  heading: 'Learn How to Groom a Golden Retriever with Easy-to-Follow Online Lessons',
  body:
    'The grooming process is broken down into short videos that you can re-watch as often as you like. You can also follow along with step-by-step grooming guides and detailed product lists!',
};

export const modules = [
  {
    title: 'Module 1',
    subtitle: 'Grooming Basics',
    description:
      'Discover your dog\'s unique grooming needs including what a proper grooming routine looks like and how you can use the grooming experience to monitor health.',
    image: module1Image,
  },
  {
    title: 'Module 2',
    subtitle: 'Your Grooming Space',
    description:
      "Learn how to set up safe and efficient grooming and bathing areas for you and your pet. We'll walk you through the exact setup you need for a smooth grooming process.",
    image: module2Image,
  },
  {
    title: 'Module 3',
    subtitle: 'Safe Grooming',
    description:
      'We know you have safety top of mind and so do we! Learn the techniques and equipment you should be using to prevent injuries.',
    image: module3Image,
  },
  {
    title: 'Module 4',
    subtitle: 'Brushing a Double Coat',
    description:
      'Discover which tools you should be using for each area of your dog. Master mats and tangles and learn how to make the brushing experience enjoyable.',
    image: module4Image,
  },
  {
    title: 'Module 5',
    subtitle: 'Nails, Eyes, Ears and Teeth',
    description:
      "Find out what your dog's maintenance schedule should be and learn proper nail, eye, ear and teeth-cleaning techniques.",
    image: module5Image,
  },
  {
    title: 'Module 6',
    subtitle: 'Bathing and Drying',
    description:
      "Splish splash - it's time for a bath! Learn how to effectively bathe and dry your pet including our expert's best tip for keeping yourself dry during the process.",
    image: module6Image,
  },
  {
    title: 'Module 7',
    subtitle: 'Trim and Finishing Touches',
    description:
      "Study how to safely use scissors and clippers before learning how to trim your golden retriever's feathering, paws and ears.",
    image: module7Image,
  },
  {
    title: 'Bonus Module',
    subtitle: 'Canine Communication',
    description:
      "Find out what your dog is really trying to tell you. Observe signals early so you can respond quickly and adjust to your pet's needs. You and your dog will work together as a team.",
    image: module8Image,
  },
];

export const faqItems: AccordionItem[] = [
  {
    question: 'Do I need prior experience?',
    answerHtml:
      "Not at all! You can learn how to groom your Golden Retriever or other double-coated dog with no prior experience grooming dogs. There will be no complicated terminology or techniques skipped over - plus you’ll be able to watch each technique as often as you like.",
  },
  {
    question: 'Is the course appropriate for all double-coat breeds?',
    answerHtml:
      "Yes! This course is perfect for learning to groom a Golden Retriever, Australian Shepherd, Bernese Mountain Dog or any other double-coated dog mix with a lush, thick coat.",
  },
  {
    question: 'How much will it cost to buy the equipment to groom my dog?',
    answerHtml:
      "What you invest in your grooming setup depends on how much of the groom you’d like to do. For instance, if you're going to trim your dog's feathering, paws and ears you'll invest in clippers and shears. The investment you put into your equipment will pay for itself as your professional grooming expenses are reduced or eliminated altogether.",
  },
  {
    question: 'My dog is terrified to go to the groomers. Will this course help?',
    answerHtml:
      "Grooming your dog may be the perfect solution for you if your dog is uncomfortable going to the groomer. You’ll be able to control the environment so your dog feels comfortable and you can give your dog lots of breaks if needed. The course will walk you through all the steps to get your dog comfortable with the grooming process.",
  },
  {
    question: 'How can I determine if I have sufficient physical strength to groom my own dog?',
    answerHtml:
      "You’ll want to have good grip strength for tool handling and be comfortable standing for longer periods. You’ll learn great tips in the course to set up an ergonomic and comfortable grooming station for you and your pet.",
  },
  {
    question: 'I have another dog with a different coat type. Will this course teach me everything I need to know?',
    answerHtml:
      "Paw Parent Academy has a unique course for each coat type. This course is for double-coats and features a golden retriever haircut. You’ll want to review all courses and choose one that aligns with your dog’s coat. If you need help choosing simply email <a href=\"mailto:info@pawparentacademy.com\">info@pawparentacademy.com</a>. Plus, if you enroll in multiple courses we offer a special discount—just reach out to us for more details!",
  },
];

export const leadMagnetContent = {
  eyebrow: 'Start Saving with Paw Parent Academy',
  heading: 'Grab a $50 Discount Now!',
  description:
    'Join hundreds of pet parents learning to groom their dogs safely and affordably at home. Get your discount today!',
  disclaimer:
    'I agree to receive emails from Paw Parent Academy including promotions and tips for pet parents. Unsubscribe anytime!',
};

export const videoSchema = {
  '@context': 'http://schema.org/',
  '@type': 'VideoObject',
  name: 'How to Groom a Golden Retriever Course Sample',
  description: 'A Kajabi-hosted video sample that previews the How to Groom a Golden Retriever course.',
  duration: 'PT1M3S',
  uploadDate: '2025-02-28T17:54:24.000Z',
  thumbnailUrl:
    'https://embed-ssl.wistia.com/deliveries/32ebc5c2cdf2ac7968bc9f13676e7a29006605ff.jpg?image_crop_resized=640x360',
  embedUrl: videoSample.videoSrc,
  contentUrl: videoSample.videoSrc,
};

export const courseSchema = {
  '@context': 'https://schema.org/',
  '@type': 'Course',
  name: courseMetadata.title,
  description: courseMetadata.description,
  provider: {
    '@type': 'Organization',
    name: 'Paw Parent Academy',
    sameAs: 'https://www.pawparentacademy.com',
  },
  offers: {
    '@type': 'Offer',
    price: '248',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: courseMetadata.canonicalUrl,
  },
};
