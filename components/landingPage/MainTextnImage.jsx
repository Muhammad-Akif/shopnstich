import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import tailorImg from '../../images/landingPage/08.png'

const mainTextnImage = () => {
    return (
        <div class="px-5 sm:px-24 sm:-mb-12 py-6 sm:py-8 flex flex-col-reverse sm:grid grid-cols-2">
            <div class="text-white text-4xl sm:text-5xl max-w-xl font-serif"> <strong class="text-green-950"> Best Place</strong>, Where You Shop And Stich Your Worth Cloths Tustedly...
                <div class="text-3xl pt-4 text-orange-300 italic">Your Stiched Order, delivered with in 2 days, over all across Pakistan.   </div>
                <div class="h-1 my-6 bg-green-950 w-11/12" />
                <div class="text-xl font-bold pb-4">Commited Quality, Garenteed!</div>
                <Link href='/signup'>
                    <button class="p-2 pl-5 pr-5 bg-transparent border-2 border-green-500 text-green-500 text-lg rounded-lg hover:bg-green-500 hover:text-white focus:border-4 focus:border-green-300">Let's Get Started...</button>
                </Link>
            </div>
            <div class="text-right pb-6 sm:pb-0"><Image src={tailorImg} width={400} height={410} alt="tailorImg" /></div>
        </div>
    )
}

export default mainTextnImage;
