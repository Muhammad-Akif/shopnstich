import React from 'react'
import Image from 'next/image'


const Trending = ({ trends }) => {
    // const trending = [{ title: "I'm supper dog for you." }, { title: "I'm supper dog for you." }, { title: "I'm supper dog for you." }, { title: "I'm supper dog for you." }]
    return (
        <div class="bg-green-100">
            <div class='mx-auto'>
                <div class="mx-auto px-2">
                    <h1 class="text-green-960 text-3xl sm:text-5xl font-bold font-serif p-12 text-center">
                        Trendings
                        <div class="flex justify-center items-center">
                            <div class="h-0.5 my-2 bg-green-950 w-2/4 sm:w-1/12" />
                        </div>
                        <p class="text-green-960 text-xl sm:text-2xl w-full italic text-center">
                            Top Selling Products Now a Days, <span class="text-orange-400">Order Now!</span> 
                        </p>
                    </h1>
                    <div class="grid pb-12 grid-cols-1 md:grid-cols-3 gap-4 px-6 sm:px-20">
                        {trends.map(trend => (
                            <div class="wrapper antialiased text-gray-900 cursor-pointer">
                                <div>
                                    <Image
                                        // alt={author.name}
                                        unoptimized
                                        height="280px"
                                        width="320px"
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
