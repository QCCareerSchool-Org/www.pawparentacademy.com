import type { Metadata } from 'next';

import type { PageComponent } from '@/app/serverComponent';
import { EmailLink } from '@/components/emailLink';

export const metadata: Metadata = {
  title: 'Contact Paw Parent Academy | Get in Touch',
  description: 'Need help with our grooming courses? Reach Paw Parent Academy for support and quick answers via email.',
  alternates: { canonical: '/contact' },
};

const ContactPage: PageComponent = () => (
  <section>
    <div className="container text-center">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 col-xl-7">
          <h1 className="h2">Get in Touch with Paw Parent Academy!</h1>
          <p className="lead">Have questions about our grooming courses?</p>
          <p className="mb-4">We're here to help! Whether you need support, have inquiries, or just want to say hello, we'd love to hear from you. Reach us at <EmailLink />.</p>
          <EmailLink className="btn btn-primary rounded-pill" text="Email Us" />
        </div>
      </div>
    </div>
  </section>
);

export default ContactPage;
