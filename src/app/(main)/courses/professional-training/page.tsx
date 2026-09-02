import { Courses } from './courses';
import type { PageComponent } from '@/serverComponent';

const ProfessionalTrainingPage: PageComponent = () => (
  <>
    <section>
      <div className="container">
        <h1>Turn Your Love of Dogs Into a Career</h1>
        <h2>Meet Our Partner</h2>
        <h3>QC Pet Studies</h3>
        <p>Paw Parent Academy is designed for pet parents who want to learn how to care for their own dogs with confidence.Grooming your own dog, teaching them new skills, and simply spending more time caring for them can be incredibly rewarding. You may even enjoy working with your dog so much that you want t o make it your career.</p>
        <p>If you're interested in working with dogs professionally, our partner school, <strong>QC Pet Studies</strong>, offers comprehensive online training in <strong>dog grooming</strong>, <strong>dog training</strong>, and <strong>dog daycare</strong>. Their flexible programs let you study on your own schedule while learning from experienced industry professionals. You'll build practical, career-ready skills through comprehensive course materials, hands-on assignments, and personalized feedback and mentorship from expert instructors.</p>
      </div>
    </section>
    <section style={{ backgroundColor: 'var(--brand-pink)' }}>
      <div className="container">
        <div className="row">
          <div className="col-4">Dog Grooming</div>
          <div className="col-4">Dog Training</div>
          <div className="col-4">Dog Daycare</div>
        </div>
      </div>
    </section>
    <section>
      <div className="container">
        <h2>Which Dog Career Is Right for You?</h2>
        <Courses />
      </div>
    </section>
  </>

);

export default ProfessionalTrainingPage;
