import React from 'react'
import { Whyus, Process,Navbar, Footer } from '../components'
import { getAllProducts } from '../services'

const appworking = ({products}) => {
  return (
    <div>
      <Navbar products={products} adjust="false"/>
      <Process />
      <Whyus />
      <Footer />
    </div>
  )
}

export default appworking

export async function getStaticProps() {
  const data = await getAllProducts();
  console.log("dtat --> ", data)
  return {
    props: { products: data }
  }
}