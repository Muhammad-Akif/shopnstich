import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import tailorImg from '../../images/landingPage/08.png'
import { useStateContext } from '../../context/StateContext';


const mainTextnImage = () => {
    const { isTailor, setTailor } = useStateContext();
    return (
        <div class="px-5 sm:mx-auto py-6 sm:py-8 flex flex-col-reverse md:flex-row sm:justify-around sm:items-center">
            <div data-aos="fade-up" class="text-white py-4  text-xl sm:w-11/12 md:w-1/2 xl:w-[45%] sm:text-4xl xl:mr-20 md:text-5xl font-serif"> <strong class="text-green-950"> Best Place</strong>, Where You Shop & Stitch Your Worthy Cloths Trustedly...
                <div class="text-xl sm:text-3xl  pt-4 text-orange-300 italic">Your Stitched Order, delivered with in 2 days, over all across Pakistan.   </div>
                <div class="h-1 my-6 bg-green-950
                 sm:w-11/12 w-full" />
                <div class="text-base text-center sm:text-left sm:text-xl font-bold pb-4">Commited Quality, Garenteed!</div>
                <div class="sm:space-x-4 space-x-2">
                    <div class="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center sm:justify-start items-center">
                        <Link href='/signup'>
                            <button class="py-2 px-3 w-full bg-transparent border-2 border-green-500 text-green-500 text-lg rounded-lg hover:bg-green-500 hover:text-white focus:border-4 focus:border-green-300">Lets Get Started...</button>
                        </Link>
                        <Link href='/signup'>
                            <button onClick={() => setTailor(true)} class="py-2 px-3 w-full bg-transparent border-2 border-green-500 text-green-500 text-lg rounded-lg hover:bg-green-500 hover:text-white focus:border-4 focus:border-green-300">Become a Tailor...</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div data-aos="fade-down" class=" pb-6 sm:pb-0 max-w-2xl self-center"><Image src={tailorImg} width={400} height={400}  alt="tailorImg" /></div>
        </div>
    )
}

export default mainTextnImage;
