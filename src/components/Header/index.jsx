import styles from './Header.module.scss';
import avatarImg from '../../assets/images/profile.jpeg';

function Header() {
  return (
    <>
      <div className={styles.portfolioHead}>
        <header>
          <div className={styles.headerContent}>
            <div className={styles.avatar}>
              <img src={avatarImg} alt="Picture of Gerardo Domínguez Ramírez" />
            </div>
            <h3 className={styles.fullName}>
              <div className={styles.name}>Gerardo</div>
              <div className={styles.lastName}>Domínguez Ramírez</div>
            </h3>
            <div className={styles.quote}>
              <p>
                I'm a junior full-stack developer passionate about clean code,
                elegant interfaces, and building beautiful web experiences.
              </p>
              <p>Welcome to my digital portfolio!</p>
            </div>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;
