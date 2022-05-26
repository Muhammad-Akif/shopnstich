import React, { useState } from 'react'
import { ImManWoman } from 'react-icons/im'
import { useStateContext } from '../context/StateContext';

const tailorInfo = () => {
    const [error, setError] = useState(null);
    const [isGender, setGender] = useState(false)
    const [isState, setState] = useState(false)
    const { file, setFile, tailorInfo, setTailorInfo } = useStateContext();

    const types = ['image/png', 'image/jpeg'];


    const InputEvent = (event) => {
        const { name, value } = event.target;
        setTailorInfo((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const handleChange = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file (png or jpg)');
        }
    }

    const formSubmit = (e) => {
        e.preventDefault();
        if (tailorInfo.gender.length < 1 ) {
            setGender(true)
        }
        else if(tailorInfo.province.length < 1) {
            setState(true)
        }
        else {
            setGender(false)
            setState(false)
            console.log("obj --> ",tailorInfo)
        }
    }

    return (
        <div class="p-5 sm:px-8 bg-gray-50">
            <div class="mx-4 p-4 pb-24">
                <div class="flex items-center justify-center">

                    <div class={`flex-auto border-t-2 mx-10 transition duration-500 ease-in-out border-teal-600`}></div>

                    <button class="flex items-center text-white relative">
                        <div class="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                            <ImManWoman class="h-8 w-8 relative left-2 bottom-1" />
                        </div>
                        <div class="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Tailor's Infomation</div>
                    </button>

                    <div class={`flex-auto border-t-2 mx-10 tcransition duration-500 ease-in-out border-teal-600`}></div>

                </div>
            </div>
            <form onSubmit={formSubmit}>
                <div class="bg-blue-100 sm:mb-4 py-2 mb-16 w-full sm:w-4/6 mx-2 rounded-lg sm:py-5 px-6 text-base text-red-600" role="alert">
                    Note: Must Enter Your Valid Infomation ...!
                </div>
                <div class="flex flex-col absolute right-1 sm:right-10 top-56 sm:top-44">
                    <div class="flex justify-center">
                        <div class="mb-3 w-96">
                            <label for="formFile" class="form-label inline-block mb-2 text-gray-700 uppercase text-center">Upload Image</label>
                            <input required onChange={handleChange} class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-green-600 focus:outline-none" type="file" id="formFile" />
                        </div>
                    </div>
                    <div className="output">
                        {error && <div className="error">{error}</div>}
                        {file && <div>{file.name}</div>}
                    </div>
                </div>
                <div class="flex flex-col md:flex-row">
                    <div class="w-full mx-2 flex-1">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Full Name</div>
                        <div class="bg-white my-2 p-1 flex border border-gray-200 rounded">
                            <input required name="fullname" value={tailorInfo.fullname} onChange={InputEvent} placeholder="Enter Your Name" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                        </div>
                    </div>
                    <div class="w-full mx-2 flex-1">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Email</div>
                        <div class="bg-white my-2 p-1 flex border border-gray-200 rounded">
                            <input required name="email" value={tailorInfo.email} onChange={InputEvent} placeholder="Email Address" type='email' class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row">
                    <div class="w-full mx-2 flex-1">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Phone</div>
                        <div class="bg-white my-2 p-1 flex border border-gray-200 rounded">
                            <input required name="phone" value={tailorInfo.phone} onChange={InputEvent} placeholder="03*********" type="number" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                        </div>
                    </div>
                    <div class="w-full mx-2 flex-1">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Age</div>
                        <div class="bg-white my-2 p-1 flex border border-gray-200 rounded">
                            <input required name="age" value={tailorInfo.age} onChange={InputEvent} placeholder="22" type="number" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                        </div>
                    </div>
                </div>
                <div class="py-5 mx-3">
                    <label for="exampleFormControlTextarea1" class="form-label font-bold text-gray-600 text-xs leading-8 uppercase inline-block mb-2"
                    >Bio : </label>
                    <textarea required name="bio" value={tailorInfo.bio} onChange={InputEvent} placeholder="Enter Bio Details..." id="exampleFormControlTextarea1" class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" rows="4"></textarea>
                </div>
                <div class="flex flex-col md:flex-row">
                    <div class="w-full mx-2 flex-1 relative">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Gender</div>
                        <select required name="gender" value={tailorInfo.gender} onChange={InputEvent} class="block mt-2 appearance-none w-full bg-gray-200 border border-gray-200 py-2.5 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option class="text-gray-300" >select</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0  top-10 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>

                    <div class="w-full mx-2 flex-1 relative">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> State / Province</div>
                        <select required name="province" value={tailorInfo.province} onChange={InputEvent} class="block mt-2 appearance-none w-full bg-gray-200 border border-gray-200 py-2.5 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option class="text-gray-300" >select</option>
                            <option value="Punjab">Punjab</option>
                            <option value="Sindh">Sindh</option>
                            <option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</option>
                            <option value="Balochistan">Balochistan</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0  top-10 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                </div>
                {isGender && (
                    <div class="text-sm text-red-500 p-2 px-2">Gender Required !</div>
                )}
                {isState && (
                    <div class="text-sm text-red-500 p-2 px-2">State / Province Required !</div>
                )}
              
                <div class="flex flex-col md:flex-row">
                    <div class="w-full mx-2 flex-1">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> City</div>
                        <div class="bg-white my-2 p-1 flex border border-gray-200 rounded">
                            <input required name="city" value={tailorInfo.city} onChange={InputEvent} placeholder="Enter City..." class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                        </div>
                    </div>
                    <div class="w-full mx-2 flex-1">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> ZIP / Postal code</div>
                        <div class="bg-white my-2 p-1 flex border border-gray-200 rounded">
                            <input required name="zip" value={tailorInfo.zip} onChange={InputEvent} placeholder="Enter Code..." type="number" class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                        </div>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row">
                    <div class="w-full mx-2 flex-1">
                        <div class="font-bold h-6 mt-3 text-gray-600 text-xs leading-8 uppercase"> Street address</div>
                        <div class="bg-white my-2 p-1 flex border border-gray-200 rounded">
                            <input required name="address" value={tailorInfo.address} onChange={InputEvent} placeholder="Enter Address..." class="p-1 px-2 appearance-none outline-none w-full text-gray-800" />
                        </div>
                    </div>
                </div>

                <div class="flex p-2 mt-4">
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
        </div>
    )
}

export default tailorInfo