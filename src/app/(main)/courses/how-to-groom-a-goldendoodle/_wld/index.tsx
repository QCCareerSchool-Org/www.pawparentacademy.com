import Image from 'next/image';
import type { FC } from 'react';

import Logo from './we-love-doodles-logo.jpg';
import Product from './we-love-doodles-products.png';

export const WLDSection: FC = () => (
  <section>
    <div className="container">
      <div className="row g-s justify-content-center">
        <div className="d-none d-lg-block col-12 col-lg-6 col-xl-5">
          <Image src={Product} className="img-fluid" alt="" />
        </div>
        <div className="col-12 col-lg-6 col-xl-5">
          <Image src={Logo} className="img-fluid" alt="We Love Doodles" />
          <h2>Official Partnership</h2>
          <p>Paw Parent Academy is thrilled to partner with We Love Doodles to provide you with top-tier shampoos, brushes and health essentials specially crafted for Doodles' unique coats. Grooming your Doodle just got a major upgrade with products designed alongside veterinarians and pet enthusiasts so you can keep your furry friend looking and feeling their best!</p>
          <p className="lead"><strong>Use promo code <span style={{ color: 'var(--brand-pink)' }}>QCPS20</span> to save on grooming tools</strong></p>
          <a href="https://shop.welovedoodles.com" className="btn btn-secondary">Get 20% Off</a>
        </div>
      </div>
    </div>
  </section>
);
