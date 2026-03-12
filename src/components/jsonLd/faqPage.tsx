import type { FC, ReactNode } from 'react';
import type { FAQPage, Question, WithContext } from 'schema-dts';

import { withSuspense } from '../withSuspense';
import type { FAQItem } from '@/components/faqSection';

interface Props {
  items: FAQItem[];
}

const FAQPageJsonLDBase: FC<Props> = async ({ items }) => {
  const jsonLd = await getFAQPage(items);

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
  );
};

export const FAQPageJsonLD = withSuspense(FAQPageJsonLDBase);

export const getFAQPage = async (items: FAQItem[]): Promise<WithContext<FAQPage>> => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  'mainEntity': await Promise.all(items.map(async (faqItem): Promise<Question> => ({
    '@type': 'Question',
    'name': faqItem.question,
    'acceptedAnswer': {
      '@type': 'Answer',
      'text': await sanitize(faqItem.answer),
    },
  }))),
});

const stripHtml = (input: string): string => input.replace(/<[^>]*>/gu, '').replace(/\s+/gu, ' ').trim();

const sanitize = async (component: ReactNode): Promise<string> => {
  const ReactDOMServer = (await import('react-dom/server')).default;
  const staticMarkup = ReactDOMServer.renderToStaticMarkup(component);
  return stripHtml(staticMarkup);
};
