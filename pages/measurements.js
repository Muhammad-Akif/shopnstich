import React, { useState } from 'react'
import { GiClothes } from 'react-icons/gi'
import { Measure, Confirm } from '../components'
import { useStateContext } from '../context/StateContext';


const measurement = () => {
    const { personalInfo, setPersonalInfo } = useStateContext();
    const [isMeasure, setMeasure] = useState(false)
    const [isConfirm, setConfirm] = useState(false)
    const [isGender, setGender] = useState(true)

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

        if (personalInfo.gender.length > 1) {
            setGender(true)
            const Obj = {
                fullName: personalInfo.fullname,
                Phone: personalInfo.phone,
                email: personalInfo.email,
                age: personalInfo.age,
                gender: personalInfo.gender,
                height: personalInfo.height,
            }
            console.log("Obj ===> ", Obj)
            measure()
        }
        else {
            setGender(false)
        }
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
                        (isMeasure && isConfirm) ? (<Confirm />)
                            : isMeasure ? (<Measure />)
                                : (
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
                                                <div class="w-full mx-2 flex-1 relative">
                                                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Gender</div>
                                                    <select required name="gender" value={personalInfo.gender} onChange={InputEvent} class="block mt-2 appearance-none w-full bg-gray-200 border border-gray-200 py-2.5 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                                        <option class="text-gray-300" >select</option>
                                                        <option value="male">Male</option>
                                                        <option value="female">Female</option>
                                                    </select>
                                                    <div class="pointer-events-none absolute inset-y-0 right-0  top-10 flex items-center px-2 text-gray-700">
                                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                                    </div>
                                                </div>
                                                <div class="w-full mx-2 flex-1">
                                                    <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Height</div>
                                                    <div class="bg-white my-2 p-1 flex border border-gray-200 rounded">
                                                        <input required name="height" value={personalInfo.height} onChange={InputEvent} placeholder="5.8" type="number" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                                                    </div>
                                                </div>
                                            </div>
                                            {!isGender && (
                                                <div class="text-sm text-red-500 p-2 px-2">Gender Required !</div>
                                            )}
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
                                )
                    }
                </div>
            </div>
        </div >
    )
}

export default measurement