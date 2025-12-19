'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

import styles from './Navbar.module.scss';
import logo from '@/images/ppa-full-logo.jpg'; // optional static import if you prefer

const courseLinks = [
  { href: '/courses/how-to-groom-a-goldendoodle', label: 'How to Groom a Goldendoodle' },
  { href: '/courses/teddy-bear-cuts', label: 'Teddy Bear Cuts' },
  { href: '/courses/how-to-groom-a-yorkie', label: 'How to Groom a Yorkie' },
  { href: '/courses/how-to-groom-a-terrier', label: 'How to Groom a Terrier' },
  { href: '/courses/how-to-groom-a-golden-retriever', label: 'How to Groom a Golden Retriever' },
  { href: '/courses/how-to-groom-a-pug', label: 'How to Groom a Pug' },
  { href: '/courses/nail-trims-made-easy', label: 'Nail Trims Made Easy' },
  { href: '/courses/deshedding-mastery', label: 'Deshedding Mastery' },
  { href: '/courses/paws-itive-grooming', label: 'Paws-itive Grooming' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [ isCoursesOpen, setIsCoursesOpen ] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const dropdownMenuId = 'courses-menu';
  const links = [
    { href: '/faq', label: 'FAQ' },
    { href: '/about', label: 'About' },
    { href: '/blog', label: 'Blog' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsCoursesOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsCoursesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsCoursesOpen(false);
  }, [ pathname ]);

  const handleDropdownClick = () => setIsCoursesOpen(prev => !prev);
  const handleDropdownClose = () => setIsCoursesOpen(false);
  const isCoursesActive = pathname.startsWith('/courses');

  return (
    <header className={styles.header} role="banner">
      <nav className="navbar navbar-expand-lg">
        <div className="container header__container">
          <Link href="/" aria-label="Paw Parent Academy home" className="navbar-brand">
            <Image
              src={logo}
              alt="Paw Parent Academy"
              width={150}
              height={40}
              priority
              className={styles.navbarBrandImg}
            />
          </Link>

          <button
            className={`navbar-toggler ${styles.toggler}`}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`navbar-toggler-icon ${styles.togglerIcon}`} />
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="mainNav">
            <ul className={`navbar-nav ${styles.navList}`}>
              <li
                className={`nav-item ${styles.dropdown} ${isCoursesOpen ? styles.dropdownOpen : ''}`.trim()}
                ref={dropdownRef}
              >
                <button
                  type="button"
                  className={`nav-link ${styles.dropdownToggle} ${isCoursesActive ? 'active' : ''}`.trim()}
                  aria-expanded={isCoursesOpen}
                  aria-haspopup="true"
                  aria-controls={dropdownMenuId}
                  onClick={handleDropdownClick}
                >
                  Courses
                  <span aria-hidden="true" className={styles.dropdownCaret} />
                </button>

                <div
                  className={`${styles.dropdownMenu} ${isCoursesOpen ? styles.dropdownMenuOpen : ''}`.trim()}
                  role="menu"
                  id={dropdownMenuId}
                >
                  <ul className={styles.dropdownList}>
                    {courseLinks.map(({ href, label }) => (
                      <li key={href}>
                        <Link href={href} className={styles.dropdownLink} onClick={handleDropdownClose}>
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/courses"
                    className={`${styles.dropdownLink} ${styles.viewAllLink}`.trim()}
                    onClick={handleDropdownClose}
                  >
                    View all courses
                  </Link>
                </div>
              </li>
              {links.map(({ href, label }) => {
                const isActive = pathname === href || pathname === `${href}/`;

                return (
                  <li className="nav-item" key={href}>
                    <Link
                      href={href}
                      className={`nav-link ${isActive ? 'active' : ''}`.trim()}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
