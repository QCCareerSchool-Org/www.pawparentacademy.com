'use client';

import { type MouseEvent, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import styles from './styles.module.scss';
import playButton from './play-button.jpg';

interface CourseVideoCTAProps {
  heading: string;
  description?: string;
  videoSrc: string;
  posterSrc?: string;
}

export default function CourseVideoCTA({ heading, posterSrc, videoSrc }: CourseVideoCTAProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, mounted]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={`row justify-content-center ${styles.content}`}>
          <div className="col-lg-6">
            <div className="d-flex align-items-center justify-content-center gap-3">
              <h3 className="fw-bold mb-0 text-white">{heading}</h3>
              <button
                type="button"
                className={styles.playButton}
                onClick={() => setIsOpen(true)}
                aria-label="Play course sample"
              >
                <Image src={playButton} alt="Play course sample" priority />
              </button>
            </div>
            <button
              type="button"
              className="visually-hidden"
              tabIndex={-1}
            />
          </div>
        </div>
      </div>
      {mounted && isOpen
        ? createPortal(
            <div
              className={styles.lightbox}
              role="dialog"
              aria-modal="true"
              aria-label={heading}
              onClick={handleBackdropClick}
            >
              <div className={styles.lightboxContent}>
                <button
                  type="button"
                  className={styles.closeButton}
                  onClick={handleClose}
                  aria-label="Close video"
                >
                  ×
                </button>
                <div className={styles.videoFrame}>
                  <video
                    className="w-100 h-100"
                    controls
                    autoPlay
                    playsInline
                    poster={posterSrc}
                    preload="metadata"
                  >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support embedded videos.
                  </video>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </section>
  );
}
