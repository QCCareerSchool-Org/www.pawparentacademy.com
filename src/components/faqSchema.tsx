import type { FC, ReactNode } from 'react';
import type { FAQPage, Question, WithContext } from 'schema-dts';

import type { FAQItem } from '@/components/faqSection';

interface Props {
  faqItems: FAQItem[];
}

export const FAQSchema: FC<Props> = async ({ faqItems }) => {
  const faqPage: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': await Promise.all(faqItems.map(async (faqItem): Promise<Question> => ({
      '@type': 'Question',
      'name': faqItem.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': await sanitize(faqItem.answer),
      },
    }))),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }} />
  );
};

const stripHtml = (input: string): string => input.replace(/<[^>]*>/gu, '').replace(/\s+/gu, ' ').trim();

const sanitize = async (component: ReactNode): Promise<string> => {
  const ReactDOMServer = (await import('react-dom/server')).default;
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
  return stripHtml(staticMarkup);
};
