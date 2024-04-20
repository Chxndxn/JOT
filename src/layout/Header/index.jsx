import styles from "./index.style";

function Header() {
  return (
    <header style={styles.rootContainer}>
      <div>
        {/* Replace with <AppIcon/> later */}
        <p style={styles.tempLogo}>Jot</p>
      </div>
      <ul style={styles.headerOptionsContainer}>
        <li style={styles.listStyle}>Home</li>
        <li style={styles.listStyle}>About</li>
        <li style={styles.listStyle}>Contact</li>
        <li style={styles.listStyle}>Login</li>
      </ul>
    </header>
  );
}

export default Header;
