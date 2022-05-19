import { useEffect } from "react";
import AOS from "aos";
import { Toaster } from 'react-hot-toast';
import { StateContext } from '../context/StateContext';
import "aos/dist/aos.css";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      // once: true,
      offset: 50,
    });
  }, []);
  return (
    <StateContext>
      <Toaster />
      <Component {...pageProps} />
    </StateContext>
  )
}

export default MyApp


// import "../scss/style.scss";