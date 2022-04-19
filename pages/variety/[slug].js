import React from 'react'
import { Footer, Navbar } from '../../components'
import { getVarieties, getVarietyDetails } from '../../services'

const varietyDetails = ({ variety }) => {
  console.log("variety -->", variety)
  return (
    <>
      <Navbar />
      <RelatedProducts/>
      <div class="absolute bottom-0">
        <Footer />
      </div>
    </>
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