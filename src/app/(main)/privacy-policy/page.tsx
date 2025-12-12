import type { Metadata } from 'next';

import styles from './PrivacyPolicyPage.module.scss';

const emailAddress = 'info@pawparentacademy.com';

export const metadata: Metadata = {
  title: 'Privacy Policy | Paw Parent Academy',
  description:
    'Learn how Paw Parent Academy collects, protects, and uses your personal information across our grooming education products.',
  alternates: {
    canonical: 'https://www.pawparentacademy.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className={styles.privacySection}>
      <div className="container">
        <div className={styles.content}>
          <h3 className={styles.title}>Privacy Policy</h3>

          <div className={styles.sectionBlock}>
            <h5>What information do we collect?</h5>
            <p>
              We collect information from you when you register on our site, place an order, subscribe to our
              newsletter or respond to a survey.
            </p>
            <p>
              When ordering or registering on our site, as appropriate, you may be asked to enter your name, email
              address, mailing address, phone number, or credit card information. You may, however, visit our site
              anonymously.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h5>What do we use your information for?</h5>
            <p>Any of the information we collect from you may be used in one of the following ways:</p>
            <ul>
              <li>To personalize your experience and respond to your individual needs.</li>
              <li>To improve our website offerings based on your feedback.</li>
              <li>To improve customer service so we can respond more effectively to support requests.</li>
              <li>
                To process transactions. Your information, whether public or private, will not be sold, exchanged,
                transferred, or given to any other company for any reason whatsoever, without your consent, other than
                for the express purpose of delivering the purchased product or service requested.
              </li>
              <li>To administer a contest, promotion, survey, or other site feature.</li>
              <li>
                To send periodic emails, including order updates plus occasional company news, updates, related product,
                or service information.
              </li>
            </ul>
            <p className={styles.note}>
              <strong>Note:</strong> If at any time you would like to unsubscribe from receiving future email, we include
              detailed unsubscribe instructions at the bottom of each message.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h5>How do we protect your information?</h5>
            <p>
              We implement a variety of security measures to maintain the safety of your personal information when you
              place an order or enter, submit, or access your personal information.
            </p>
            <p>
              We offer the use of a secure server. All supplied sensitive or credit information is transmitted via Secure
              Socket Layer (SSL) technology and encrypted into our payment gateway providers&apos; database to be accessible
              only by those authorized with special access rights to such systems, and they are required to keep the
              information confidential.
            </p>
            <p>After a transaction, your private information will not be stored on our servers.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h5>Do we use cookies?</h5>
            <p>
              Yes. Cookies are small files that a site or its service provider transfers to your computer&apos;s hard drive
              through your web browser (if you allow) that enables the site or service provider&apos;s systems to recognize
              your browser and capture and remember certain information.
            </p>
            <p>
              We use cookies to keep track of advertisements and compile aggregate data about site traffic and site
              interaction so that we can offer better site experiences and tools in the future. We may contract with
              third-party service providers to assist us in better understanding our site visitors. These service
              providers are not permitted to use the information collected on our behalf except to help us conduct and
              improve our business.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h5>Do we disclose any information to outside parties?</h5>
            <p>
              We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information.
              This does not include trusted third parties who assist us in operating our website, conducting our
              business, or servicing you, so long as those parties agree to keep this information confidential. We may
              also release your information when we believe release is appropriate to comply with the law, enforce our
              site policies, or protect ours or others&apos; rights, property, or safety. However, non-personally identifiable
              visitor information may be provided to other parties for marketing, advertising, or other uses.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h5>California Online Privacy Protection Act Compliance</h5>
            <p>
              Because we value your privacy we have taken the necessary precautions to be in compliance with the
              California Online Privacy Protection Act. We therefore will not distribute your personal information to
              outside parties without your consent.
            </p>
            <p>
              As part of the California Online Privacy Protection Act, all users of our site may make any changes to
              their information at any time by logging into their personal website and going to the &quot;Edit Profile&quot;
              page.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h5>Children&apos;s Online Privacy Protection Act Compliance</h5>
            <p>
              We are in compliance with the requirements of the Children&apos;s Online Privacy Protection Act (COPPA); we do
              not collect any information from anyone under 13 years of age. Our website, products, and services are all
              directed to people who are at least 13 years old or older.
            </p>
          </div>

          <div className={styles.sectionBlock}>
            <h5>Your Consent</h5>
            <p>By using our site, you consent to our website privacy policy.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h5>Changes to our Privacy Policy</h5>
            <p>If we decide to change our privacy policy, we will update the modification date below.</p>
          </div>

          <div className={styles.sectionBlock}>
            <h5>Contacting Us</h5>
            <p>If there are any questions regarding this privacy policy you may contact us using the information below.</p>
            <address>
              Paw Parent Academy
              <br />38 McArthur Ave
              <br />Ottawa ON K1L 6R2
              <br />Canada
            </address>
            <p>
              Email: <a className="link-brand-pink" href={`mailto:${emailAddress}`}>{emailAddress}</a>
              <br />Phone: 1-613-749-8248
            </p>
            <p>
              <em>This policy is powered by Free Privacy Policy and Rhino Support helpdesk software.</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
