import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ category, cloths }) => {
    return (
        <div class='bg-orange-100'>
            <h1 class="text-green-960 w-full border border-red-50 whitespace-nowrap text-3xl sm:text-5xl font-bold font-serif py-12 text-center">
                <div data-aos="zoom-up">
                    {category} Collections
                </div>
                <div class="flex justify-center items-center">
                    <div class="h-0.5 my-2 bg-green-950 w-2/4 sm:w-1/12" />
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
                            cloths.map(card => (
                                <div class="px-2 group">
                                    <div class="w-52 lg:w-full h-auto overflow-hidden rounded-lg shadow-md bg-white hover:shadow-2xl transition-shadow duration-300 ease-in-out">
                                        <div className="card-wd ">
                                            <Link href="#">
                                               <div class="flex w-52 lg:w-full p-6 hover:cursor-pointer justify-center items-center group-hover:scale-110 transition-transform duration-200 ease-in-out">
                                                <Image
                                                    unoptimized
                                                    height={400}
                                                    width={400}
                                                    src={card.img}
                                                />
                                               </div>
                                            </Link>
                                            <div class="px-5 w-52 lg:w-full">
                                                <h3 class="text-md xl:text-lg font-semibold tracking-tight text-gray-900">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h3>
                                                <div class="flex items-center mt-2.5 mb-2">
                                                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <svg class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                                    <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">5.0</span>
                                                </div>
                                                <div class="flex flex-col xl:flex-row justify-between items-center mb-5">
                                                    <div class="text-xl pb-2 md:pb-0 font-bold text-gray-900 dark:text-white">Rs: 599</div>
                                                    <button class="text-white bg-orange-400 hover:bg-orange-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-1/2 p-2 sm:py-2.5 text-center"> 
                                                        View Details
                                                    </button>
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

//p-3 m-4 sm:px-4 sm:py-2.5