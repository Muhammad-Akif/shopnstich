import React, { useState } from 'react'
import { getProducts, getProductDetails } from '../../services'
import { BsArrowBarLeft } from "react-icons/bs";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useStateContext } from '../../context/StateContext';


const product = ({ product }) => {

  const { decQty, incQty, qty, onAdd, totalQuantities } = useStateContext();
  const router = useRouter()

  return (
    <div>
      <div class="absolute top-2 right-5">
        <button class="py-4 px-1 relative border-2 border-transparent rounded-full text-white-900  outline-none text-white mr-4 transition duration-150 ease-in-out" onClick={() => router.push('/cart')} aria-label="Cart">
          <svg class="h-6 w-6 text-black" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
          </svg>
          <span class="absolute inset-0 object-right-top -mr-6">
            <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-none rounded-full text-xs font-semibold leading-4 bg-red-600 text-white">
              {totalQuantities}
            </div>
          </span>
        </button>
      </div>
      <div class="absolute top-5 left-5">
        {/* <Link href="/"><BsArrowBarLeft class="text-2xl hover:cursor-pointer inline-block" /></Link> */}
        <span class="font-semibold align-middle pl-5 text-xl font-serif">Product Detail</span>
      </div>
      <section class="text-gray-700 h-screen body-font overflow-hidden bg-white">
        <div class="container px-5 py-20  mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" class="img_h lg:w-1/2 w-full object-center" src={product.image.url} />
            <div class="lg:w-1/2 w-full flex flex-col justify-center lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              {/* <h2 class="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2> */}
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                  {product.variety.name}
                </span>
              </div>
              <p class="leading-relaxed">{product.description}</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div class="flex items-center">
                  <span class="mr-3">Size</span>
                  <div class="relative">
                    <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
                <h3 class="pl-4 pr-3">Quantity:</h3>
                <div className="quantity">
                  <p className="quantity-desc flex items-center h-10">
                    <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
                    <span className="num">{qty}</span>
                    <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
                  </p>
                </div>
              </div>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">Rs: {product.price}</span>
                <button type="button" class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded" onClick={() => onAdd(product, qty)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default product


export async function getStaticPaths() {
  const Products = await getProducts();
  return {
    paths: Products?.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const data = await getProductDetails(params?.slug);
  return {
    props: { product: data }
  }
}