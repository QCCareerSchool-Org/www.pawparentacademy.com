import heroImage from './images/hero-image-test-1.jpg';
import valueImage3 from './images/bond-1.jpg';
import valueImage2 from './images/skillled-1.jpg';
import valueImage1 from './images/save-2.jpg';
import meaghan from './images/Meaghan.jpg';
import jason from './images/jason.jpg';
import monica from './images/Monica with Pepe the Biewer Yorkie.jpg';
import mike from './images/Mike with Ollie the Pughuahua.jpg';
import sara from './images/Sarah with Timothy the Dachshund.jpg';
import nadia from './images/nadia.jpg';
import heartBookIcon from './images/heart-book-icon.png';
import checklistIcons from './images/checklist-icon.png';
import scissorsIcon from './images/scissors-icon.png';
import calendarCheckIcon from './images/calendar-check.jpg';

export const heroContent = {
  headline: "Be Your Dog’s Favorite Groomer",
  subheading: "Learn How to Groom Your Dog From Home Today!",
  ctaLabel: "Explore Courses",
  ctaHref: "/courses",
  backgroundImage: heroImage,
};

export const introContent = {
  eyebrow: "Step-by-Step Online Training",
  title: "Designed for Pet Parents",
  body:
    "Grooming your dog at home has never been easier—or more rewarding! With our courses, you’ll save money on expensive grooming appointments, learn professional techniques from an award-winning groomer, and deepen the bond with your furry best friend. Designed for loving pet parents, each step-by-step course includes coat-specific guidance to ensure your dog looks and feels their best, all while creating a calm, stress-free grooming experience.",
};

export const valueProps = [
  {
    title: "Save Money",
    description: "Cut down on expensive grooming bills and enjoy the convenience of grooming from home.",
    image: valueImage1,
    alt: "Yorkie with a piggy bank",
  },
  {
    title: "Learn a New Skill",
    description: "Master step-by-step grooming techniques tailored to your dog’s breed.",
    image: valueImage2,
    alt: "Groomer trimming a Shih Tzu",
  },
  {
    title: "Bond with Your Pet",
    description: "Create a stress-free grooming routine that brings you closer to your pet.",
    image: valueImage3,
    alt: "Dog owner hugging a golden retriever",
  },
];

export const courseFinderContent = {
  title: "Find Your Course",
  subtitle: "Start DIY Grooming Today",
  description:
    "Learn how to care for your dog’s unique coat with our easy, coat-specific DIY grooming courses made for pet parents.",
  bullets: [
    "Master nail trims at home",
    "Learn the right brushing techniques for your dog's coat",
    "Prevent matting, hot spots & other health issues",
    "Groom your dog like a pro with stress-free techniques",
    "Achieve pro-level trims and haircuts right at home",
  ],
  ctaLabel: "Browse All Courses",
  ctaHref: "/courses",
  highlight: {
    badge: "Most Popular",
    title: "Teddy Bear Cuts",
    description:
      "Give your pup an adorable, plush teddy bear cut from the comfort of home. This course is perfect for Shih Tzus, Lhasa Apsos, and all fluffy-coated breeds!",
    image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2160217297/settings_images/5737d07-660a-a313-7535-80dc6f2c7aec_teddy-bear--thumb.jpg",
    imageAlt: "Instructor Nadia with a goldendoodle",
    primaryCtaLabel: "Enroll Now ($248)",
    primaryCtaHref: "https://enroll.pawparentacademy.com/offers/teddy-bear-cuts/checkout",
    secondaryLinkLabel: "Learn More",
    secondaryLinkHref: "/courses/teddy-bear-cuts",
  },
};

export const testimonials = [
  {
    name: "Meaghan & Duke",
    quote:
      "Trimming my dogs' nails at home doesn't feel like an overwhelming proposition anymore. I feel confident and equipped to give my dogs the care they need. I highly recommend this course!",
    image: meaghan,
    alt: "Meaghan smiling with Duke",
  },
  {
    name: "Jason & Dozer",
    quote:
      "I especially like learning about the right tools to use and how to make sure my dog is comfortable around those tools. I feel a lot more confident trimming my dog's nails!",
    image: jason,
    alt: "Jason holding Dozer the dog",
  },
  {
    name: "Monica & Pepe",
    quote:
      "Comprehensive and easy to follow. The content is well-structured, breaking down the grooming process into clear, manageable modules based on different dog hair types and specific grooming steps. The instructor provided lots of tips & tricks, and the adorable dog modules are a bonus.",
    image: monica,
    alt: "Monica with Pepe the Biewer Yorkie",
  },
  {
    name: "Mike & Ollie",
    quote:
      "It was getting harder and harder to leave my senior dog at the groomer for nail trims and baths. This course taught us everything we need to take care of her at home without the stress of leaving her. We even learned great tips for grooming a senior dog!",
    image: mike,
    alt: "Mike holding Ollie the dog",
  },
  {
    name: "Sara & Timothy",
    quote:
      "I wanted to get my new puppy off to the right start with grooming. With my Paw Parent Academy course, I not only learned how to keep my puppy's nails, teeth and coat well maintained, I also learned how to make him feel comfortable with grooming.",
    image: sara,
    alt: "Sara with Timothy the dachshund",
  },
];

export const mentorSpotlight = {
  name: "Nadia Bongelli",
  title: "Nationally Certified Master Groomer",
  description: [
    "Nadia is a highly acclaimed industry leader whose journey began as a devoted paw parent. Grooming her own dog sparked a passion that led her to the top of the industry.",
    "She has been ranked among the top competitive groomers since 2018, earned the prestigious Barkleigh Honors Groomer of the Year award in 2024, and secured second place at Belgium's 2024 World Grooming Championships.",
  ],
  image: nadia,
  imageAlt: "Nadia Bongelli smiling with a dog",
};

export const safetyFeatures = [
  {
    title: "Self-Directed",
    description: "Complete the course at your own pace with lifetime access.",
    icon: calendarCheckIcon,
    alt: "Calendar icon",
  },
  {
    title: "Tools of the Trade",
    description: "Discover the best tools for your dog's breed and coat type.",
    icon: scissorsIcon,
    alt: "Pair of scissors icon",
  },
  {
    title: "Easy to Follow",
    description: "Follow step-by-step instructions for the entire grooming process.",
    icon: checklistIcons,
    alt: "Checklist icon",
  },
  {
    title: "Bonus Guides",
    description: "Enjoy bonus guides that you can refer to as you're grooming.",
    icon: heartBookIcon,
    alt: "Book with heart icon",
  },
];
