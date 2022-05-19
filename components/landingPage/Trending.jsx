import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const Trending = ({ products }) => {
    // const trending = [{ title: "I'm supper dog for you." }, { title: "I'm supper dog for you." }, { title: "I'm supper dog for you." }, { title: "I'm supper dog for you." }]
    const trend1 = products.filter(product => product.category.name === 'Men')[12]
    const trend2 = products.filter(product => product.category.name === 'Women')[3]
    const trend3 = products.filter(product => product.category.name === 'Men')[10]
    const trends = [trend1, trend2, trend3]
    return (
        <div class="bg-green-100">
            <div class='mx-auto'>
                <div class="mx-auto px-2">
                    <h1 class="text-green-960 text-3xl sm:text-5xl font-bold font-serif p-12 text-center">
                        <div data-aos="zoom-up">
                            Trendings
                        </div>
                        <div class="flex justify-center items-center">
                            <div class="h-0.5 my-2 bg-green-950 w-2/4 sm:w-1/12" />
                        </div>
                        <p class="text-green-960 text-lg sm:text-2xl w-full italic text-center">
                            Our Top Selling Products Now a Days, <span class="text-orange-400">Order Now!</span>
                        </p>
                    </h1>
                    <div class="grid pb-12 grid-cols-1 md:grid-cols-3 gap-4 px-6 sm:px-20">
                        {trends.map((trend, key) => (
                            <div key={key} class="wrapper antialiased text-gray-900 cursor-pointer">
                                <Link href={`/product/${trend.slug}`} >
                                    <div data-aos="zoom-in">
                                        {/* <Image
                                        // alt={author.name}
                                        unoptimized
                                        layout='responsive'
                                        width={180} height={150}
                                        src={trend.img}
                                        class=" object-center rounded-lg shadow-lg"
                                    /> */}
                                        <img
                                            // alt={name}
                                            // className="h-1/4 object-contain w-full"
                                            src={trend.image?.url}
                                        />
                                        <div class="relative -mt-2 mx-2 ">
                                            <div class="bg-white p-6 rounded-lg shadow-lg">
                                                <div class="flex items-baseline">
                                                    <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                                                        Trendings
                                                    </span>
                                                    {/* <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                                                    2 baths  &bull; 3 rooms
                                                </div> */}
                                                </div>

                                                <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">{trend.name}</h4>

                                                <div class="mt-1">
                                                    <div class="text-md pb-2 md:pb-0 text-gray-900 dark:text-white">Rs: {trend.price}</div>
                                                </div>
                                                <div class="mt-4">
                                                    <span class="text-teal-600 text-md font-semibold">{key==0 ? 4.5 : key==1 ? 4.8 : 5}/5 ratings </span>
                                                    <span class="text-sm text-gray-600">(based on 234 ratings)</span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Trending
