import React from 'react'
import { useStateContext } from '../../context/StateContext';
import getStripe from '../../lib/getStripe';
import toast from 'react-hot-toast';
import { RelatedProducts } from '../index'

const Orders = () => {

  const { cartItems } = useStateContext();

  const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItems),
    });

    if (response.statusCode === 500) return;

    const data = await response.json();

    toast.loading('Redirecting...');

    stripe.redirectToCheckout({ sessionId: data.id });
  }

  return (
    <div>
      {console.log(cartItems)}
      {cartItems.length > 0 ? <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">{cartItems.map(RelatedProducts)}</div> : <div class='flex justify-center items-center text-red-500 font-bold text-xl py-5'> No Orders</div>}
      {cartItems.length > 0 && (
        <div class="flex items-center justify-center">
          <button type="button" class="inline-block mr-5 px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Deliver to tailor</button>
          <button type="button" onClick={handleCheckout} class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Direct Checkout</button>
        </div>
      )}
    </div>
  )
}

export default Orders