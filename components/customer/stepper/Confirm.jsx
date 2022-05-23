import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import { useStateContext } from '../../../context/StateContext';

const Confirm = ({ measure }) => {
    const { personalInfo, setPersonalInfo, file } = useStateContext();
    const [isComplete, setComplete] = useState(false)

    const router = useRouter();

    const InputEvent = (event) => {
        const { name, value } = event.target;
        console.log("details --> ", name, value)
        setPersonalInfo((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault()
        if (personalInfo.size.length > 1 && personalInfo.fit.length > 1) {
            if (personalInfo.email.length > 1 && file && personalInfo.menNeck.length > 1 || personalInfo.neck.length > 1) {
                router.push("/customer")
            }
            else setComplete(true)
        }
        else {
            alert("Please! Enter Complete Details...")
        }
    };

    return (
        <>
            {
                isComplete && (
                    <div class="bg-blue-100 rounded-lg py-5 px-6 mb-4 text-base text-red-600" role="alert">
                        For Continue ! Enter Complete Personal & Measure Details ...
                    </div>)
            }
            <form onSubmit={formSubmit}>
                <div class="flex flex-col md:flex-row">
                    <div class="w-full mx-2 flex-1 relative">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> You have taken your sizes ?</div>
                        <select required name="size" value={personalInfo.size} onChange={InputEvent} class="block mt-2 appearance-none w-full bg-gray-200 border border-gray-200 py-2.5 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option class="text-gray-300" >select</option>
                            <option value="Very Exact">Very Exact</option>
                            <option value="Comfortable">Comfortable</option>
                            <option value="Very Loosely">Very Loosely</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0  top-10 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    <div class="w-full mx-2 flex-1 relative">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> You like your clothes very ?</div>
                        <select required name="fit" value={personalInfo.fit} onChange={InputEvent} class="block mt-2 appearance-none w-full bg-gray-200 border border-gray-200 py-2.5 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option class="text-gray-300" >select</option>
                            <option value="Sung">Sung</option>
                            <option value="Comfortable">Comfortable</option>
                            <option value="Loosely Comfortable">Loosely Comfortable</option>
                            <option value="Very Loose">Very Loose</option>
                            <option value="Very Buggy">Very Buggy</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0  top-10 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                <div class="py-5 mx-3">
                    <label for="exampleFormControlTextarea1" class="form-label font-bold text-gray-600 text-xs leading-8 uppercase inline-block mb-2"
                    >Others : </label>
                    <textarea required name="other" value={personalInfo.other} onChange={InputEvent} id="exampleFormControlTextarea1" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4"></textarea>
                </div>

                <div class="flex p-2 mt-4">
                    <button onClick={() => measure()} class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
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
                    border-teal-600 transition">Done</button>

                    </div>
                </div>
            </form>
        </>
    )
}

export default Confirm