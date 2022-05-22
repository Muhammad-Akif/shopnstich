import React from 'react'
import { GiMouse, GiClothes } from 'react-icons/gi'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { RiSecurePaymentLine } from 'react-icons/ri'

const Process = () => {
    return (
        <div class="bg-green-50 md:px-8">
            <div class="2xl:container 2xl:mx-auto md:py-10 py-9">
                <div class="w-full pb-2 p-5 pl-20 font-bold text-green-960 text-3xl font-serif">HOW IT WORKS ?</div>
                <div class=" dark:bg-gray-800 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 lg:gap-8 md:gap-12 gap-14 lg:px-20 lg:py-12 py-10 md:px-12 px-4">


                    <div class="">
                        <GiMouse class="text-green-700 text-5xl dark:text-white" />
                        <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-6 mt-8">Place Your Order</h3>
                        <p class="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Place your order online or give us a call to schedule a free pickup</p>
                    </div>


                    <div class="">

                        <GiClothes class="text-green-700 text-5xl dark:text-white" />
                        <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-6 mt-8">Cloths Stitching</h3>
                        <p class="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">
                            Your dress will be stitched by our expert tailors as you expect
                        </p>
                    </div>

                    <div class="">

                        <MdOutlineDeliveryDining class="text-green-700 text-5xl dark:text-white" />
                        <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-6 mt-8">Delivery</h3>
                        <p class="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Pay in cash upon receiving your newly stitched dress and sample garment</p>
                    </div>

                    <div class="">
                        <RiSecurePaymentLine class="text-green-700 text-5xl dark:text-white" />
                        <h3 class="text-xl leading-5 dark:text-white font-semibold text-gray-800 lg:mt-6 mt-8">Payment Process</h3>
                        <p class="text-base leading-6 font-normal dark:text-gray-300 text-gray-600 mt-4 lg:w-full md:w-9/12 w-full">Cash on Delivery as well as Online Transaction process</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process