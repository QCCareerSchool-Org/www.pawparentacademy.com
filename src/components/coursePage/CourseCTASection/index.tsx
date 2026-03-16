interface CourseCTASectionProps {
  heading: string;
  supportText?: string;
  ctaLabel: string;
  ctaHref: string;
}

export default function CourseCTASection({ heading, supportText, ctaHref, ctaLabel }: CourseCTASectionProps) {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <h3 className="fw-bold mb-3">{heading}</h3>
            {supportText && <p className="text-muted mb-4">{supportText}</p>}
            <a href={ctaHref} className="btn-pill-primary">
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
