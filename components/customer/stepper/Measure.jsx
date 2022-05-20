import React from 'react'
import { useStateContext } from '../../../context/StateContext';

const Measure = ({confirm, info}) => {
    const { personalInfo, setPersonalInfo, measureDetails } = useStateContext();
    const arr = []
    let renderMeasure = ""
    for (let i = 0; i < renderMeasure.length; i++) {
        arr.push(renderMeasure[i].title)
    }
    console.log("arr --> ", arr)
    if (personalInfo.gender == 'male') {
        renderMeasure = measureDetails.menDetails
    }
    else {
        renderMeasure = measureDetails.womenDetails
    }
    
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setPersonalInfo((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }
    return (
        <>
            <div class="bg-blue-100 rounded-lg py-5 px-6 mb-4 text-base text-red-600" role="alert">
                Your Measurements Must be Accurate ...!
            </div>
            <div class="w-full pb-5 p-5 text-center font-bold text-blue-400 text-2xl font-serif">{personalInfo.gender.toUpperCase()} MEASUREMENTS</div>
            <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
                {
                    renderMeasure.length > 0 && (
                        <>
                            {renderMeasure.map((data, ind) => (
                                <div key={ind} class="p-5 -pb-8 border border-gray-300">
                                    <img src={data.image} alt={data.title} />
                                    <div class="text-red-600 pt-3 pb-1 font-bold text-md font-mono">{data.title}</div>
                                    <div>{data.description}</div>
                                    <div class="flex flex-wrap -mx-3 mb-6">
                                        <div class="w-full px-3">
                                            <label class="pt-5 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                                Size
                                            </label>
                                            <input required name={`${data.title}`} value='' onChange={InputEvent} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>)
                }
            </div>
            <div class="flex p-2 mt-4">
                <button onClick={() => info()} class="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-gray-200  
                    bg-gray-100 
                    text-gray-700 
                    border duration-200 ease-in-out 
                    border-gray-600 transition">Previous</button>
                <div class="flex-auto flex flex-row-reverse">
                    <button onClick={() => confirm()} class="text-base  ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer 
                    hover:bg-teal-600  
                    bg-teal-600 
                    text-teal-100 
                    border duration-200 ease-in-out 
                    border-teal-600 transition">Next</button>

                </div>
            </div>
        </>)
}

export default Measure