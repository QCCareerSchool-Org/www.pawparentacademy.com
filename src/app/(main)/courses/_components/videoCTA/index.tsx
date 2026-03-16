'use client';

import Image from 'next/image';
import type { FC, MouseEvent } from 'react';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import playButton from './play-button.jpg';
import styles from './styles.module.scss';

interface Props {
  description?: string;
  videoSrc: string;
  posterSrc?: string;
}

export const CourseVideoCTA: FC<Props> = props => {
  const [ isOpen, setOpen ] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [ isOpen ]);

  const handleButtonClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col">
            <div className="d-flex align-items-center justify-content-center gap-2">
              <h3 className="fw-bold mb-0 text-white">Watch a Course Sample</h3>
              <button type="button" className={styles.playButton} onClick={handleButtonClick} aria-label="Play course sample">
                <Image src={playButton} alt="Play course sample" priority />
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && createPortal(
        <div onClick={handleBackdropClick} className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Watch a course sample">
          <div className={styles.lightboxContent}>
            <button type="button" className={styles.closeButton} onClick={handleClose} aria-label="Close video">×</button>
            <div className={styles.videoFrame}>
              <video className="w-100 h-100" controls autoPlay playsInline poster={props.posterSrc} preload="metadata">
                <source src={props.videoSrc} type="video/mp4" />
                Your browser does not support embedded videos.
              </video>
            </div>
          </div>
        </div>,
        document.body,
      )}
    </section>
  );
};
