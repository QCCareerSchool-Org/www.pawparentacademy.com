import { faqSections } from './faq-data';

const stripHtml = (input: string): string => input.replace(/<[^>]*>/gu, '').replace(/\s+/gu, ' ').trim();

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': faqSections.flatMap(section => section.items.map(item => ({
    '@type': 'Question',
    'name': item.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': stripHtml(item.answerHtml),
    },
  }))),
};
