'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC, PropsWithChildren } from 'react';

import WLDIcon from './courses/how-to-groom-a-goldendoodle/_wld/we-love-doodle-icon.png';

interface Props {
  countryCode: string;
}

export const SiteBanner: FC<Props> = () => {
  const pathname = usePathname();

  if (pathname === '/courses/how-to-groom-a-goldendoodle') {
    return <Banner><Link href="https://enroll.pawparentacademy.com/GD?promoCode=WLD20" style={{ color: 'inherit', textDecoration: 'none', fontSize: '1.25rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Use Code WLD20 and Save 20% <Image src={WLDIcon} style={{ paddingLeft: '0.5rem', height: 30, width: 'auto' }} width={60} height={60} alt="" /></Link></Banner>;
  }
};

const Banner: FC<PropsWithChildren> = ({ children }) => (
  <div style={{ background: '#8bb8e8' }} className="py-1 text-center">
    <div className="container">
      {children}
    </div>
  </div>
);
