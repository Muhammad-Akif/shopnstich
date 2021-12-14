import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <>
            <nav class="flex items-center justify-between flex-wrap bg-transparent p-6 w-full">
                <div class="flex items-center flex-shrink-0 mr-6">
                   <Link href="/"><img class="hover:cursor-pointer" src='https://svgshare.com/i/coH.svg'width="150" height="100" title='logo' /></Link>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div class="text-lg lg:flex-grow">
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Men
                        </a>
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            Women
                        </a>
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-whitem mr-4">
                            Kids
                        </a>
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            About
                        </a>
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                            Contact
                        </a>
                    </div>
                    <div>
                        <Link href="/login">
                        <a class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-green-900 mt-4 lg:mt-0">Login</a>
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
