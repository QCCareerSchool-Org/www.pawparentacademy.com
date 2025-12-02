import type { AccordionItem } from '@/components/AccordionGroup';
import bathIcon from '../images/bathe-icon.png';
import coatIcon from '../images/coat-icon.png';
import nailsIcon from '../images/nails-icon.png';
import trimsIcon from '../images/trims-icon.png';
import heroImage from './images/yorkie-coats-no-bg.jpg';
import yorkiePupStar from './images/yorkie-pup-star.jpg';
import module1 from './images/module-1.jpg';
import module2 from './images/module-2.jpg';
import module3 from './images/module-3.jpg';
import module4 from './images/module-4.jpg';
import module5 from './images/module-5.jpg';
import module6 from './images/module-6.jpg';
import module7 from './images/module-7.jpg';
import module8 from './images/modules-bonus.jpg';
import yorkieChecklist from './images/yorkie-checklist.jpg';

export const courseMetadata = {
  title: 'How to Groom a Yorkie',
  description:
    'Learn how to groom your Yorkie at home! Trim your dog\'s silky coat, prevent tangles, and keep her looking stylish with Paw Parent Academy\'s course.',
  canonicalUrl: 'https://www.pawparentacademy.com/courses/how-to-groom-a-yorkie',
};

export const heroContent = {
  title: 'How to Groom a Yorkie',
  description: 'Learn How to Groom a Yorkie, Morkie or Maltese at Home.',
  ctaLabel: 'Enroll Now ($248)',
  ctaHref: '/resource_redirect/offers/M8B9bLhc',
  backgroundImage: heroImage,
};

export const fitChecklistContent = {
  heading: 'Does this Sound Like You?',
  checklist: [
    'You are the proud paw parent of a Yorkie, Maltese or other silky-coated dog.',
    'Keeping your dog healthy and happy is your top priority.',
    "Your dog's long and silky coat means regular trips to the groomer.",
    'Saving money while pampering your dog gets your tail wagging.',
    'Bonding with your small and mighty friend is important to you.',
    'You’d never miss a chance to catch potential health concerns early.',
    "You're ready to be your pup's personal stylist!",
  ],
  image: {
    src: yorkieChecklist,
    alt: 'Yorkie about to be groomed.',
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
    description: "Learn how to keep your pup's high-maintenance coat smooth and silky.",
  },
  {
    iconSrc: bathIcon,
    title: 'Bathe and Dry Like a Pro',
    description: 'Learn professional techniques for a clean and happy pet.',
  },
  {
    iconSrc: trimsIcon,
    title: 'Create Adorable Trims',
    description: 'See how you can create an adorable teddy bear cut on your dog.',
  },
];

export const mascotSpotlight = {
  heading: 'Meet Your Course Pup Star',
  pupName: 'Abby the Yorkie',
  bullets: [
    'Loves to snuggle.',
    'A natural teddy bear cut is her signature look.',
    'A seasoned pup in the salon but ready to retire to home grooming.',
  ],
  image: {
    src: yorkiePupStar,
    alt: "Grooming expert, Nadia Bongelli, trimming a Yorkie's ears.",
  },
};

export const videoSample = {
  heading: 'Watch a Course Sample',
  description: 'Peek inside the Yorkie lessons with a real clip pulled from the course.',
  videoSrc: 'https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/abby.mp4',
  posterSrc: 'https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/abby.jpg',
};

export const overviewContent = {
  heading: 'Learn How to Groom a Yorkie with Easy-to-Follow Online Lessons',
  body:
    'The grooming process is broken down into short videos that you can re-watch as often as you like. Your course also includes helpful grooming instructions, tip sheets and tool guides!',
};

export const modules = [
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
    description:
      "Learn how to set up safe and efficient grooming and bathing areas for you and your pet. We'll walk you through the exact setup you need for a smooth grooming process.",
    image: module2,
  },
  {
    title: 'Module 3',
    subtitle: 'Safe Grooming',
    description:
      "We know you have safety top of mind and so do we! Learn the techniques and equipment you should be using to prevent injuries.",
    image: module3,
  },
  {
    title: 'Module 4',
    subtitle: 'Brushing a Silky Coat',
    description:
      "Discover which tools you should be using for each area of your dog. Master mats and tangles and learn how to make the brushing experience an enjoyable one.",
    image: module4,
  },
  {
    title: 'Module 5',
    subtitle: 'Nails, Eyes, Ears and Teeth',
    description:
      "Find out what your dog's maintenance schedule should be and learn proper nail, eye, ear and teeth-cleaning techniques.",
    image: module5,
  },
  {
    title: 'Module 6',
    subtitle: 'Bathing and Drying',
    description:
      'Splish splash - it\'s time for a bath! Learn how to effectively bathe and dry your pet including our expert\'s best tip for keeping yourself dry during the process.',
    image: module6,
  },
  {
    title: 'Module 7',
    subtitle: 'The Teddy Bear Trim',
    description:
      'Learn how to safely use scissors and clippers before diving into the complete grooming process. Let your creativity shine as you create the cutest teddy bear cut on your pooch!',
    image: module7,
  },
  {
    title: 'Bonus Module',
    subtitle: 'Canine Communication',
    description:
      'Find out what your Yorkie is really trying to tell you. Observe signals early on so you can make the grooming process easier for you and your pet.',
    image: module8,
  },
];

export const faqItems: AccordionItem[] = [
  {
    question: 'Do I need prior experience?',
    answerHtml:
      'Not at all! You can learn how to groom your Yorkie, Morkie or Maltese with no prior experience grooming dogs. There will be no complicated terminology or techniques skipped over - plus you’ll be able to watch each technique as often as you like.',
  },
  {
    question: 'Is this course appropriate for all silky-coated breeds?',
    answerHtml:
      "Yes! This course is perfect for mastering the teddy bear cut on your Yorkie, Morkie, Maltese, or any other silky-coated mix. You'll learn all the essential techniques to create the perfect Yorkie haircuts and keep your silky pup looking adorable!",
  },
  {
    question: 'Which Yorkie haircuts will I learn in this course?',
    answerHtml:
      "This course is all about mastering the adorable Yorkie teddy bear cut! You'll learn how to create the signature round face, trim the body for a soft, fluffy look, and shape neatly rounded paws. This popular style keeps your Yorkie looking irresistibly cute while making grooming easier. The teddy bear cut is a favorite among pet owners because this short Yorkie haircut helps prevent mats and tangles on the body while keeping the face and tail longer for that classic, silky Yorkie style!",
  },
  {
    question: 'How much will it cost to buy the equipment to groom my dog?',
    answerHtml:
      "What you invest in your grooming setup depends on how much of the groom you’d like to do. For instance, if you're going to complete the trim on your pet you’ll need to purchase clippers and shears. The investment you put into your equipment will pay for itself as your professional grooming expenses are reduced or eliminated altogether.",
  },
  {
    question: 'My dog is terrified to go to the groomer. Will this course help?',
    answerHtml:
      "Grooming your dog may be the perfect solution for you if your dog is uncomfortable going to the groomer. You’ll be able to control the environment so your dog feels comfortable and you can give your dog lots of breaks if needed. The course will walk you through all the steps to get your dog comfortable with the grooming process.",
  },
  {
    question: 'I have another dog with a different coat type. Will this course teach me everything I need to know?',
    answerHtml:
      "Paw Parent Academy has a unique course for each coat type. You’ll want to review the courses and choose one that aligns with your dog’s coat. If you need help choosing simply email <a href=\"mailto:info@pawparentacademy.com\">info@pawparentacademy.com</a>. Plus, if you enroll in multiple courses, we offer a special discount—just reach out to us for more details!",
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
  name: 'How to Groom a Yorkie Course Sample',
  description: 'A Kajabi hosted video sample that previews the How to Groom a Yorkie course.',
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
