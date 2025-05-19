import styles from "./HomePage.module.css";
import Header from "./Header";
import Footer from "./Footer";

function HomePage() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h2>This is the homepage</h2>
        <p>Welcome to a React app using components and CSS modules!</p>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
