import type { AccordionItem } from '@/components/AccordionGroup';
import bathIcon from '../images/bathe-icon.png';
import coatIcon from '../images/coat-icon.png';
import nailsIcon from '../images/nails-icon.png';
import trimsIcon from '../images/trims-icon.png';
import checklistImage from './images/Pepe communication.jpg'
import module1 from './images/modules-1.jpg';
import module2 from './images/modules-2-2.jpg';
import module3 from './images/modules-3-2.jpg';
import module4 from './images/modules-4.jpg';
import module5 from './images/modules-5.jpg';
import module6 from './images/modules-6.jpg';
import module7 from './images/modules-7-2.jpg';
import module8 from './images/modules-8.jpg';
import heroImage from './images/plush-coats-no-bg.jpg'
import pepePupStar from './images/pepe-pupstar.jpg'

export const courseMetadata = {
  title: 'Teddy Bear Cuts',
  description:
    'Learn how to do a teddy bear cut at home! Keep your pup\'s coat fluffy and adorable with Paw Parent Academy\'s step-by-step online grooming course.',
  canonicalUrl: 'https://www.pawparentacademy.com/courses/teddy-bear-cuts',
};

export const heroContent = {
  title: 'Teddy Bear Cuts',
  description: 'Give your Shih Tzu or any fluffy-coated dog a teddy bear cut at home.',
  ctaLabel: 'Add to Cart ($248)',
  ctaHref: 'https://enroll.pawparentacademy.com/offers/teddy-bear-cuts/checkout',
  backgroundImage: heroImage,
};

export const fitChecklistContent = {
  heading: 'Are We Following the Right Scent?',
  checklist: [
    'You have a Shih Tzu, Pomeranian or other fluffy-coated dog.',
    'Providing top-notch pet care while keeping costs down is important.',
    'Your goal is to keep that fluffy coat looking fabulous.',
    'A teddy bear cut is your top pick for a low-maintenance trim that keeps your pet looking adorable.',
    'Spending quality time with your furry friend is a top priority.',
    'Catching health issues right away eases your worry.',
    "You're excited to be your dog’s #1 groomer.",
  ],
  image: {
    src: checklistImage,
    alt: 'Grooming expert Nadia Bongelli trims a Yorkie\'s feet.',
  },
};

export const featureHighlights = [
  {
    iconSrc: nailsIcon,
    title: 'Master No-Fear Nail Trims',
    description: 'Keep your pup calm and their nails perfectly maintained.',
  },
  {
    iconSrc: coatIcon,
    title: 'Maintain a Healthy Coat',
    description: "Prevent mats, knots, and tangles for a healthy, luxurious coat.",
  },
  {
    iconSrc: bathIcon,
    title: 'Bathe and Dry Like a Pro',
    description: 'Learn professional techniques for a clean and happy pet.',
  },
  {
    iconSrc: trimsIcon,
    title: 'Create Adorable Trims',
    description: 'Give your dog an adorable teddy bear cut right at home.',
  },
];

export const mascotSpotlight = {
  heading: 'Meet Your Course Pup Star',
  pupName: 'Pepe the Biewer Terrier',
  bullets: [
    'Loves to give kisses to his adoring fans.',
    'Has a lush coat perfect for a round, teddy bear face.',
    'Prone to tangles under his harness after long walks.',
  ],
  image: {
    src: pepePupStar,
    alt: 'Grooming expert Nadia Bongelli smiling at Pepe the Biewer Terrier.',
  },
};

export const videoSample = {
  heading: 'Watch a Course Sample',
  description: 'Peek inside the Teddy Bear Cuts lessons with a real clip pulled from the course.',
  videoSrc:
    'https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/yorkies.mp4',
  posterSrc:
    'https://47de3d821751073337b6-1b9eff79752112441e95f2296d639dd5.ssl.cf1.rackcdn.com/video-samples/yorkies.jpg',
};

export const overviewContent = {
  heading: 'Learn to Give Your Dog a Teddy Bear Cut with Easy-to-Follow Online Lessons',
  body:
    'Learn the whole grooming process step by step! Follow along with short videos that you can re-watch as often as you like. You can also follow along with helpful grooming guides and product lists.',
};

export const modules = [
  {
    title: 'Module 1',
    subtitle: 'Grooming Basics',
    description:
      'Discover your dog\'s unique grooming needs and develop an ideal grooming routine. Plus, learn how to monitor your pup\'s health through grooming.',
    image: module1,
  },
  {
    title: 'Module 2',
    subtitle: 'Your Grooming Space',
    description:
      "Find out how to setup a safe and efficient grooming space. We'll walk  you through the ideal space and equipment for a stress-free groom.",
    image: module2,
  },
  {
    title: 'Module 3',
    subtitle: 'Safe Grooming',
    description:
      "Safety is our top priority! We'll outline the best ways to work with your pet to create a safe and happy grooming experience.",
    image: module3,
  },
  {
    title: 'Module 4',
    subtitle: 'Brushing a Plush Coat',
    description:
      'Find out which tools are best suited to your dog\'s soft, plush coat. Prevent mats and tangles with proper brushing that\'s comfortable for your pet.',
    image: module4,
  },
  {
    title: 'Module 5',
    subtitle: 'Nails, Eyes, Ears, and Teeth',
    description:
      'Find out what your dog\'s maintenance schedule should include and learn proper nail, eye, ear and teeth-cleaning techniques.',
    image: module5,
  },
  {
    title: 'Module 6',
    subtitle: 'Bathing and Drying',
    description:
      'Discover the best ways to bathe and dry your pup, with expert product picks and an insider trick to keep yourself dry!',
    image: module6,
  },
  {
    title: 'Module 7',
    subtitle: 'The Teddy Bear Trim',
    description:
      'Give your pup star the perfect teddy bear haricut! Learn safe clipping and scissoring techqniues before mastering the complete grooming process.',
    image: module7,
  },
  {
    title: 'Bonus Module',
    subtitle: 'Canine Communication',
    description:
      'Find out what your dog is really trying to tell you. Observe signals early on so you can make the grooming process comfortable and enjoyable for your pup.',
    image: module8,
  },
];

export const faqItems: AccordionItem[] = [
  {
    question: 'What is a teddy bear cut?',
    answerHtml:
      "A teddy bear cut is a popular, low-maintenance haircut perfect for fluffy-coated dogs like Shih Tzus, Pomeranians, Havanese and Biewer Terriers. This cute and cuddly look features a round teddy bear face and fluffy paws with a neatly clipped body, keeping your pup cute, comfortable and easy to groom. In this course, you'll learn everything from how to cut a teddy bear face to shaping those adorable round feet!",
  },
  {
    question: 'Which breeds are a good fit for this course?',
    answerHtml:
      "Any small breed with a soft, fluffy, long-growing coat will look absolutely adorable with a teddy bear cut! For instance, the techniques taught in this course are ideal for achieving a charming Shih Tzu teddy bear cut. Breeds like Shih Tzus, Pomeranians, Havanese, Lhasa Apsos, and Biewer Terriers are all perfect candidates for this grooming style, making this course a great fit for anyone with a fluffy pup! If you're unsure whether this is the right course for your dog, feel free to email us at <a href=\"mailto:info@pawparentacademy.com\">info@pawparentacademy.com</a>. We'll help you choose the perfect course!",
  },
  {
    question: 'Do I need prior experience?',
    answerHtml:
      'Not at all! You can learn how to give your dog a teddy bear cut with no prior experience grooming dogs. There will be no complicated terminology or techniques skipped over - plus you’ll be able to watch each technique as often as you like.',
  },
  {
    question: 'How much will it cost to buy the equipment to groom my dog?',
    answerHtml:
      "What you invest in your grooming setup depends on how much of the groom you’d like to do. For instance, if you're going to complete the trim on your pet you’ll need to purchase clippers and shears. The investment you put into your equipment will pay for itself as your professional grooming expenses are reduced or eliminated altogether.",
  },
  {
    question: 'My dog is anxious about grooming. Can this course help?',
    answerHtml:
      'If your dog feels afraid or anxious at the groomer, grooming at home could be the ideal solution. You’ll have control over the environment, allowing your dog to feel at ease, and you can take plenty of breaks if needed. This course will guide you through every step of the process, from nail trims to achieving the perfect teddy bear cut, helping your dog feel more relaxed and comfortable with grooming.',
  },
  {
    question: 'What if I have another dog with a different coat type?',
    answerHtml:
      'Paw Parent Academy has a unique course for each coat type. You’ll want to review the courses and choose one that aligns with your dog’s coat. If you need help choosing, simply email <a href=\"mailto:info@pawparentacademy.com\">info@pawparentacademy.com</a>. Plus, if you enroll in multiple courses, we offer a special discount—just reach out to us for more details!',
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
  name: 'Teddy Bear Cuts Course Sample',
  description: 'A Kajabi hosted video sample that previews the Teddy Bear Cuts course.',
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
  name: 'Teddy Bear Cuts',
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
