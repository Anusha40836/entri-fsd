import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <h1>Welcome to My Website</h1>
      <nav>
        <a href="/">Home</a> |<a href="/about">About</a>
      </nav>
    </header>
  );
}

export default Header;
