import Link from 'next/link'
import React from 'react'

const BreadCrumbs = () => {
    return (
        <nav class="bg-grey-light rounded-md max-w-7xl pt-2 mr-2 mx-auto">
            <ol class="list-reset flex">
                <li><Link href="/" ><span class="text-gray-800 hover:cursor-pointer hover:text-green-960">Home</span></Link></li>
                <li><span class="text-gray-500 mx-2">{'>'}</span></li>
                <li><Link href="#" ><span class="text-gray-800 hover:cursor-pointer hover:text-green-960">Library</span></Link></li>
                <li><span class="text-gray-600 mx-2">{'>'}</span></li>
                <li class="text-gray-500">Data</li>
            </ol>
        </nav>
    )
}

export default BreadCrumbs