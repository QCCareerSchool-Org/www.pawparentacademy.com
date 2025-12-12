import type { AccordionItem } from '@/components/AccordionGroup';

export interface FAQSectionContent {
  id: string;
  title: string;
  description?: string;
  variant?: 'light' | 'default';
  items: AccordionItem[];
}

export const faqSections: FAQSectionContent[] = [
  {
    id: 'learning',
    title: 'Learning with Paw Parent Academy',
    description:
      'Learn more about our school, explore how our online dog grooming courses work, and find out about our no-risk Money-Back Guarantee.',
    variant: 'light',
    items: [
      {
        question: 'Why should I enroll with Paw Parent Academy?',
        answerHtml:
          '<p>At Paw Parent Academy, we’re dedicated to helping dog owners confidently groom their pets. Our courses are designed for busy pet parents—no experience needed! Developed in collaboration with an industry-leading groomer, our step-by-step video tutorials provide expert guidance to ensure you\'re learning from the very best. With lifetime access, you can learn at your own pace and give your dog the best care.</p>',
      },
      {
        question: 'How can I learn dog grooming techniques if the course is online?',
        answerHtml:
          '<p>Each course at Paw Parent Academy is specifically designed for pet parents. Industry-leading groomer, Nadia Bongelli, will take you step-by-step through each part of the grooming process with detailed video demonstrations. Watch the videos often to review techniques and, as always, practice makes perfect! You\'ll be able to confidently groom your dog in no time.</p>',
      },
      {
        question: 'What if I have never groomed a dog?',
        answerHtml:
          '<p>No worries! Our online dog grooming course is designed with you in mind. Our goal is to help paw parents of all experience levels groom their dogs with confidence. You\'ll learn step-by-step how to safely and confidently groom your dog at home, with easy-to-follow video tutorials and printable how-to guides. We cover everything from basic brushing and bathing to breed-specific grooming techniques—so you can start with the basics and build your skills at your own pace!</p>',
      },
      {
        question: 'How does the Money-Back Guarantee work?',
        answerHtml:
          '<p>Paw Parent Academy offers a 14-day Money-Back Guarantee on all course enrollments. If you decide the course is not the right fit, you may request a full refund within 14 days of enrollment.</p>\n<p>To request a refund, simply complete the course and email us at <a class="link-brand-pink" href="mailto:info@pawparentacademy.com">info@pawparentacademy.com</a> with a brief explanation of why the course does not meet your expectations.</p>\n<p>Refunds will be processed once we have verified your course completion.</p>',
      },
      {
        question: 'What devices can I use to access the course?',
        answerHtml:
          '<p>At Paw Parent Academy, we’re committed to making your learning experience as smooth as possible. Our dog grooming courses are designed to be accessible on any device, whether you\'re using a computer, tablet, or smartphone. You can access your course anytime, anywhere, as long as you have an internet connection.</p>\n<p>All videos offer closed captioning to ensure everyone can follow along. If you ever need technical support, simply email us at <a class="link-brand-pink" href="mailto:info@pawparentacademy.com">info@pawparentacademy.com</a>.</p>',
      },
      {
        question: 'How long will it take me to complete the course?',
        answerHtml:
          '<p>The course is entirely self-paced, so the timeline is up to you! Paw Parent Academy offers lifetime access to your course, so you can go through the lessons at your own speed and revisit them anytime for a refresher.</p>',
      },
      {
        question: 'How long will I have access to the course for?',
        answerHtml:
          "<p>You'll get lifetime access to your course with Paw Parent Academy! Once you enroll, you can complete the course at your own pace and revisit it anytime. We know that practice makes perfect—whether you need a refresher or want to build your skills over time, the course is always there for you.</p>",
      },
    ],
  },
  {
    id: 'choosing',
    title: 'Choosing a Course',
    description:
      'Discover the key factors to consider when selecting the perfect online dog grooming course for you and your furry friend. Learn how to find a course that fits your dog\'s breed, coat type, and temperament while matching your grooming goals.',
    items: [
      {
        question: 'How do I choose which course to take?',
        answerHtml:
          '<p>Getting started is easy! Simply visit our <a class="link-brand-pink" href="https://www.pawparentacademy.com/courses" target="_blank" rel="noreferrer"><strong>Courses</strong></a> page and find the course that best suits your dog\'s needs based on coat type. Each course page includes information about the coat type covered in the course, along with examples of popular breeds that are well suited to that course. If you don’t see your dog’s breed listed, don’t worry! The grooming techniques will still apply. If you\'re unsure, send an email to <a class="link-brand-pink" href="mailto:info@pawparentacademy.com">info@pawparentacademy.com</a> and we\'ll help you find the right course for your needs.</p>',
      },
      {
        question: 'Which course should I take if my dog is a mixed breed?',
        answerHtml:
          '<p>You\'ll choose a course based on your dog\'s coat type. Each course page provides a description of the coat type covered in that course. For example, if you have a Yorkie-Shih Tzu mix with a plush fluffy coat that is further from the body you\'ll choose <a class="link-brand-pink" href="https://www.pawparentacademy.com/courses/teddy-bear-cuts" target="_blank" rel="noreferrer">Teddy Bear Cuts</a>. Visit our <a class="link-brand-pink" href="https://www.pawparentacademy.com/courses" target="_blank" rel="noreferrer">Courses</a> page to see all the coat-specific grooming courses we offer. If you\'re unsure, simply reach out to us at <a class="link-brand-pink" href="mailto:info@pawparentacademy.com">info@pawparentacademy.com</a>.</p>',
      },
      {
        question: 'What if my dog is uneasy getting groomed?',
        answerHtml:
          '<p>We understand—most dogs aren’t fans of grooming! If your pup gets anxious or stressed during the process, our <a class="link-brand-pink" href="https://www.pawparentacademy.com/courses/paws-itive-grooming" target="_blank" rel="noreferrer"><strong>Paws-itive Grooming</strong></a> course can help. Learn expert techniques to make grooming easier, calmer, and more enjoyable for both of you! Plus, if you\'d like to combine Paws-itive Grooming with one of our coat-specific grooming courses, simply send us an email at <a class="link-brand-pink" href="mailto:info@pawparentacademy.com">info@pawparentacademy.com</a> and we\'ll offer you a special discount for enrolling in multiple courses.</p>',
      },
      {
        question: 'What if my goal is to maintain my dog’s coat between professional grooms?',
        answerHtml:
          '<p>If you want to keep your dog’s coat looking great between professional grooms, enroll in the course that best suits your pup\'s coat type and focus on the modules that matter most to you. For example, you can learn how to trim nails, clean teeth, bathe, and brush to maintain your dog’s coat and overall health between grooms. Over time, you may choose to complete the entire grooming process, from nose to tail!</p>',
      },
      {
        question: 'Will I get a discount if I enroll in more than one course?',
        answerHtml:
          '<p>Absolutely! Send us an email at <a class="link-brand-pink" href="mailto:info@pawparentacademy.com">info@pawparentacademy.com</a> and we\'ll send you a special discount code.</p>',
      },
    ],
  },
  {
    id: 'completing',
    title: 'Completing the Course',
    variant: 'light',
    items: [
      {
        question: 'What tools will I need to complete the course?',
        answerHtml:
          '<p>Your course will provide an in-depth overview of exactly what you\'ll need to groom your dog. What you purchase will also depend on how much of the grooming process you want to complete. You can choose to stick to nail trims and maintenance between grooms or take on the full grooming process—it\'s entirely up to you!</p>',
      },
      {
        question: 'How can I ensure my dog is safe throughout the grooming process?',
        answerHtml:
          '<p>At Paw Parent Academy, your dog\'s safety is our top priority! Each of our grooming courses includes dedicated lessons on safe grooming practices to ensure you’re fully equipped to groom your dog with confidence. As long as you follow the proper safety techniques outlined in the course, you’ll be well-prepared to give your pet a safe and stress-free grooming experience.</p>',
      },
      {
        question: 'How can I determine if I have sufficient physical strength to groom my own dog?',
        answerHtml:
          '<p>To groom your dog safely and comfortably, you’ll want to have a good grip for handling grooming tools and be able to stand for extended periods. You\'ll learn valuable tips on how to set up an ergonomic and comfortable grooming station that will make the process easier on both you and your pet.</p>',
      },
    ],
  },
];
