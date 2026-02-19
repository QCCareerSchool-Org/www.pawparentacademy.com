import type { FC } from 'react';

import { Form } from '../form';
import background from './background.jpg';
import { BackgroundImage } from '../backgroundImage';
import { Overlay } from '../overlay';

interface Props {
  heading?: string;
  subheading?: string;
  description?: string;
  listId?: number;
  emailTemplateId?: number;
  buttonText?: string;
  successMessage?: string;
  disclaimer?: string;
}

export const LeadMagnetSection: FC<Props> = props => (
  <section className="bg-dark text-white">
    <BackgroundImage src={background} />
    <Overlay background="rgba(0, 7, 29, 0.88)" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-body">
              <h2 className="h3">{props.heading ?? 'Start Saving with Paw Parent Academy'}</h2>
              <h4 className="text-secondary">{props.subheading ?? 'Grab a $50 Discount Now!'}</h4>
              <p className="text-muted mb-4">{props.description ?? 'Join hundreds of pet parents learning to groom their dogs safely and affordably at home. Get your discount today!'}</p>
              <Form
                listId={props.listId}
                emailTemplateId={props.emailTemplateId}
                buttonText={props.buttonText ?? 'Yes! I want $50 off!'}
                successMessage={props.successMessage ?? 'successMessage'}
                disclaimer={props.disclaimer ?? 'I agree to receive emails from Paw Parent Academy including promotions and tips for pet parents. Unsubscribe anytime!'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
