import React from 'react'

const varietyDetail= () => {
  return (
    <div>varietyDetail</div>
  )
}

export default varietyDetail;

export async function getStaticPaths() { // all Variety slugs to generate paths 
    const varieties = await getVarieties();
    return {
        paths: varieties?.map(({ node: { slug }}) => ({ params: { slug}})),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const data = await getvarietyDetail(params?.slug);
    return {
      props: { post: data }
    }
}