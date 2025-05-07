import Link from 'next/link';
import styles from '@/styles/Navbar.module.css';

export default function Navbar({ navHighlight }) {
  return (
    <nav className={styles.nav}>
      <Link href="/" legacyBehavior><a className={styles.navLink}>Home</a></Link>
      <Link href="/library" legacyBehavior><a className={styles.navLink}>Library</a></Link>
      <Link href="/about" legacyBehavior><a className={styles.navLink}>About</a></Link>
      <Link href="/for-schools" legacyBehavior>
        <a className={
          navHighlight === 'schools'
            ? `${styles.navLink} ${styles.highlight}`
            : styles.navLink
        }>For Schools</a>
      </Link>
      <Link href="/faq" legacyBehavior>
        <a className={
          navHighlight === 'faq'
            ? `${styles.navLink} ${styles.highlight}`
            : styles.navLink
        }>FAQ</a>
      </Link>
      <a
        href="https://tally.so/r/npMV7q"
        className={`${styles.navLink} ${styles.earlyAccess}`}
        target="_blank"
        rel="noopener noreferrer"
      >Get Early Access</a>
    </nav>
  );
} 