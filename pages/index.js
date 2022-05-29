import { useState } from 'react'
import Head from 'next/head'
import { getAllProducts } from '../services'
import { Navbar } from '../components'
import { MainTextnImage, MapnConnect, Trending, ProductCard, Reviews, Footer } from '../components'

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>ShopnStitch</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="https://accounts.google.com/gsi/client" async defer></script>
        <div id="g_id_onload"
          data-client_id="89267214240-4l20rsknks29stja007k15smm80ljgea.apps.googleusercontent.com"
          data-callback="handleCredentialResponse">
        </div>
        <div class="g_id_signin" data-type="standard"></div>
        <script src="./TW-ELEMENTS-PATH/dist/js/index.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js@3.6.2/dist/chart.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </Head>

      <div class="bg-green-960 sm:min-h-screen">
        <Navbar products={products} />
        <MainTextnImage />
      </div>

      {/* <MainBanner /> */}
      <Trending products={products} />
      <div className="product-banner">
        <ProductCard category="Men" products={products} />
        <ProductCard category="Women" products={products} />
        <ProductCard category="Kids" products={products} />
      </div>

      <Reviews />
      <MapnConnect />
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const data = await getAllProducts();
  console.log("dtat --> ", data)
  return {
    props: { products: data }
  }
}