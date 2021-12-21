import { useState } from 'react'
import Head from 'next/head'
import { Navbar } from '../components'
import { SideSocialIcons, MainTextnImage, MapnConnect, Trending, GetinTouch, ProductCard, Reviews, Footer } from '../components'

export default function Home() {
  const [cart, setCart] = useState(0)
  return (
    <div>
      <Head>
        <title>ShopnStich</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="banner">
        <Navbar cart={cart}/>
        <MainTextnImage />
        <SideSocialIcons />
      </div>
      <div className="product-banner">
        <ProductCard setCart={setCart} cart={cart} category="Men" />
        <ProductCard setCart={setCart} cart={cart} category="Women" />
        <ProductCard setCart={setCart} cart={cart} category="Kids" />
      </div>
      <Trending />
      {/* <GetinTouch /> */}
      <MapnConnect/>
      <Reviews />
      <Footer />
    </div>
  )
}
