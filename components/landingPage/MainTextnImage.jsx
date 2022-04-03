import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import tailorImg from '../../images/landingPage/08.png'

const mainTextnImage = () => {
    return (
        <div class="px-5 sm:max-w-6xl sm:mx-auto sm:-mb-12 py-6 sm:py-8 flex flex-col-reverse max-h-screen sm:flex-row sm:justify-between sm:items-center">
            <div class="text-white text-xl sm:text-5xl max-w-xl font-serif"> <strong class="text-green-950"> Best Place</strong>, Where You Shop And Stich Your Worth Cloths Tustedly...
                <div class="text-xl sm:text-3xl pt-4 text-orange-300 italic">Your Stiched Order, delivered with in 2 days, over all across Pakistan.   </div>
                <div class="h-1 my-6 bg-green-950
                 w-11/12" />
                <div class="text-base text-center sm:text-left sm:text-xl font-bold pb-4">Commited Quality, Garenteed!</div>
                <div class="sm:space-x-4 space-x-2">
                    <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center sm:justify-start items-center">
                        <Link href='/signup'>
                            <button class="py-2 px-3 w-1/2 bg-transparent border-2 border-green-500 text-green-500 text-lg rounded-lg hover:bg-green-500 hover:text-white focus:border-4 focus:border-green-300">Lets Get Started...</button>
                        </Link>
                        <Link href='/signup'>
                            <button class="py-2 px-3 w-1/2 bg-transparent border-2 border-green-500 text-green-500 text-lg rounded-lg hover:bg-green-500 hover:text-white focus:border-4 focus:border-green-300">Become a Tailor...</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div class="text-right pb-6 sm:pb-0 max-w-3xl"><Image src={tailorImg} width={400} height={400} alt="tailorImg" /></div>
        </div>
    )
}

export default mainTextnImage;
