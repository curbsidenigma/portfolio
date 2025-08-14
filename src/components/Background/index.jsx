import styles from './Background.module.scss';

function Background({ children }) {
  return (
    <>
      <div className={styles.portfolio}>
        <div className={styles.portfolioBackground}>
          <div className={styles.chevronLeft}></div>
          <div className={styles.chevronRight}></div>
        </div>

        <div className={styles.portfolioContent}>{children}</div>
      </div>
    </>
  );
}

export default Background;
