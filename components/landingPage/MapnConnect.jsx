import React, { useState} from 'react'

const MapnConnect = () => {
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    return (
        <div>
            <section class="text-gray-100 body-font relative">
                <div class="absolute inset-0 bg-gray-300">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61572.49968164579!2d73.1048393502028!3d33.54062068602395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72991683dfd32fc4!2siPlex%20PVT.%20Limited!5e0!3m2!1sen!2s!4v1640064424607!5m2!1sen!2s" width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div data-aos="fade-down" class="container px-5 py-24 mx-auto flex">
                    <div class="lg:w-1/3 md:w-1/2 bg-green-960 opacity-90 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 class="text-gray-100 text-xl mb-1 font-bold title-font">Stay Connected!</h2>
                        <p class="leading-relaxed mb-2 text-gray-100">In touch with us for latest updates & new arrivals!</p>
                        <form onSubmit={(e) => { e.preventDefault(); alert('Thanks for Connecting with us!');}}>
                            <div class="relative mb-4">
                                <label for="email" class="leading-7 text-sm text-gray-100">Email</label>
                                <input type="email" required id="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" class="w-full bg-gray-300 rounded border border-gray-300 focus:border-green-950 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-green-960 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div class="relative mb-4">
                                <label for="message" class="leading-7 text-sm text-gray-100">Message</label>
                                <textarea id="message" required name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="optional" class="w-full bg-gray-300 rounded border border-gray-300 focus:border-green-950 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-green-960 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            </div>
                            <button type="submit" class="text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">Subscribe</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MapnConnect
