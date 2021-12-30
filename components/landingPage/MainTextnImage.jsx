import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import tailorImg from '../../images/landingPage/08.png'

const mainTextnImage = () => {
    return (
        <div class="px-24 py-8 grid grid-cols-2">
            <div class="text-white  text-7xl max-w-xl  font-serif"> <strong class="text-green-950"> Best Place</strong>,  And Stich Their Cloths Tustedly...
                <div class="h-1 my-6 bg-green-950 w-11/12" />
                <div class="text-xl font-bold">Commited Quality, Garenteed!</div>
                <Link href='/signup'>
                    <button class="p-2 pl-5 pr-5 bg-transparent border-2 border-green-500 text-green-500 text-lg rounded-lg hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300">Let's Get Started...</button>
                </Link>
            </div>
            <div class="text-right"><Image src={tailorImg} width={500} height={440} alt="tailorImg" /></div>
        </div>
    )
}

export default mainTextnImage;
