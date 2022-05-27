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
        <meta name="google-site-verification" content="I94h8yYfnMEYEvSeU5lWv35rrC7JFdvd3DvbFbgghSk" />
        <link rel="icon" href="/favicon.ico" />
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