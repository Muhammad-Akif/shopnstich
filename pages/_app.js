import { SessionProvider } from 'next-auth/react';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import '../styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps }, }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      // once: true,
      offset: 50,
    });
  }, []);
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp


// import "../scss/style.scss";