
import React, { useEffect, useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useStateContext } from '../../context/StateContext';
// import Link from 'next/link'
import { useRouter } from 'next/router'

const TailorOrders = () => {
    const router = useRouter()
    const { totalQuantities,totalPrice,personalInfo, cartItems, useFirestore, setCartItems, toggleCartItemQuanitity, onRemove } = useStateContext();
    const [order, setOrder] = useState(false)

    useEffect(() => {
      useFirestore('customer')
      console.log("new -->",personalInfo[0]?.tailorDelivery?.items)
  }, [])
  if (personalInfo[0] == undefined) {
      console.log("waiting")
  }
  else {
    setCartItems(personalInfo[0]?.tailorDelivery?.items);
  }
       

    const handleOrder = () => {
      setOrder(true)
      alert("All related material is delivered to your address")
    }



    return (
        <div class="container h-screen overflow-scroll">
            <div class="flex justify-center items-center shadow-md my-5">
                <div class="w-3/4 bg-white px-10 py-10">
                    <div class="flex justify-between border-b pb-8">
                        <h1 class="font-semibold text-2xl">Order Details</h1>
                        <h2 class="font-semibold text-2xl">{totalQuantities} Items</h2>
                    </div>
                    <div class="flex mt-10 mb-5">
                        <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
                        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Quantity</h3>
                        <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 ">Price</h3>
                        <h3 class="font-semibold  text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
                    </div>

                    {cartItems?.length >= 1 && cartItems?.map((item) => (
                        <>
                            <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
                                <div class="flex w-2/5">
                                    <div class="w-20">
                                        <img class="h-24" src={item.image.url} alt="" />
                                    </div>
                                    <div class="flex flex-col justify-between ml-4 flex-grow">
                                        <span class="font-bold text-sm">{item.name}</span>
                                        <span class="text-red-500 text-xs">{item.category.name}</span>
                                      
                                    </div>
                                </div>
                                <div className="quantity px-20">
                                    <p className=" flex items-center h-10">
                                        <span className="num" >{item.quantity}</span>
                                    </p>
                                </div>

                                <span class="text-center w-1/5 font-semibold text-sm">Rs {item.price}</span>
                                <span class="text-center w-1/5 font-semibold text-sm">Rs {totalPrice}</span>
                            </div>
                        </>
                    ))}


                    <button onClick={handleOrder} class={`flex justify-end font-semibold ${order ? "text-green-500" : "text-indigo-600"}  text-sm mt-10`}>
                        {order ? "Accept Order": "Order Accepted !"}
                    </button>
                </div>

            </div>
        </div>
    )
}

export default TailorOrders


