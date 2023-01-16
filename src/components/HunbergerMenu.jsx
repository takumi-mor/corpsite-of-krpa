import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HunbergerMenu.module.css";

const HunbergerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className={styles.menuButton}
      >
        ☰
      </button>
      <nav className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
        <Link to="/" className={styles.menuLink}>
          Home
        </Link>
        <Link to="/about" className={styles.menuLink}>
          About
        </Link>
        <Link to="/contact" className={styles.menuLink}>
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default HunbergerMenu;
