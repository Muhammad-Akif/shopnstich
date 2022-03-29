import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../images/logo.png'
import {MobileNav, MegaMenu} from './index'

function Navbar({ cart }) {
    return (
        <>
            <nav class="flex items-center justify-between flex-wrap bg-transparent px-6 pt-6 sm:px-12 sm:py-8">
                <div class="flex items-center justify-between flex-shrink-0 mr-6">
                    <Link href="/"><Image class="hover:cursor-pointer" src={logo} width="160" height="40" title='logo' /></Link>
                   
                </div>
                <MobileNav/>
                <div class="mt-3 w-full block hidden flex-grow lg:flex lg:items-center lg:justify-end lg:w-auto">
                    <div class="text-lg mr-4">
                        <div class="inline-flex">
                       <MegaMenu category="Men"/>
                       <MegaMenu category="Women"/>
                       <MegaMenu category="Kids"/>
                        </div>
                        <a href="#responsive-header" class="block mt-4 hover:text-green-950 transition duration-150 ease-in-out maincolor lg:inline-block lg:mt-0 text-white mr-4">
                            How it Works?
                        </a>
                        <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-950 transition duration-150 ease-in-out mr-4">
                            About
                        </a>
                    </div>
                    <form class="group relative mr-4">
                        <svg width="20" height="20" fill="currentColor" class="absolute left-3 top-1/2 -mt-2.5 text-gray-400 pointer-events-none group-focus-within:text-green-960" aria-hidden="true">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                        </svg>
                        <input class="focus:ring-2 focus:ring-green-950 focus:outline-none w-full text-sm leading-6 text-gray-900 placeholder-gray-500 rounded-md py-2 pl-10 ring-1 ring-gray-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Filter Products ..." />
                    </form>
                    <div>
                        <button class="py-4 px-1 relative border-2 border-transparent rounded-full text-white-900  outline-none text-white mr-4 transition duration-150 ease-in-out" aria-label="Cart">
                            <svg class="h-6 w-6" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
                            </svg>
                            <span class="absolute inset-0 object-right-top -mr-6">
                                <div class="inline-flex items-center px-1.5 py-0.5 border-2 border-none rounded-full text-xs font-semibold leading-4 bg-red-600 text-white">
                                    {cart}
                                </div>
                            </span>
                        </button>
                    </div>
                    <Link href="/login" class="">
                        <button class="px-3 py-1 hover:scale-105 tracking-wide bg-transparent font-bold border-2 border-green-950 hover:border-green-500 text-white text-lg rounded-lg hover:bg-green-500">Login</button>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
