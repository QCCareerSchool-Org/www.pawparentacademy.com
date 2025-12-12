import styles from './styles.module.scss';

interface CourseOverviewIntroProps {
  heading: string;
  body: string;
  className?: string;
}

export default function CourseOverviewIntro({ heading, body, className }: CourseOverviewIntroProps) {
  const sectionClass = [ styles.section, className ].filter(Boolean).join(' ');

  return (
    <section className={sectionClass}>
      <div className="container py-5">
        <div className={`text-center ${styles.content}`}>
          <h2 className="mb-3">{heading}</h2>
          <p className="text-muted mb-0">{body}</p>
        </div>
      </div>
    </section>
  );
}
