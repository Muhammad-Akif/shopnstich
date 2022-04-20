import React from 'react'
import { Footer, Navbar, RelatedProducts } from '../../components'
import { getVarieties, getVarietyDetails } from '../../services'

const varietyDetails = ({ variety }) => {
  return (
    <div>
      <Navbar adjust={true}/>
      <BreadCrumbs />
      <img src="https://cdn.shopify.com/s/files/1/2635/3244/collections/1200x330-Men-Kurta.jpg?v=1648862476" class="max-w-full mx-auto h-auto py-5" alt="..." />
      <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
        {variety?.products.map(RelatedProducts)}
      </div>
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