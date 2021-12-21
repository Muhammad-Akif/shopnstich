import React from 'react'

const MapnConnect = () => {
    return (
        <div>
            <section class="text-gray-100 body-font relative">
                <div class="absolute inset-0 bg-gray-300">
                    {/* <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/place/iPlex+PVT.+Limited/@33.5512638,73.1243059,15z/data=!4m5!3m4!1s0x0:0x72991683dfd32fc4!8m2!3d33.5512638!4d73.1243059"></iframe> */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d61572.49968164579!2d73.1048393502028!3d33.54062068602395!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x72991683dfd32fc4!2siPlex%20PVT.%20Limited!5e0!3m2!1sen!2s!4v1640064424607!5m2!1sen!2s" width="100%" height="100%" allowfullscreen="" loading="lazy"></iframe>
                </div>
                <div class="container px-5 py-24 mx-auto flex">
                    <div class="lg:w-1/3 md:w-1/2 bg-green-960 opacity-90 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        <h2 class="text-gray-100 text-xl mb-1 font-bold title-font">Stay Connected!</h2>
                        <p class="leading-relaxed mb-2 text-gray-100">In touch with us for latest updates & new arrivals!</p>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-100">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-gray-300 rounded border border-gray-300 focus:border-green-950 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-green-960 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" required/>
                        </div>
                        <div class="relative mb-4">
                            <label for="message" class="leading-7 text-sm text-gray-100">Message</label>
                            <textarea id="message" name="message" placeholder="optional" class="w-full bg-gray-300 rounded border border-gray-300 focus:border-green-950 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-green-960 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button class="text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-green-800 rounded text-lg" onClick={()=>alert('Thanks for Connecting with us!')}>Subscribe</button>
                        {/* <p class="text-xs text-gray-100 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MapnConnect
