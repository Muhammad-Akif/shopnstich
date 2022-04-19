import React from 'react'

const product = () => {
  return (
    <div>products</div>
  )
}

export default product


export async function getStaticPaths() {
    const products = await getProducts();
    return {
        paths: products?.map(({ node: { slug }}) => ({ params: { slug}})),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params?.slug);
    return {
      props: { post: data }
    }
}