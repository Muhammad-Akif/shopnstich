import { Fragment,useEffect, useRef, useState } from 'react'
import { useStateContext } from '../../context/StateContext';
import getStripe from '../../lib/getStripe';
import toast from 'react-hot-toast';
import { RelatedProducts } from '../index'
import { Dialog, Transition } from '@headlessui/react'
import { useRouter } from 'next/router'
import { projectFirestore} from '../../config/index';


const Orders = () => {
  const router = useRouter()

  const [open, setOpen] = useState(false)

  const cancelButtonRef = useRef(null)
  const { cartItems, useFirestore,personalInfo } = useStateContext();

  const handlepay = () => {
    setOpen(false);
    let address = prompt("Enter Delivery Address");
    projectFirestore.collection("customer").doc(personalInfo[0]?.id).update({ onDoor: {cartItems, address} });
    alert("Your Order will Delivered to your address with in 5-7 working days");
    router.push("/success")
  }
  useEffect(() => {
    useFirestore('customer')
  }, [])

  const handleTailor = () => {
    let address = prompt("Enter Delivery Address");
    projectFirestore.collection("customer").doc(personalInfo[0]?.id).update({ tailorDelivery: {cartItems, address} });
    alert("Your Order will Delivered to your address with in 5-7 working days");
    router.push("/success")
  }

  const handleCheckout = async () => {
    setOpen(false);
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
      {cartItems.length > 0 && (<div className="font-bold font-serif text-xl pb-4">Order Details</div>)}
      {cartItems.length > 0 ? <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">{cartItems.map(RelatedProducts)}</div> : <div class='flex justify-center items-center text-red-500 font-bold text-xl py-5'> No Orders</div>}
      {cartItems.length > 0 && (
        <div class="flex items-center justify-center mt-5">
          <button type="button" onClick={handleTailor} class="inline-block mr-5 px-6 py-2 border-2 border-green-500 text-green-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Deliver to tailor</button>
          <button type="button" onClick={() => setOpen(true)} class="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Direct Checkout</button>
        </div>
      )}
      {cartItems.length > 0 &&(
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start">
                      <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        pay
                      </div>
                      <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                          Payment Method
                        </Dialog.Title>
                        <div className="mt-2">
                          <p className="text-sm text-gray-500">
                            Select weather "on door payment" OR "Online Transaction"
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="button"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handleCheckout}
                    >
                      Bank Transfer
                    </button>
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handlepay}
                      ref={cancelButtonRef}
                    >
                      On Door Payment
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>)}
    </div>
  )
}

export default Orders