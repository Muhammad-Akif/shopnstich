import React from 'react'

const products = () => {
  return (
    <div>products</div>
  )
}

export default products


export async function getStaticPaths() {
    const Products = await getProducts();
    return {
        paths: posts?.map(({ node: { slug }}) => ({ params: { slug}})),
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params?.slug);
    return {
      props: { post: data }
    }
}