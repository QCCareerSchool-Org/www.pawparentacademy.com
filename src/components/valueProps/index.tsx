import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import type { FC } from 'react';

import valueImage3 from './images/bond-1.jpg';
import valueImage1 from './images/save-2.jpg';
import valueImage2 from './images/skillled-1.jpg';

export const ValueProps: FC = () => (
  <div className="row g-4">
    {valueProps.map(v => (
      <div key={v.title} className="col-12 col-md-4">
        <Image src={v.image} alt={v.alt} sizes="(min-width: 1200px) 280px, (min-width: 768px) 240px, 85vw" className="img-fluid rounded-4 mb-4" />
        <h3 className="h4">{v.title}</h3>
        <p className="mb-0">{v.description}</p>
      </div>
    ))}
  </div>
);

interface ValueProp {
  title: string;
  description: string;
  image: string | StaticImageData;
  alt: string;
}

const valueProps: ValueProp[] = [
  {
    title: 'Save Money',
    description: 'Cut down on expensive grooming bills and enjoy the convenience of grooming from home.',
    image: valueImage1,
    alt: 'Yorkie with a piggy bank',
  },
  {
    title: 'Learn a New Skill',
    description: 'Master step-by-step grooming techniques tailored to your dog\'s breed.',
    image: valueImage2,
    alt: 'Groomer trimming a Shih Tzu',
  },
  {
    title: 'Bond with Your Pet',
    description: 'Create a stress-free grooming routine that brings you closer to your pet.',
    image: valueImage3,
    alt: 'Dog owner hugging a golden retriever',
  },
];
