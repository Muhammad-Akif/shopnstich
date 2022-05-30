import { useEffect } from "react";
import AOS from "aos";
import { Toaster } from 'react-hot-toast';
import Head from 'next/head'
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
    <>
      <Head>
        <title>ShopnStitch</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <script src="https://accounts.google.com/gsi/client" async defer></script> */}
        <div id="g_id_onload"
          data-client_id="851583521817-5668993p0cmqt1na18v6a5gahnvt5p9j.apps.googleusercontent.com"
          data-callback="handleCredentialResponse">
        </div>
        {/* <div class="g_id_signin" data-type="standard"></div> */}
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@3.6.2/dist/chart.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </Head>
      <StateContext>
        <Toaster />
        <Component {...pageProps} />
      </StateContext>
    </>
  )
}

export default MyApp


// import "../scss/style.scss";