import type { AccordionItem } from '@/components/AccordionGroup';
import nailsIcon from '../images/nails-icon.png';
import nailClippersIcon from '../images/nail-clippers-icon.png';
import dogIcon from '../images/dog-icon.png';
import heroImage from './images/hero-nail-trimmingv-2.jpg';
import module1Imgae from './images/module-1.jpg';
import module2Image from './images/module-2.jpg';
import module3Image from './images/module-3.jpg';
import module4Image from './images/module-bonus.jpg';
import fitChecklistImage from './images/nail-trimming.jpg';

export const courseMetadata = {
  title: 'Nail Trims Made Easy',
  description:
    'Learn safe and easy nail trimming techniques with Paw Parent Academy. Keep your dog comfortable and confident during at-home grooming.',
  canonicalUrl: 'https://www.pawparentacademy.com/courses/nail-trims-made-easy',
};

export const heroContent = {
  title: 'Nail Trims Made Easy',
  description: 'Learn How to Cut Your Dog’s Nails at Home.',
  ctaLabel: 'Enroll Now ($68)',
  ctaHref: '/resource_redirect/offers/BZSKFNXJ',
  backgroundImage: heroImage,
};

export const fitChecklistContent = {
  heading: 'Did We Nail It?',
  checklist: [
    "You're the loving pet parent of the cutest dog around.",
    'Keeping your pooch comfortable and free from overgrown nails is important to you.',
    'You want to take the stress out of nail trimming for both you and your pup.',
    'Saving money with fewer trips to the groomer sounds like a real treat.',
    "You want to trim your dog's nails safely without cutting the quick.",
    "You're ready to give your dog the ultimate pet-icure!",
  ],
  image: {
    src: fitChecklistImage,
    alt: 'Diagram explaining a dog\'s dew claw',
  },
};

export const featureHighlights = [
  {
    iconSrc: nailsIcon,
    title: 'Enjoy No-Fear Nail Trims',
    description: "Make cutting your dog's nails a positive experience for you and your pup.",
  },
  {
    iconSrc: nailClippersIcon,
    title: 'Avoid Cutting the Quick',
    description: 'Master comfortable, pain-free trims with expert tips from a pro groomer.',
  },
  {
    iconSrc: dogIcon,
    title: 'Master Dog Handling',
    description: 'Learn the right way to handle your dog for easy, stress-free nail trims.',
  },
];

export const videoSample = {
  heading: 'Watch a Course Sample',
  description: undefined,
  videoSrc:
    'https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/nail-trimming.mp4',
  posterSrc:
    'https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/nail-trimming.jpg',
};

export const overviewContent = {
  heading: "Learn How to Cut Your Dog's Nails with Easy-to-Follow Online Lessons",
  body:
    'Master the nail trimming process through bite-sized videos that you can re-watch as often as you like. You\'ll also learn from step-by-step instructions, tip sheets, and curated tool lists inside every module.',
};

export const modules = [
  {
    title: 'Module 1',
    subtitle: 'Introduction to Nail Trimming',
    description:
      'Discover the ideal nail-care routine and learn how to get your dog comfortable with nail trims through expert tips and handling tricks.',
    image: module1Imgae,
  },
  {
    title: 'Module 2',
    subtitle: 'Preparation',
    description:
      "Learn to set up a safe and efficient grooming space, plus choose the best clippers and tools to cut your dog's nails like a pro.",
    image: module2Image,
  },
  {
    title: 'Module 3',
    subtitle: 'Trimming the Nails',
    description:
      'Follow step-by-step demos and learn professional techniques to ensure top-notch nail health with every trim.',
    image: module3Image,
  },
  {
    title: 'Bonus Content',
    subtitle: 'Downloadable Guides',
    description:
      "Gain confidence with three bonus guides covering dog handling techniques, essential tools and equipment, and a step-by-step walkthrough of the nail trimming process.",
    image: module4Image,
  },
];

export const faqItems: AccordionItem[] = [
  {
    question: 'Which breeds is this course suitable for?',
    answerHtml:
      "This course is perfect for all dog breeds and sizes! You'll learn how to cut black nails, brown nails and clear nails to the perfect length.",
  },
  {
    question: "What tools do I need to cut my dog's nails at home?",
    answerHtml:
      "To safely and effectively cut your dog's nails at home, you'll simply need dog nail clippers and styptic powder. You may choose to invest in additional tools and equipment, such as a nail grinder and grooming table - but that's entirely up to you! ",
  },
  {
    question: "How often should I trim my dog's nails?",
    answerHtml:
      "Trim your dog's nails every week to prevent discomfort and overgrown nails. Frequent nail trimming allows you to make smaller cuts, which will be more comfortable for your pet!",
  },
  {
    question: "How short should I cut my dog's nails?",
    answerHtml:
      "To encourage healthy nail growth and avoid overgrown nails, cut your dog's nail as close to the quick (the sensitive nerve inside the nail) as possible without cutting the quick. The nails shouldn't touch the floor when your dog is standing. ",
  },
  {
    question: 'My dog hates having his nails trimmed. Will this course help?',
    answerHtml:
      "Absolutely! Our goal is to make nail trims easy and stress-free for both you and your dog. This course will show you the best techniques to trim your dog's nails comfortably and safely to make the experience more enjoyagble for your pet. You'll also learn dog handling methods and training tips that will help your dog feel at ease with the nail trimming process. ",
  },
  {
    question: 'Do I need prior experience?',
    answerHtml:
      "Not at all! You can learn how to cut your dog's nails with no prior experience. There will be no complicated terminology or techniques skipped over - plus you’ll be able to watch each technique as often as you like.",
  },
];

export const finalCtaContent = {
  eyebrow: '14 DAY MONEY-BACK GUARANTEE',
  heading: "Learn How to Cut Your Dog's Nails Today!",
  description: 'Enroll now to access bite-sized lessons, downloadable guides, and pro tips for stress-free trims.',
  ctaLabel: 'Enroll Now ($68)',
  ctaHref: heroContent.ctaHref,
  backgroundImage:
    'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2159797494/settings_images/4266a0b-346b-624-abaa-02dd1d0cb335_hero-nail-trimming.jpg',
};

export const videoSchema = {
  '@context': 'http://schema.org/',
  '@type': 'VideoObject',
  name: 'Nail Trims Made Easy Course Sample',
  description: 'A Kajabi-hosted sample video that previews the Nail Trims Made Easy course.',
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
