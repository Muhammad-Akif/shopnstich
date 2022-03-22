import React from 'react'

const MainBanner = () => {
    return (
        <>
            <section class="text-white mx-auto max-w-8xl bg-gray-900 mt-1">
                <div class="max-w-screen-xl px-4 py-16 mx-auto lg:h-42 lg:items-center lg:flex">
                    <div class="max-w-3xl mx-auto text-center">
                        <h1 class="text-3xl font-extrabold text-transparent sm:text-5xl bg-clip-text bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400">
                            Understand User Flow.

                            <span class="sm:block">
                                Increase Conversion.
                            </span>
                        </h1>

                        <p class="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus numquam ea!
                        </p>

                        <div class="flex flex-wrap justify-center gap-4 mt-8">
                            <a class="block w-full px-12 py-3 text-sm font-medium text-white bg-blue-600 border border-blue-600 rounded sm:w-auto active:text-opacity-75 hover:bg-transparent hover:text-white focus:outline-none focus:ring" href="/get-started">
                                Get Started
                            </a>

                            <a class="block w-full px-12 py-3 text-sm font-medium text-white border border-blue-600 rounded sm:w-auto hover:bg-blue-600 active:bg-blue-500 focus:outline-none focus:ring" href="/about">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainBanner