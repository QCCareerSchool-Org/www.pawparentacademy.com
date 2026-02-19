import type { FC, ReactNode } from 'react';
import type { FAQPage, Question, WithContext } from 'schema-dts';

import { categories } from './data';

export const Schema: FC = async () => {
  const faqPage: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': await Promise.all(categories.flatMap(section => section.items).map(async (item): Promise<Question> => ({
      '@type': 'Question',
      'name': item.heading,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': await sanitize(item.body),
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
