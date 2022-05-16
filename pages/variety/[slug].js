import React from 'react'
import { BreadCrumbs, Footer, Navbar, RelatedProducts } from '../../components'
import { getVarieties, getVarietyDetails } from '../../services'

const varietyDetails = ({ variety }) => {
  return (
    <div>
      <Navbar adjust={true} />
      {/* <BreadCrumbs /> */}
      <img src={variety?.image?.url} class="max-w-full mx-auto h-auto py-5" alt="..." />
      {variety?.products.length > 0 ? <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">{variety?.products.map(RelatedProducts)}</div> : <div class='flex justify-center items-center text-red-500 font-bold text-xl py-5'> Comming Soon !</div>}
      <Footer />
    </div>
  )
}

export default varietyDetails;

export async function getStaticPaths() { // all Variety slugs to generate paths 
  const varieties = await getVarieties();
  return {
    paths: varieties?.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const data = await getVarietyDetails(params?.slug);
  return {
    props: { variety: data }
  }
}