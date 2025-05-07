import { Inter } from 'next/font/google';
import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.asPath]);

  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}
