import React, { useState } from 'react'
import { GiClothes } from 'react-icons/gi'

const measurement = () => {

    const menDetails = [
        { image: 'https://www.crowntailor.com/images/menm/men_size_1.jpg', title: "FULL SHOULDER WIDTH", description: "Measure from the end of the right shoulder to the end of the left shoulder. We define the 'End of the Shoulder as where the horizontal plane of the shoulder intersects thevertical plane of the arm'" },
        { image: 'https://www.crowntailor.com/images/menm/men_size_2.jpg', title: "SLEEVES", description: "The 'Pinch' of the hand is found where the base of the thumb and the base of the index finger intersect" },
        { image: 'https://www.crowntailor.com/images/menm/men_size_3.jpg', title: "FULL CHEST", description: "Measure around the chest and body at its fullest part (typically right under the armpits and shoulder blades, right across the nipples). Hold the tape against the body tight enough so that it does not slip down, but not so tight that it restricts breathing. It should be 'snug'. Make sure the tape is horizontal and theperson's arms are by their side; then take a normal breath and measure. Do not puff out your chest." },
        { image: 'https://www.crowntailor.com/images/menm/men_size_4.jpg', title: "WAIST", description: "Measure around the fullest part of the waist/stomach or right below your bottom ribs, whichever is greater." },
        { image: 'https://www.crowntailor.com/images/menm/men_size_5.jpg', title: "HIPS/ SEAT", description: "Measure around the fullest part of your hips and buttocks." },
        { image: 'https://www.crowntailor.com/images/menm/men_size_6.jpg', title: "FRONT SHOULDER WIDTH", description: "With the person's arms by their side, measure across the front of the chest. Start at the front of the right armpit, continue measuring across the nipples, and then stop at the front of the left armpit. Do not measure under the arms." },
        { image: 'https://www.crowntailor.com/images/menm/men_size_7.jpg', title: "BACK SHOULDER WIDTH", description: "With the person's arms by their side, measure across the back. Start at the back of the right armpit, continue measuring across the shoulder blades, and then stop at the back of the left armpit. Do not measure under the arms." },
        { image: 'https://www.crowntailor.com/images/menm/men_size_8.jpg', title: "FRONT JACKET LENGTH", description: "Measure straight down the front from the base of the neck (right or left side) to the point level with your thumb knuckle.or till the length you would like your jacket" },
        { image: 'https://www.crowntailor.com/images/menm/men_size_9.jpg', title: "NECK", description: "The tape should be comfortably touching the skin, with enough room so that you do not feel restricted." },
        { image: 'https://www.crowntailor.com/images/menm/men_size_10.jpg', title: "TROUSER WAIST", description: "Measure around your waist at the level where you would normally wear your pant's belt. With the tape measure snug around your waist, relax, and take the measurement. Don't be alarmed if this measuremen seems larger than expected; off-the-rack pants are normally labeled as being smaller than what they really are." },
        { image: 'https://www.crowntailor.com/images/menm/men_size_11.jpg', title: "CROTCH", description: "Measure from the front top of the pant's waistband to the back top of the pant's waistband." },
        { image: 'https://www.crowntailor.com/images/menm/men_size_12.jpg', title: "THIGH", description: "Measure around your thigh at its widest point. You need measure only one side." },
        { image: 'https://www.crowntailor.com/images/menm/men_size_13.jpg', title: "TROUSER'S LENGTH", description: "Measure from the top of your pant’s waistband to the floor along the outside of your leg. Make sure the tape is tight, that you are standing straight, and then measure." },
        { image: 'https://www.crowntailor.com/images/menm/men_size_14.jpg', title: "CUFF", description: "Measure width around cuff as shown." },
    ]
    const womenDetails = [
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_1.jpg', title: "FRONT LENGTH", description: "Measure from shoulder seam (at neck) to bust point." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_2.jpg', title: "FRONT LENGTH", description: "Measure from shoulder seam (at neck) over bust to waist." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_3.jpg', title: "BACK LENGTH", description: "Measure from the collar seam to back waist line." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_4.jpg', title: "FRONT WIDTH", description: "Measure from top armpit angle to other armpit angle across the front chest." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_5.jpg', title: "BUST", description: "Measure around the biggest part of bust and keep tape a little high on back." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_6.jpg', title: "WAIST", description: "Measure around waistline where normally you would wear your pant / skirt." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_7.jpg', title: "BACK WIDTH", description: "Measure from top armpit angle to other armpit angle across your back." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_8.jpg', title: "POINT BUST", description: "Measure from one point bust to another point bust." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_9.jpg', title: "SLEEVE LENGTH", description: "Measure from shoulder seam to wrist." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_10.jpg', title: "ARM", description: "Measure around the arm." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_11.jpg', title: "ARMHOLE", description: "Measure around the armhole." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_12.jpg', title: "NECK", description: "Measure around the neck." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_13.jpg', title: "CUFF", description: "Measure around the cuff as shown." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_14.jpg', title: "JACKET / BLOUSE LENGTH", description: "Measure from top of highest shoulder point to the length of your jacket design style." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_14.jpg', title: "COAT LENGTH", description: "Measure from shoulder seam over bust to coat length." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_16.jpg', title: "SKIRT LENGTH", description: "Measure from waist to skirt length." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_17.jpg', title: "HIP", description: "Measure around biggest part of hip and seat" },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_18.jpg', title: "HIGH HIP", description: "Measure around hips." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_19.jpg', title: "INSEAM", description: "Measure from crotch to bottom of cuff." },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_20.jpg', title: "TROUSER LENGTH", description: "Measure around biggest part of hip and seat" },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_21.jpg', title: "CUFF", description: "Measure around biggest part of hip and seat" },
        { image: 'https://www.crowntailor.com/images/womenw/wmen_size_23.jpg', title: "TROUSER THIGH", description: "Measure around the biggest part of the leg." },
    ]

    const [isMeasure, setMeasure] = useState(false)
    const [isConfirm, setConfirm] = useState(false)
    const [personalInfo, setPersonalInfo] = useState({
        fullname: "",
        email: "",
        phone: "",
        age: "",
        height: "",
        weight: ""
    })
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setPersonalInfo((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }
    const info = () => {
        setMeasure(false)
        setConfirm(false)
    }
    const measure = () => {
        setMeasure(true)
        setConfirm(false)
    }
    const confirm = () => {
        setMeasure(true)
        setConfirm(true)
    }
    const formSubmit = (e) => {
        e.preventDefault()
        alert(`Submit Successfully...`)
        const Obj = {
            fullName: personalInfo.fullname,
            Phone: personalInfo.phone,
            email: personalInfo.email,
            age: personalInfo.age,
            height: personalInfo.height,
            weight: personalInfo.weight,
        }
        console.log("Obj ===> ", Obj)
        measure()
    };
    return (
        <div>
            <div class="p-5">
                <div class="mx-4 p-4">
                    <div class="flex items-center">

                        <button onClick={() => info()} class="flex items-center text-teal-600 relative">
                            <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bookmark ">
                                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Personal</div>
                        </button>

                        <div class={`flex-auto border-t-2 transition duration-500 ease-in-out ${isMeasure ? "border-teal-600" : "border-gray-300"}`}></div>

                        <button onClick={() => measure()} class="flex items-center text-white relative">
                            <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                                <GiClothes class="h-8 w-8 relative left-1 bottom-1" />
                            </div>
                            <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Measurements</div>
                        </button>

                        <div class={`flex-auto border-t-2 transition duration-500 ease-in-out ${isConfirm ? "border-teal-600" : "border-gray-300"}`}></div>

                        <button onClick={() => confirm()} class="flex items-center text-gray-500 relative">
                            <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-database ">
                                    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                </svg>
                            </div>
                            <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Confirm</div>
                        </button>
                    </div>
                </div>
                <div class="mt-8 p-4">
                    {
                        (isMeasure && isConfirm) ? (
                            <>
                                confirm
                            </>)
                            : isMeasure ? (
                                <>
                                    measure
                                </>) : (
                                <>
                                    <form onSubmit={formSubmit}>

                                        <div>
                                            <div class="bg-blue-100 rounded-lg py-5 px-6 mb-4 text-base text-red-600" role="alert">
                                                Note: Must Enter Your Valid Infomation ...!
                                            </div>
                                            <div class="flex flex-col md:flex-row">
                                                <div class="w-full mx-2 flex-1">
                                                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Full Name</div>
                                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                                        <input required name="fullname" value={personalInfo.fullname} onChange={InputEvent} placeholder="Enter Your Name" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                                                    </div>
                                                </div>
                                                <div class="w-full mx-2 flex-1">
                                                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Email</div>
                                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                                        <input required name="email" value={personalInfo.email} onChange={InputEvent} placeholder="Email Address" type='email' class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col md:flex-row">
                                                <div class="w-full mx-2 flex-1">
                                                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Phone</div>
                                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                                        <input required name="phone" value={personalInfo.phone} onChange={InputEvent} placeholder="03*********" type="number" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                                                    </div>
                                                </div>
                                                <div class="w-full mx-2 flex-1">
                                                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Age</div>
                                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                                        <input required name="age" value={personalInfo.age} onChange={InputEvent} placeholder="22" type="number" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col md:flex-row">
                                                <div class="w-full mx-2 flex-1">
                                                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Height</div>
                                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                                        <input required name="height" value={personalInfo.height} onChange={InputEvent} placeholder="5.2" type="number" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                                                    </div>
                                                </div>
                                                <div class="w-full mx-2 flex-1">
                                                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Weight</div>
                                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                                        <input required name="weight" value={personalInfo.weight} onChange={InputEvent} placeholder="60" type="number" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex p-2 mt-4">
                                            <button class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
             hover:bg-gray-200  
             bg-gray-100 
             text-gray-700 
             border duration-200 ease-in-out 
             border-gray-600 transition">Previous</button>
                                            <div class="flex-auto flex flex-row-reverse">
                                                <button type="submit" class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
             hover:bg-teal-600  
             bg-teal-600 
             text-teal-100 
             border duration-200 ease-in-out 
             border-teal-600 transition">Next</button>

                                            </div>
                                        </div>
                                    </form>
                                </>
                            )
                    }
                </div>
            </div>
        </div >
    )
}

export default measurement