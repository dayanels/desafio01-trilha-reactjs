import rocketLogo from "../assets/rocket.svg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <img className={styles["icon-rocket"]} src={rocketLogo} alt="Rocket" />
        <h1 className={styles.logo}>
          <span>to</span>
          <span>do</span>
        </h1>
      </div>
    </header>
  );
}
