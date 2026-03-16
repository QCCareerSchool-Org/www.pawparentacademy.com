import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';

import teddyBear from './images/teddy-bear.webp';
import type { CourseCode } from '@/domain/courseCode';
import { fetchPrice } from '@/lib/fetchPrice';
import { formatPrice } from '@/lib/formatPrice';

interface Props {
  countryCode: string;
  provinceCode: string | null;
}

const courses: CourseCode[] = [ 'tb' ];

export const CourseFinderSection: FC<Props> = async ({ countryCode, provinceCode }) => {
  const price = await fetchPrice(courses, countryCode, provinceCode);

  return (
    <section className="bg-light">
      <div className="container">
        <div className="row justify-content-center g-s">
          <div className="col-12 col-lg-7 col-xl-6 col-xxl-5">
            <h2 className="mb-2">Find Your Course</h2>
            <h3 className="h4 mb-3">Start DIY Grooming Today</h3>
            <p>Learn how to care for your dog's unique coat with our easy, coat-specific DIY grooming courses made for pet parents.</p>
            <ul className="bullets">
              {bullets.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="fw-semibold mb-4">Choose the right course for your pup!</p>
            <Link href="/courses" className="btn btn-primary">Browse All Courses</Link>
          </div>
          <div className="col-12 col-lg-5">
            <div className="card shadow-lg">
              <div className="card-body">
                <div className="badge bg-primary mb-2">Most Popular</div>
                <Image src={teddyBear} alt="Instructor Nadia with a goldendoodle" width={600} height={600} className="img-fluid rounded mb-3" />
                <h3 className="h3">Teddy Bear Cuts</h3>
                <p>Give your pup an adorable, plush teddy bear cut from the comfort of home. This course is perfect for Shih Tzus, Lhasa Apsos, and all fluffy-coated breeds!</p>
                <p className="mb-2">
                  <Link href="/courses/teddy-bear-cuts" className="btn btn-link">Learn More</Link>
                </p>
                <Link href="https://enroll.pawparentacademy.com/TB" className="btn btn-secondary w-100">Enroll Now{price.success && <> ({price.value.currency.symbol}{formatPrice(price.value.cost)})</>}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const bullets = [
  'Master nail trims at home',
  "Learn the right brushing techniques for your dog's coat",
  'Prevent matting, hot spots & other health issues',
  'Groom your dog like a pro with stress-free techniques',
  'Achieve pro-level trims and haircuts right at home',
];
