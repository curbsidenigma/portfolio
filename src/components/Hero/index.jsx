import styles from './Hero.module.scss';

function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroCard}>
          <div className={styles.heroContent}>
            <div className={styles.contentWrapper}>
              <p className={styles.greeting}>
                <span className={styles.tag}>{'<span>'}</span>
                Hey, I'm Gerardo
                <span className={styles.tag}>{'<span>'}</span>
              </p>
              <h1>
                Junior <span className={styles.role}>{'{\'Full-Stack\'}'}</span> Web
                & App Developer
              </h1>
              <p className={styles.description}>
                <span className={styles.tag}>{'<p>'}</span>
                I'm passionate about clean code. With cutting-edge technologies
                such as <span className={styles.tag}>NodeJS</span>,{' '}
                <span className={styles.tag}>React</span>, and{' '}
                <span className={styles.tag}>Spring Boot</span>... I deliver
                elegant interfaces and beautiful websites.
                <span className={styles.tag}>{'<p>'}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
