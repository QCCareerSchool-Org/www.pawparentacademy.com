import type { Metadata } from 'next';

import { CourseFeature } from '@/components/courseFeature';
import type { CourseCode } from '@/domain/courseCode';
import { getServerData } from '@/lib/getServerData';
import type { PageComponent } from '@/serverComponent';

export const metadata: Metadata = {
  title: 'Dog Grooming Courses',
  description: 'Browse online dog grooming courses for every coat type. Learn pro techniques, save on grooming bills, and bond with your pup at home.',
  alternates: { canonical: '/courses' },
};

const courses: CourseCode[] = [ 'gd', 'tb', 'yk', 'tr', 'gr', 'pu' ];
const playbooks: CourseCode[] = [ 'nt', 'dm', 'pg' ];

const CoursesPage: PageComponent = async ({ searchParams }) => {
  const { countryCode, provinceCode } = await getServerData(searchParams);

  return (
    <>
      <section>
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-11 col-md-9 text-center">
              <h1 className="mb-3">Dog Grooming Courses</h1>
              <h2 className="text-secondary mb-3">Designed for Pet Parents</h2>
              <p className="mt-0">Our expert-led online dog grooming courses help pet parents confidently groom their pups at home. Whether you're dealing with <strong>mats and tangles</strong>, falling behind on <strong>haircuts</strong>, struggling with <strong>excessive shedding</strong>,  or overcoming challenging <strong>nail trims</strong>, you&apos;ll find step-by-step guidance tailored to your dog's needs. Just choose the course that matches your pup's coat, and master a stress-free grooming routine designed for you and your dog.</p>
            </div>
          </div>
          <div className="row justify-content-center g-5">
            {courses.map(courseCode => (
              <div key={courseCode} className="col-12 col-md-6 d-flex">
                <CourseFeature courseCode={courseCode} countryCode={countryCode} provinceCode={provinceCode} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-light">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-12 col-md-8 text-center">
              <h1 className="mb-3">Pup Playbooks</h1>
              <h2 className="text-secondary mb-3">Care for Every Dog</h2>
              <p className="mt-0">Discover quick and effective techniques to keep your pup happy, clean, and well-maintained with Paw Parent Academy's Pup Playbooks. These mini-courses are designed to make grooming easy, with simple, at-home care that enhances your pet's well-being and strengthens the bond you share.</p>
            </div>
          </div>
          <div className="row justify-content-center g-5">
            {playbooks.map(courseCode => (
              <div key={courseCode} className="col-12 col-md-6 d-flex">
                <CourseFeature courseCode={courseCode} countryCode={countryCode} provinceCode={provinceCode} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CoursesPage;
