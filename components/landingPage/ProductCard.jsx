import React from 'react'
import Image from 'next/image'

const ProductCard = ({ category }) => {
    const cards = [{ img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" }, { img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" }, { img: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" }, { img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" }, { img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" }, { img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" }, { img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" }, { img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" }, { img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" }, { img: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg" }]
    return (
        <div class=''>
            <h1 class="text-gray-200 text-5xl font-bold font-serif p-12 text-center">
                {category} Collections
                <div class="flex justify-center items-center">
                    <div class="h-0.5 my-2 bg-green-950 w-1/12" />
                </div>
            </h1>

            <div class="flex flex-col m-auto p-auto">
                <div
                    class="flex overflow-x-scroll pb-10 hide-scroll-bar"
                >
                    <div
                        class="flex flex-nowrap lg:ml-10 md:ml-10 ml-5 "
                    >
                        {
                            cards.map(card => (
                                <div class="px-2">
                                    <div class="w-full h-auto overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                        <div className="card-wd">
                                            <a href="#" class="flex p-6 justify-center items-center">
                                                {/* <img class="p-6 rounded-t-lg" src="https://source.unsplash.com/random/350x350" /> */}
                                                <Image
                                                    // alt={author.name}
                                                    unoptimized
                                                    height="250px"
                                                    width="250px"
                                                    src={card.img}
                                                />
                                            </a>
                                            <div class="px-5 pb-5">
                                                <a href="#">
                                                    <h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h3>
                                                </a>
                                                <div class="flex items-center mt-2.5 mb-5">
                                                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                                                </div>
                                                <div class="flex justify-between items-center">
                                                    <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                                    <a href="#" class="text-white bg-green-700 hover:bg-green-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
