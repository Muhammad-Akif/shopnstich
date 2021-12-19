import Head from 'next/head'
import { Navbar } from '../components'
import { SideSocialIcons, MainTextnImage, FeatureCard, MainServices, ProductCard, Reviews, Footer } from '../components'

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
      {/* <FeatureCard/> */}
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <MainServices />
      <Reviews />
      <Footer />
    </div>
  )
}
