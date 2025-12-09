import type { AccordionItem } from '@/components/AccordionGroup';
import nailsIcon from '../images/nails-icon.png';
import nailClippersIcon from '../images/nail-clippers-icon.png';
import dogIcon from '../images/dog-icon.png';
import heroImage from './images/hero-pawsitive.jpg';
import fitChecklistImage from './images/archer-pawsitive.jpg';
import archerPupStar from './images/pup-star-archer.jpg';
import module1Image from './images/module-1.jpg';
import module2Image from './images/module-2.jpg';
import bonusModuleImage from './images/module-bonus.jpg';

export const courseMetadata = {
  title: 'Paws-itive Grooming',
  description:
    "Make grooming easier with Paw Parent Academy's Paws-itive Grooming course. Learn behavior techniques to keep your dog calm and happy during grooming at home.",
  canonicalUrl: 'https://www.pawparentacademy.com/courses/paws-itive-grooming',
};

export const heroContent = {
  title: 'Paws-itive Grooming',
  description: 'Learn How to Make Grooming a Positive Experience for You and Your Dog.',
  ctaLabel: 'Enroll Now ($68)',
  ctaHref: 'https://enroll.pawparentacademy.com/offers/paws-itive-grooming/checkout',
  backgroundImage: heroImage,
};

export const fitChecklistContent = {
  heading: 'Are We Barking Up the Right Tree?',
  checklist: [
    "You're a proud paw parent to an adorable pooch.",
    "You know that grooming is key to your pet's wellbeing and want them to feel at ease throughout the process.",
    'Your furry friend gets nervous during essential grooming tasks and you want to help.',
    "You're eager to teach your puppy to be comfortable with grooming right from the start.",
    'Visits to the vet and groomer feel stressful for both you and your pup.',
    'Your anxious or senior pup needs extra care to make grooming easier.',
    'You want grooming to be a positive bonding experience for you and your dog.',
  ],
  image: {
    src: fitChecklistImage,
    alt: 'Groomer Nadia Bongelli harnessing an elderly dog in a sling.',
  },
};

export const featureHighlights = [
  {
    iconSrc: nailsIcon,
    title: 'Make Positive Connections',
    description: 'Help your pup learn to feel good about essential grooming tasks.',
  },
  {
    iconSrc: nailClippersIcon,
    title: 'Overcome Grooming Fears',
    description: 'Teach your dog that nail trims and grooming are nothing to fear.',
  },
  {
    iconSrc: dogIcon,
    title: 'Customize the Groom',
    description: "Learn to customize the grooming process for your pet's unique needs.",
  },
];

export const mascotSpotlight = {
  heading: 'Meet Your Course Pup Star',
  pupName: 'Archer the Bedlington Terrier',
  bullets: [
    'A playful puppy learning to love grooming',
    'Proud of his white, fluffy, cloud-like coat',
    'Working hard to compete in grooming shows with his mom, award-winning groomer Nadia Bongelli',
  ],
  image: {
    src: archerPupStar,
    alt: 'Expert Groomer Nadia Bongelli grooming Archer the Bedlington Terrier.',
  },
};

export const videoSample = {
  heading: 'Watch a Course Sample',
  description: 'Take a peek at the pup-friendly behavior tips included in every lesson.',
  videoSrc:
    'https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/pawsitive-grooming.mp4',
  posterSrc:
    'https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/pawsitive-grooming.jpg',
};

export const overviewContent = {
  heading: 'Learn How to Make Grooming Fun with Easy-to-Follow Online Lessons',
  body:
    "Follow along with short videos that you can re-watch as often as you like. Each module also includes helpful instructions, tip sheets and training guides.",
};

export const modules = [
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

export const faqItems: AccordionItem[] = [
  {
    question: 'Do I need prior experience in dog behavior training?',
    answerHtml:
      '<p>Not at all! This course is designed for dog parents looking to learn practical behavior tips that make grooming easier for both parent and pup.</p>',
  },
  {
    question: 'Which breeds is this course suitable for?',
    answerHtml: '<p>This course is perfect for all dogs!</p>',
  },
  {
    question: 'How much will it cost to buy the equipment to groom my dog?',
    answerHtml:
      "<p>All you need to create a positive grooming experience for your dog is their favorite treats!</p>",
  },
  {
    question: 'My dog is terrified to go to the groomers. Will this course help?',
    answerHtml:
      '<p>Grooming your dog may be the perfect solution for you if your dog is uncomfortable going to the groomer. You’ll be able to control the environment so your dog feels comfortable and you can give your dog lots of breaks if needed. The course will walk you through all the steps to get your dog comfortable with the grooming process.</p>',
  },
  {
    question: 'How can I determine if I have sufficient physical strength to groom my own dog?',
    answerHtml:
      '<p>You’ll want to have good grip strength for tool handling and be comfortable standing for longer periods. You’ll learn great tips in the course to set up an ergonomic and comfortable grooming station for you and your pet.</p>',
  },
];

export const finalCtaContent = {
  eyebrow: '14-DAY MONEY-BACK GUARANTEE',
  heading: 'Make Grooming Easier for Your Dog!',
  description:
    'Turn every grooming session into a bonding moment with step-by-step lessons and pup-approved behavior strategies.',
  ctaLabel: heroContent.ctaLabel,
  ctaHref: heroContent.ctaHref,
  backgroundImage:
    'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2159797494/settings_images/bb4288-a4ac-72c7-048a-862f27c76ff0_hero-yorkie.jpg',
};

export const videoSchema = {
  '@context': 'http://schema.org/',
  '@type': 'VideoObject',
  name: 'Paws-itive Grooming Course Sample',
  description: 'A Kajabi-hosted sample video that previews the Paws-itive Grooming course.',
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
    price: '68',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
    url: courseMetadata.canonicalUrl,
  },
};
