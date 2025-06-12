import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <h1 className={styles.header__title}>Новостной CRUD</h1>
        <p className={styles.header__subtitle}>Управление списком новостей</p>
      </div>
    </header>
  );
};

export default Header;
