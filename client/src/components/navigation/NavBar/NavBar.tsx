import styles from './NavBar.module.css';

export const NavBar = (): JSX.Element => {
  return (
    <nav className={styles.NavBar}>
      <span>Smart Dashboard</span>
      <a
        href='https://github.com/pawelmalak/smarthome-dashboard'
        target='_blank'
        rel='noreferrer'
      >
        @pawelmalak
      </a>
    </nav>
  );
};
