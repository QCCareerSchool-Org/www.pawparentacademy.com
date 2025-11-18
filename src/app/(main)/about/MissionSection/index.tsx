import styles from './MissionSection.module.scss';

export default function MissionSection() {
  return (
    <section className={styles.mission} aria-labelledby="join-heading">
      <div className="container mt-5 mb-5">
        <div className="row justify-content-center">
          <div className="col-8 text-center">
            <h3 id="join-heading" style={{fontWeight: 'bolder'}}>Join us and discover how simple, affordable, and stress-free at-home grooming can be!</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
