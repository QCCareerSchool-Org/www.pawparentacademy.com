import type { AccordionItem } from '@/components/AccordionGroup';
import coatIcon from '../images/coat-icon.png';
import brushIcon from '../images/brush-icon.png';
import dogIcon from '../images/dog-icon.png';
import heroImage from './images/hero-de-shedding-no-bg.jpg';
import module1Image from './images/module-1.jpg';
import module2Image from './images/module-2.jpg';
import bonusModuleImage from './images/modules-bonus.jpg';
import fitChecklistImge from './images/Ollie deshed.jpg';
import OlliePupStar from './images/ollie-pup-star.jpg';


export const courseMetadata = {
  title: 'Deshedding Mastery',
  description:
    "Learn effective deshedding techniques with Paw Parent Academy's online course. Keep your dog's coat healthy, reduce shedding, and keep a clean home. Enroll Now!",
  canonicalUrl: 'https://www.pawparentacademy.com/courses/deshedding-mastery',
};

export const heroContent = {
  title: 'Deshedding Mastery',
  description: "Learn How to Deshed Your Aussie, Retriever, or Other Double-Coated Dog at Home.",
  ctaLabel: 'Enroll Now ($68)',
  ctaHref: '/resource_redirect/offers/FvrF2AjN',
  backgroundImage: heroImage,
};

export const fitChecklistContent = {
  heading: 'Are We Barking Up the Right Tree?',
  checklist: [
    'You have an Aussie, Golden Retriever, Bernese Mountain Dog or other pup with a thick double coat.',
    "Making sure your dog's coat stays healthy and mat-free is important to you.",
    'You want to prevent hot spots and other skin irritations that can come with a thick, tangled coat.',
    "Keeping your pup's shedding under control without constantly reaching for the vacuum sounds like a dream come true.",
    "You're excited to spend more quality time with your dog while learning a new skill.",
    "You want to be your dog's #1 groomer!",
  ],
  image: {
    src: fitChecklistImge,
    alt: 'Grooming expert Nadia Bongelli brushing an Australian Shepherd.',
  },
};

export const featureHighlights = [
  {
    iconSrc: coatIcon,
    title: 'Maintain a Healthy Coat',
    description: 'Prevent mats, knots, and tangles for a healthy finish.',
  },
  {
    iconSrc: brushIcon,
    title: 'Manage Shedding',
    description: 'Learn the best ways to reduce shedding and keep hair off the couch.',
  },
  {
    iconSrc: dogIcon,
    title: 'Build a Routine',
    description: 'Find the perfect brushing routine so your pet looks and feels great.',
  },
];

export const mascotSpotlight = {
  heading: 'Meet Your Course Pup Star',
  pupName: 'Ollie the Australian Shepherd',
  bullets: [
    'Enjoys a good ear rub',
    "Always is a 'happy boy'",
    'Loves to play with his friends',
  ],
  image: {
    src: OlliePupStar,
    alt: 'Ollie the Australian Shepherd posing for the Deshedding Mastery course.',
  },
};

export const videoSample = {
  heading: 'Watch a Course Sample',
  description: 'Take a quick look inside the Deshedding Mastery lessons.',
  videoSrc:
    'https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/deshedding.mp4',
  posterSrc:
    'https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/deshedding.jpg',
};

export const overviewContent = {
  heading: 'Learn How to Deshed Your Dog with Easy-to-Follow Online Lessons',
  body:
    "The deshedding process is broken down into short videos that you can re-watch as often as you like. You'll also enjoy helpful tip sheets including a brushing guide and tool list!",
};

export const modules = [
  {
    title: 'Module 1',
    subtitle: 'Introduction to Deshedding',
    description:
      "Discover why deshedding is crucial for your dog's coat and skin health. Then, learn how to set up an ideal grooming station at home.",
    image: module1Image,
  },
  {
    title: 'Module 2',
    subtitle: 'The Deshedding Process',
    description:
      "Find out the most effective tools and techniques to thoroughly deshed your pup's thick double coat and prevent matting.",
    image: module2Image,
  },
  {
    title: 'Bonus Content',
    subtitle: 'Downloadable Guides',
    description:
      'Say goodbye to hair EVERYWHERE! Enjoy bonus downloadables that outline what you need to get the job done and the entire deshedding process.',
    image: bonusModuleImage,
  },
];

export const faqItems: AccordionItem[] = [
  {
    question: 'Why is my dog shedding so much?',
    answerHtml:
      "<p>Regular shedding is your dog's natural way of getting rid of old or damaged fur. It helps regulate body temperature, keep the coat healthy, and adapt to seasonal changes.</p>",
  },
  {
    question: 'Which breeds is this course suitable for?',
    answerHtml:
      "<p>This course is perfect for dogs with thick double coats such as Australian Shepherds, Golden Retrievers, Bernese Mountain Dogs, and similar breeds.</p>",
  },
  {
    question: 'How much will it cost to buy the equipment to groom my dog?',
    answerHtml:
      "<p>That's up to you! A small selection of brushes and deshedding tools is all you need to master the process. You may choose to invest in a grooming table, but even a basic toolkit will save money versus frequent salon visits.</p>",
  },
  {
    question: 'My dog is terrified to go to the groomers. Will this course help?',
    answerHtml:
      '<p>Yes. Grooming at home lets you control the environment so your dog stays comfortable. You can move at their pace, add breaks, and keep the experience positive with the tips shared in the course.</p>',
  },
  {
    question: 'How can I determine if I have sufficient physical strength to groom my own dog?',
    answerHtml:
      '<p>You will want solid grip strength for brush handling and to feel comfortable standing for longer sessions. The course shares ergonomic setup advice so you and your pup stay comfortable.</p>',
  },
  {
    question: 'I have another dog with a different coat type. Will this course teach me everything I need to know?',
    answerHtml:
      "<p>Paw Parent Academy has a unique course for each coat type. Email <a href='mailto:info@pawparentacademy.com'>info@pawparentacademy.com</a> for guidance and bundle discounts if you enroll in more than one course.</p>",
  },
];

export const finalCtaContent = {
  eyebrow: '14 DAY MONEY-BACK GUARANTEE',
  heading: 'Tired of Dog Hair? Deshed Like a Pro!',
  description: 'Enroll now to keep shedding under control with step-by-step lessons and printable guides.',
  ctaLabel: heroContent.ctaLabel,
  ctaHref: heroContent.ctaHref,
  backgroundImage:
    'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2159797494/settings_images/c01c7c6-bdb8-c06-3dcd-5a5b55fb86_bad1c67a-00c8-4a1e-88bc-cd6cd3069d84.jpg',
};

export const videoSchema = {
  '@context': 'http://schema.org/',
  '@type': 'VideoObject',
  name: 'Deshedding Mastery Course Sample',
  description: 'A Kajabi-hosted sample video that previews the Deshedding Mastery course.',
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
