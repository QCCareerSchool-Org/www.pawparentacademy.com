import type { StaticImageData } from 'next/image';

import dm from './images/dm.jpg';
import gd from './images/gd.jpg';
import gr from './images/gr.jpg';
import nt from './images/nt.jpg';
import pg from './images/pg.jpg';
import pu from './images/pu.jpg';
import tb from './images/tb.jpg';
import tr from './images/tr.jpg';
import yk from './images/yk.jpg';
import type { CourseCode } from '@/domain/courseCode';

export interface CourseFeatureData {
  subtitle?: string;
  imageSrc: StaticImageData;
  greatFor: string;
}

export const CourseFeatureDataMap: Record<CourseCode, CourseFeatureData> = {
  nt: {
    subtitle: 'Clipper + Grinder Confidence',
    imageSrc: nt,
    greatFor: 'All breeds and nervous pups who need gentle nail care',
  },
  dm: {
    imageSrc: dm,
    greatFor: 'Heavy shedding double-coated breeds',
  },
  pg: {
    imageSrc: pg,
    greatFor: 'Every pup and paw parent',
  },
  gd: {
    subtitle: '(and Other Curly Coats)',
    imageSrc: gd,
    greatFor: 'Poodles, Goldendoodles, Labradoodles, Bichons, and other curly-coated breeds',
  },
  tb: {
    subtitle: '(for Small Plush Dogs)',
    imageSrc: tb,
    greatFor: 'Pomeranians, Shih Tzus, Havanese, Lhasa Apsos, and other fluffy mixes',
  },
  yk: {
    subtitle: '(and Other Silky Coats)',
    imageSrc: yk,
    greatFor: 'Yorkies, Morkies, Maltese, Shih Tzu mixes, and any silky companion who needs salon-level polish',
  },
  tr: {
    subtitle: '(for Border Terriers and Cairn Terriers)',
    imageSrc: tr,
    greatFor: 'Border Terriers, Cairn Terriers other wire-coated mixes',
  },
  gr: {
    subtitle: '(and Other Double Coats)',
    imageSrc: gr,
    greatFor: 'Cocker Spaniels, Springer Spaniels, Golden Retrievers, Setters, and other feathered double coats',
  },
  pu: {
    subtitle: '(and Other Short Coats)',
    imageSrc: pu,
    greatFor: 'Pugs, Frenchies, Boston Terriers, Boxers, and any short-coated pup battling allergies or odor',
  },
};
