import styles from './Header.module.scss';
import useTypewriter from '../../hooks/useTypewriter';
import avatarImg from '../../assets/images/profile.jpeg';
import { headerItems, words } from '../../data/headerData';

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
  const typedText = useTypewriter(words, {
    typingSpeed: 120,
    deletingSpeed: 60,
    pause: 1000,
  });

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
                <span className={styles.lastName}>Domínguez</span>
              </h2>
              <p className={styles.quote}>
                <span className={styles.tag}>{'<p>'}</span>I'm {typedText}
                <span className={styles.cursor}></span>
                <span className={styles.tag}>{'<p>'}</span>
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
