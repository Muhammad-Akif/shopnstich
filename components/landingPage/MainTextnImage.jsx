import React from 'react'
import Image from 'next/image'
import tailorImg from '../../images/landingPage/04.png'

const mainTextnImage = () => {
    console.log('runing')
    return (
        <div class="px-24 py-8 grid grid-cols-2">
            <div class="text-white  text-7xl max-w-xl"> <strong class="text-green-950"> Best Place </strong>, where World Shop and Stich their Cloths...
                    <div class="h-1 my-6 bg-green-950 w-25" />
                    <button class="p-2 pl-5 pr-5 bg-transparent border-2 border-green-500 text-green-500 text-lg rounded-lg hover:bg-green-500 hover:text-gray-100 focus:border-4 focus:border-green-300">Success</button>
            </div>
            <div class="text-right"><Image src={tailorImg} width={400} height={900} alt="tailorImg" /></div>
        </div>
    )
}

export default mainTextnImage;
