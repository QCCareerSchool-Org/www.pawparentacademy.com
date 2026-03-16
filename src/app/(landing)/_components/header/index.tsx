import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import styles from './index.module.scss';
import logo from '@/images/ppa-full-logo.jpg';

export const Header: FC = () => {
  return (
    <header className={styles.header} role="banner">
      <div className="container">
        <div className={styles.inner}>
          <Link href="/" aria-label="Paw Parent Academy home" className={styles.logoLink}>
            <Image src={logo} alt="Paw Parent Academy" priority className={styles.logo} />
          </Link>
        </div>
      </div>
    </header>
  );
};
