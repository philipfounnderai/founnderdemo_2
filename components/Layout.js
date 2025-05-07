import Head from 'next/head';
import Navbar from './Navbar';
import styles from '@/styles/Layout.module.css';

export default function Layout({ children, title = 'Founnder.ai', navHighlight }) {
  return (
    <div className={styles.page}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Learn from the founders who shaped our world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logoContainer}>
            <h1 className={styles.logo}>Founnder.ai</h1>
          </div>
          <Navbar navHighlight={navHighlight} />
        </div>
      </header>

      {children}
    </div>
  );
} 