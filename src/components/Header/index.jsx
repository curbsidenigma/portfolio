import styles from './Header.module.scss';
import avatarImg from '../../assets/images/profile.jpeg';
import { headerItems } from '../../data/headerData';

function HeaderItem({ href, icon }) {
  return (
    <>
      <li>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          {icon}
        </a>
      </li>
    </>
  );
}

function Header() {
  return (
    <>
      <header>
        <div className={styles.headerCard}>
          <div className={styles.headerContent}>
            <div className={styles.contentWrapper}>
              <img
                className={styles.avatar}
                src={avatarImg}
                alt="Picture of Gerardo Domínguez Ramírez"
              />
              <h2 className={styles.fullName}>
                <span className={styles.firstName}>Gerardo</span>
                <span className={styles.lastName}>Domínguez Ramírez</span>
              </h2>
              <p className={styles.quote}>
                I am a junior full-stack developer based in Mexico.
              </p>
              <ul className={styles.headerItems}>
                {headerItems.map(item => (
                  <HeaderItem key={item.id} {...item} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
