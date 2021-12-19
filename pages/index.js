import Head from 'next/head'
import {Navbar} from '../components'
import { SideSocialIcons } from '../components'
import { MainTextnImage } from '../components'

export default function Home() {
  return (
    <div className="banner">
      <Head>
        <title>ShopnStich</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <MainTextnImage/>
      <SideSocialIcons/>
      
    </div>
  )
}
