import styles from './Background.module.scss';

function Background({ children }) {
  return (
    <>
      <div className={styles.portfolio}>
        <div className={styles.portfolioBackground}>
          <div className={styles.chevronLeft}></div>
          <div className={styles.chevronRight}></div>
        </div>

        <div className={styles.portfolioContent}>
          <div className={styles.portfolioHead}>{children}</div>
        </div>
      </div>
    </>
  );
}

export default Background;
