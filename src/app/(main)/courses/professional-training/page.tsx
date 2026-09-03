import Image from 'next/image';

import { CoursesSection } from './coursesSection';
import CTABackgroundImage from './cta-background-image.jpg';
import DDCircle from './dog-daycare.png';
import DGCircle from './dog-grooming.png';
import DTCircle from './dog-training.png';
import HeroDesktopImage from './hero-desktop.jpg';
import HeroMobileImage from './hero-mobile.jpg';
import styles from './page.module.css';
import LogoImage from './qcps-logo-image.jpg';
import { BackgroundImage } from '@/components/backgroundImage';
import type { PageComponent } from '@/serverComponent';

const ProfessionalTrainingPage: PageComponent = () => (
  <>
    <section>
      <BackgroundImage src={HeroDesktopImage} objectPosition="100% 30%" mobile={{ src: HeroMobileImage, breakpoint: 'lg', objectPosition: '50% 100%' }} priority />
      <div className={`container ${styles.hero}`}>
        <div className="row justify-content-center justify-content-lg-start">
          <div className="col-12 col-md-10 col-lg-6 my-lg-s">
            <h1 className="my-lg-s text-center text-lg-start" style={{ textTransform: 'none' }}>Turn Your Love of Dogs Into a Career</h1>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <div className="row justify-content-center g-3 g-lg-s">
          <div className="col-12 col-lg-6 col-xl-5">
            <h2 className="mb-3">Meet Our Partner</h2>
            <h3>QC Pet Studies</h3>
            <p>Paw Parent Academy is designed for pet parents who want to learn how to care for their own dogs with confidence. Grooming your own dog, teaching them new skills, and simply spending more time caring for them can be incredibly rewarding. You may even enjoy working with your dog so much that you want t o make it your career.</p>
            <p className="mb-0">If you're interested in working with dogs professionally, our partner school, <strong>QC Pet Studies</strong>, offers comprehensive online training in <strong>dog grooming</strong>, <strong>dog training</strong>, and <strong>dog daycare</strong>. Their flexible programs let you study on your own schedule while learning from experienced industry professionals. You'll build practical, career-ready skills through comprehensive course materials, hands-on assignments, and personalized feedback and mentorship from expert instructors.</p>
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <a href="https://www.qcpetstudies.com">
              <Image src={LogoImage} className="img-fluid rounded-4" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
    <section style={{ backgroundColor: 'var(--brand-pink)' }}>
      <div className="container">
        <div className="row g-s text-center justify-content-center">
          <div className="col-12 col-lg-4">
            <Image src={DGCircle} alt="" className={`img-fluid ${styles.courseCircle}`} />
            <div className={styles.courseTitle}>Professional Dog<br />Grooming</div>
          </div>
          <div className="col-12 col-lg-4">
            <Image src={DTCircle} alt="" className={`img-fluid ${styles.courseCircle}`} />
            <div className={styles.courseTitle}>Professional Dog<br />Training</div>
          </div>
          <div className="col-12 col-lg-4">
            <Image src={DDCircle} alt="" className={`img-fluid ${styles.courseCircle}`} />
            <div className={styles.courseTitle}>Professional Dog<br />Daycare Provider</div>
          </div>
        </div>
      </div>
    </section>
    <CoursesSection />
    <section className="bg-dark text-white">
      <BackgroundImage src={CTABackgroundImage} />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            <h2 className="mb-3">You Already Love Dogs. Why Not See Where it Could Take You?</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6 text-center">
            <p>You may have started learning about dogs simply because you wanted to be a better pet parent.</p>
            <p>But sometimes a hobby becomes something more. With the right training, you can build on that experience, and develop the skills you need to work with dogs beyond your own.</p>
            <p>And you don't have to choose a career based on just one kind of dog care. Your interests can help you decide which path is right for you.</p>
            <a href="https://www.qcpetstudies.com" className="btn btn-primary">Explore Professional Training</a>
          </div>
        </div>
      </div>
    </section>
  </>

);

export default ProfessionalTrainingPage;
