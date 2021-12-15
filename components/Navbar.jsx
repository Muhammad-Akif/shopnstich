import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <>
            <nav class="flex items-center justify-between flex-wrap bg-transparent px-12 py-8 w-full">
                <div class="flex items-center flex-shrink-0 mr-6">
                    <Link href="/"><img class="hover:cursor-pointer" src='https://svgshare.com/i/coH.svg' width="150" height="100" title='logo' /></Link>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>
                <div class="w-full block flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto">
                    <div class="text-lg mr-4">
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 ">
                            Men
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 pl-1 inline w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </a>
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            Women
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 pl-1 inline w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </a>
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-whitem mr-4">
                            Kids
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 pl-1 inline w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </span>
                        </a>
                        <a href="#responsive-header" class="block mt-4 maincolor lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            How it Works?
                        </a>
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
                            About
                        </a>
                    </div>
                    <form class="group relative mr-4">
                        <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-gray-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                        </svg>
                        <input class="focus:ring-2 focus:ring-blue-500 focus:outline-none w-full text-sm leading-6 text-gray-900 placeholder-gray-400 rounded-md py-2 pl-10 ring-1 ring-gray-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Filter projects..." />
                    </form>
                    <div class="mr-4 text-white">
                        <span class="relative inline-block">
                            <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 20 20"><path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" fill-rule="evenodd"></path></svg>
                            <span class="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">99</span>
                        </span>
                        <span class="relative inline-block ml-8">
                            {/* <svg class="w-6 h-6 text-gray-700 fill-current" viewBox="0 0 20 20"><path d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" fill-rule="evenodd"></path></svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                            <span class="absolute top-0 right-0 inline-block w-2 h-2 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full"></span>
                        </span>
                    </div>
                    <div>
                        <button class="py-4 px-1 relative border-2 border-transparent rounded-full text-white-900  outline-none text-white mr-4 transition duration-150 ease-in-out" aria-label="Cart">
                            <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            <span class="absolute inset-0 object-right-top -mr-6">
                                <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-none rounded-full text-xs font-semibold leading-4 bg-red-600 text-white">
                                    6
                                </div>
                            </span>
                        </button>
                    </div>
                    <Link href="/login" class="text-white">
                        <div className='nav-btn'>
                            Login
                        </div>
                    </Link>
                    {/* <a class="inline-block text-lg px-4 py-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-green-900 mt-4 transition duration-150 ease-in-out lg:mt-0">Login</a> */}
                </div>
            </nav>
        </>
    )
}

export default Navbar
