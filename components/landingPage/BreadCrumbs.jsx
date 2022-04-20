import Link from 'next/link'
import React from 'react'

const BreadCrumbs = () => {
    return (
        <nav class="bg-grey-light rounded-md w-full">
            <ol class="list-reset flex">
                <li><Link href="#" class="text-green-950 hover:text-green-960">Home</Link></li>
                <li><span class="text-gray-500 mx-2">{'>'}</span></li>
                <li><Link href="#" class="text-green-950 hover:text-green-960">Library</Link></li>
                <li><span class="text-gray-500 mx-2">{'>'}</span></li>
                <li class="text-gray-500">Data</li>
            </ol>
        </nav>
    )
}

export default BreadCrumbs