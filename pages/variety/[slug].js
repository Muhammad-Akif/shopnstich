import React from 'react'

const varietyDetails= () => {
  return (
    <div>varietyDetails</div>
  )
}

export default varietyDetails;

export async function getStaticPaths() { // all Variety slugs to generate paths 
    const varieties = await getVarieties();
    return {
        paths: varieties?.map(({ node: { slug }}) => ({ params: { slug}})),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const data = await getVarietyDetails(params?.slug);
    return {
      props: { post: data }
    }
}