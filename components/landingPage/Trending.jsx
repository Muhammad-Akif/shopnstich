import React from 'react'
import Image from 'next/image'


const Trending = ({ trends }) => {
    // const trending = [{ title: "I'm supper dog for you." }, { title: "I'm supper dog for you." }, { title: "I'm supper dog for you." }, { title: "I'm supper dog for you." }]
    return (
        <div>
            <div class='mx-auto'>
                <div class="mx-auto px-2 my-1">
                    <h1 class="text-gray-200 text-5xl font-bold font-serif p-12 text-center">
                        Trendings
                        <div class="flex justify-center items-center">
                            <div class="h-0.5 my-2 bg-green-950 w-1/12" />
                        </div>
                    </h1>
                    <div class="grid pb-12 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-6">
                        {trends.map(trend => (
                            // <div
                            //     class="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
                            //     <div class="w-full md:w-1/3 bg-white grid place-items-center">
                            //         <img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tailwind logo" class="rounded-xl" />
                            //     </div>
                            //     <div class="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                            //         <div class="flex justify-between item-center">
                            //             <p class="text-gray-500 font-medium hidden md:block">Vacations</p>
                            //             <div class="flex items-center">
                            //                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" viewBox="0 0 20 20"
                            //                     fill="currentColor">
                            //                     <path
                            //                         d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            //                 </svg>
                            //                 <p class="text-gray-600 font-bold text-sm ml-1">
                            //                     4.96
                            //                     <span class="text-gray-500 font-normal">(76 reviews)</span>
                            //                 </p>
                            //             </div>
                            //             <div class="">
                            //                 <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-pink-500" viewBox="0 0 20 20"
                            //                     fill="currentColor">
                            //                     <path fill-rule="evenodd"
                            //                         d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            //                         clip-rule="evenodd" />
                            //                 </svg>
                            //             </div>
                            //             <div class="bg-gray-200 px-3 py-1 rounded-full text-xs font-medium text-gray-800 hidden md:block">
                            //                 Superhost</div>
                            //         </div>
                            //         <h3 class="font-black text-gray-800 md:text-3xl text-xl">The Majestic and Wonderful Bahamas</h3>
                            //         <p class="md:text-lg text-gray-500 text-base">The best kept secret of The Bahamas is the country’s sheer
                            //             size and diversity. With 16 major islands, The Bahamas is an unmatched destination</p>
                            //         <p class="text-xl font-black text-gray-800">
                            //             $110
                            //             <span class="font-normal text-gray-600 text-base">/night</span>
                            //         </p>
                            //     </div>
                            // </div>
                            // <div class="flex justify-center items-center">
                            //     <div class="container flex justify-center">
                            //         <div class="max-w-sm">
                            //             <div class="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                            //                 <img class="rounded-t-lg" src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1049&q=80" alt="" />
                            //                 <div class="py-6 px-8 rounded-lg bg-white">
                            //                     <h1 class="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">I'm supper dog for you.</h1>
                            //                     <p class="text-gray-700 tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
                            //                     <button class="mt-6 py-2 px-4 bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">Buy Now</button>
                            //                 </div>
                            //                 <div class="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                            //                     <span class="text-md">$150</span>
                            //                 </div>
                            //             </div>
                            //         </div>
                            //     </div>
                            // </div>
                            <div class="wrapper antialiased text-gray-900 cursor-pointer">
                                <div>
                                    <Image
                                        // alt={author.name}
                                        unoptimized
                                        height="350px"
                                        width="350px"
                                        src={trend.img}
                                        class="w-full object-cover object-center rounded-lg shadow-md"
                                    />

                                    <div class="relative px-4 -mt-16  ">
                                        <div class="bg-white p-6 rounded-lg shadow-lg">
                                            <div class="flex items-baseline">
                                                <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                                    New
                                                </span>
                                                <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                                    2 baths  &bull; 3 rooms
                                                </div>
                                            </div>

                                            <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">A random Title</h4>

                                            <div class="mt-1">
                                                $1800
                                                <span class="text-gray-600 text-sm">   /wk</span>
                                            </div>
                                            <div class="mt-4">
                                                <span class="text-teal-600 text-md font-semibold">4/5 ratings </span>
                                                <span class="text-sm text-gray-600">(based on 234 ratings)</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Trending
