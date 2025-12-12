import bathIcon from '../images/bathe-icon.png';
import coatIcon from '../images/coat-icon.png';
import curryIcon from '../images/curry-icon.png';
import nailsIcon from '../images/nails-icon.png';
import heroImage from './images/hero-pug.jpg';
import bonusModuleImage from './images/module-bonus.jpg';
import module4Image from './images/module-brushing.jpg';
import module1Image from './images/module-intro.jpg';
import module5Image from './images/module-nails-ears-teeth.jpg';
import module3Image from './images/module-safe.jpg';
import module2Image from './images/module-space.jpg';
import module6Image from './images/modules-bathing.jpg';
import fitChecklistImage from './images/pug-nadia.jpg';
import chumleyPupStar from './images/pug-pup-star.jpg';
import type { AccordionItem } from '@/components/AccordionGroup';

export const courseMetadata = {
  title: 'How to Groom a Pug',
  description:
    'Learn how to groom your Pug at home! Keep your dog\'s wrinkles clean, coat smooth, and shedding under control with Paw Parent Academy\'s course. Enroll now!',
  canonicalUrl: 'https://www.pawparentacademy.com/courses/how-to-groom-a-pug',
};

export const heroContent = {
  title: 'How to Groom a Pug',
  description: 'Learn How to Groom Your Pug, Bully or Other Short-Coated Dog at Home.',
  ctaLabel: 'Enroll Now ($248)',
  ctaHref: 'https://enroll.pawparentacademy.com/offers/how-to-groom-a-pug/checkout',
  backgroundImage: heroImage,
};

export const fitChecklistContent = {
  heading: 'Are We Barking Up the Right Tree?',
  checklist: [
    'You are the proud paw parent of a Pug, Bully or other short-coated dog.',
    'Keeping your dog healthy and happy is your top priority.',
    'You want to learn how to reduce your dog\'s odor with maintenance grooming.',
    "You want to stay on top of your dog's health including taking steps to prevent infections.",
    'Learning a new skill with your fur baby sounds like fun.',
  ],
  image: {
    src: fitChecklistImage,
    alt: 'Chumley the Pug with Nadia Bongelli',
  },
};

export const featureHighlights = [
  {
    iconSrc: nailsIcon,
    title: 'Master Nail Trims',
    description: 'Learn pro techniques to make the nail trimming process a breeze.',
  },
  {
    iconSrc: coatIcon,
    title: 'Maintain a Healthy Coat',
    description: 'Prevent the buildup of dead hair by learning proper brushing techniques.',
  },
  {
    iconSrc: bathIcon,
    title: 'Bathe and Dry Like a Pro',
    description: 'Carefully clean your dog, including under sensitive folds and wrinkles.',
  },
  {
    iconSrc: curryIcon,
    title: 'Finishing Touches',
    description: 'Give your pup a perfect, shiny coat with a final deshedding process.',
  },
];

export const mascotSpotlight = {
  heading: 'Meet Your Course Pup Star',
  pupName: 'Chumley the Pug',
  bullets: [
    'Has an adorable curly tail and a great smile.',
    "Full of charm and personality and can't stop snorting.",
    'Looks and smells better when his wrinkles are clean.',
    'Could benefit from more maintenance grooming at home.',
  ],
  image: {
    src: chumleyPupStar,
    alt: 'Chumley the pug getting ready to be groomed',
  },
};

export const videoSample = {
  heading: 'Watch a Course Sample',
  description: 'Peek at a real short-coat lesson pulled straight from the course.',
  videoSrc:
    'https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/pugs-and-short-coats.mp4',
  posterSrc:
    'https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/pugs-and-short-coats.jpg',
};

export const overviewContent = {
  heading: 'Learn How to Groom a Pug with Easy-to-Follow Online Lessons',
  body:
    'The grooming process is broken down into short videos that you can re-watch as often as you like. You can also follow along with step-by-step grooming guides and tool lists. ',
};

export const modules = [
  {
    title: 'Module 1',
    subtitle: 'Grooming Basics',
    description:
      'Discover your short-coated dog\'s unique grooming needs including what a proper grooming routine looks like and how you can use the grooming experience to monitor health.',
    image:
      module1Image,
  },
  {
    title: 'Module 2',
    subtitle: 'Your Grooming Space',
    description:
      "Learn how to set up safe and efficient grooming and bathing areas for you and your pet. We'll walk you through the exact setup you need for a smooth grooming process.",
    image:
      module2Image,
  },
  {
    title: 'Module 3',
    subtitle: 'Safe Grooming',
    description:
      'We know you have safety top of mind and so do we! Learn the techniques and equipment you should be using to prevent injuries.',
    image:
      module3Image,
  },
  {
    title: 'Module 4',
    subtitle: 'Brushing a Short Coat',
    description:
      'Discover which tools you should be using for each step of the grooming process. Get shedding under control and learn how to make the brushing experience an enjoyable one.',
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
    title: 'Bonus Module',
    subtitle: 'Canine Communication',
    description:
      'Learn to recognize early signs of stress and discover tricks for helping your dog through the grooming process.',
    image: bonusModuleImage,
  },
];

export const faqItems: AccordionItem[] = [
  {
    question: 'Do I need prior experience?',
    answerHtml:
      'Not at all! You can learn how to groom your pug with no prior experience grooming dogs. There will be no complicated terminology or techniques skipped over - plus you’ll be able to watch each technique as often as you like.',
  },
  {
    question: 'Which breeds is this course suitable for?',
    answerHtml:
      'This course is perfect for learning to groom and deshed a short-coated dog with an undercoat such as Pugs, Bulldogs and other Bully breeds.',
  },
  {
    question: 'Is this course appropriate for large breeds?',
    answerHtml:
      'Yes - this course is appropriate for any short-haired breed with an undercoat, from tiny chihuahuas to boxers!',
  },
  {
    question: 'How much will it cost to buy the equipment to groom my dog?',
    answerHtml:
      "What you invest in your grooming setup depends on how much of the groom you’d like to do. For instance, if you're going to bathe and dry your pup, you'll need dog-safe shampoo, conditioner and a dryer. The investment you put into your equipment will pay for itself as your professional grooming expenses are reduced or eliminated altogether.",
  },
  {
    question: 'My dog is terrified to go to the groomers. Will this course help?',
    answerHtml:
      'Grooming your dog may be the perfect solution for you if your dog is uncomfortable going to the groomer. You’ll be able to control the environment so your dog feels comfortable and you can give your dog lots of breaks if needed. The course will walk you through all the steps to get your dog comfortable with the grooming process.',
  },
  {
    question: 'How can I determine if I have sufficient physical strength to groom my own dog?',
    answerHtml:
      'You’ll want to have good grip strength for tool handling and be comfortable standing for longer periods. You’ll learn great tips in the course to set up an ergonomic and comfortable grooming station for you and your pet.',
  },
  {
    question: 'I have another dog with a different coat type. Will this course teach me everything I need to know?',
    answerHtml:
      'Paw Parent Academy has a unique course for each coat type. You’ll want to review the courses and choose one that aligns with your dog’s coat. If you need help choosing simply email <a href="mailto:info@pawparentacademy.com">info@pawparentacademy.com</a>. Plus, if you enroll in multiple courses we offer a special discount. Just reach out to us for more details!',
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
  'name': 'How to Groom a Pug Course Sample',
  'description': 'A Kajabi-hosted video sample that previews the How to Groom a Pug course.',
  'duration': 'PT1M3S',
  'uploadDate': '2025-02-28T17:54:24.000Z',
  'thumbnailUrl':
    'https://embed-ssl.wistia.com/deliveries/32ebc5c2cdf2ac7968bc9f13676e7a29006605ff.jpg?image_crop_resized=640x360',
  'embedUrl': videoSample.videoSrc,
  'contentUrl': videoSample.videoSrc,
};

export const courseSchema = {
  '@context': 'https://schema.org/',
  '@type': 'Course',
  'name': courseMetadata.title,
  'description': courseMetadata.description,
  'provider': {
    '@type': 'Organization',
    'name': 'Paw Parent Academy',
    'sameAs': 'https://www.pawparentacademy.com',
  },
  'offers': {
    '@type': 'Offer',
    'price': '248',
    'priceCurrency': 'USD',
    'availability': 'https://schema.org/InStock',
    'url': courseMetadata.canonicalUrl,
  },
};
