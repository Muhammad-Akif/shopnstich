import Head from 'next/head'
import { Navbar } from '../components'
import { SideSocialIcons, MainTextnImage, Trending, GetinTouch, ProductCard, Reviews, Footer } from '../components'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ShopnStich</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="banner">
        <Navbar />
        <MainTextnImage />
        <SideSocialIcons />
      </div>
      <Trending />
      <div className="product-banner">
        <ProductCard category="Men" />
        <ProductCard category="Women" />
        <ProductCard category="Kids" />
      </div>
      {/* <GetinTouch /> */}
      <Reviews />
      <Footer />
    </div>
  )
}
