import React, { useEffect } from "react";
import { useStateContext } from '../../context/StateContext';
const profile = () => {
    const { personalInfo, measureDetails, useFirestore } = useStateContext();
    useEffect(() => {
        if (!personalInfo.fullname > 0) {
            useFirestore('images')
        }
    }, [personalInfo])
    if (personalInfo[0] == undefined) {
        console.log("waiting")
    }
    else {
        var data = Object.entries(personalInfo[0].data);
        console.log("data --> ", data)

        var objs = data.map(x => ({
            title: x[0],
            value: x[1]
        }));

        let measurements;
        if (personalInfo.gender == "male") {
            measurements = measureDetails.menDetails
        }
        else {
            measurements = measureDetails.womenDetails
        }

        console.log("convert --> ", data);
    }


    return (
        <div className="bg-white dark:bg-gray-800">
            <div className="container mx-auto bg-white dark:bg-gray-800 rounded">
                <div className="xl:w-full flex justify-between border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800">
                    <div className="flex w-11/12 mx-auto xl:w-full xl:mx-0 items-center">
                        <p className="text-lg text-gray-800 dark:text-gray-100 font-bold">Profile</p>
                        <div className="ml-2 cursor-pointer text-gray-600 dark:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={16} height={16}>
                                <path className="heroicon-ui" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0-9a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm0-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="currentColor" />
                            </svg>
                        </div>
                    </div>
                    <img
                        src={personalInfo[0]?.url}
                        class="rounded-full w-16 mb-2"
                        alt="Avatar"
                    />
                </div>
                <div class="w-full mx-2 h-64">
                    <div class="bg-white p-3 shadow-sm rounded-sm">
                        <div class="flex items-center py-2 space-x-2 font-semibold text-gray-900 leading-8">
                            <span clas="text-green-500">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span class="tracking-wide">About</span>
                        </div>
                        <div class="text-gray-700">
                            <div class="grid md:grid-cols-2 text-sm">
                                {
                                    objs?.map((item) => (
                                        <div class="grid grid-cols-2">
                                            <div class="px-4 py-2 font-semibold">{item.title}</div>
                                            <div class="px-4 py-2">{item.value}</div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        <button
                            class="block w-full text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">Show
                            Measurements
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default profile;
