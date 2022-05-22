import React from 'react'

const Reviews = () => {
    return (
        <div class="bg-green-100">
            <h1 class="p-12 grid place-items-center font-serif text-3xl sm:text-5xl text-green-960 font-bold">
                <div data-aos="zoom-up">
                    Client Reviews
                </div>
                <div class="h-1 my-2 bg-green-400 w-2/4 sm:w-1/12" />
                <p class="text-green-960 text-lg sm:text-2xl w-full italic text-center">
                    Few Feedback From Our Buyers, <span class="text-orange-400">Must Read!</span>
                </p>
            </h1>

            <div id="carouselExampleCaptions" class="carousel pb-16 slide relative carousel-dark" data-bs-ride="carousel">
                <div class="carousel-inner relative w-full overflow-hidden">
                    <div class="carousel-item active relative float-left w-full text-center">
                        <p class="text-xl italic mx-auto text-gray-500 max-w-4xl">
                            "Great Shopping website, mostly reviews I saw they are real. mostly Tailor's stitched the cloths very nice as i want, Overall good Services"
                        </p>
                        <div class="mt-12 mb-6 flex justify-center">
                            <img
                                src="https://media-exp1.licdn.com/dms/image/C4D03AQFOPDsThKgzXw/profile-displayphoto-shrink_200_200/0/1626702041430?e=1658361600&v=beta&t=zL4pPZf9Cow15ULWmFY1iU_tXiU8kWs7XAeapTCsrR0"
                                class="rounded-full w-24 h-24 shadow-lg"
                                alt="smaple image"
                            />
                        </div>
                        <p class="text-teal-600">- Malik Saqib</p>
                    </div>
                    <div class="carousel-item relative float-left w-full text-center">
                        <p class="text-xl italic mx-auto text-gray-500 max-w-4xl">
                            "ShopnStitch is Excellent, i buy bunch of different unstitched cloths found best Quality, same as viewed in the website, great experience"
                        </p>
                        <div class="mt-12 mb-6 flex justify-center">
                            <img
                                src="https://media-exp1.licdn.com/dms/image/C4D03AQHySRflS9uZSQ/profile-displayphoto-shrink_200_200/0/1641677442759?e=1658361600&v=beta&t=UL1vOOjGjGRLhTn4QqT_rHUxfsPbAJbfuBV8LT6Wy4c"
                                class="rounded-full w-24 h-24 shadow-lg"
                                alt="smaple image"
                            />
                        </div>
                        <p class="text-teal-600">- Hasnat Ahmad</p>
                    </div>
                    <div class="carousel-item relative float-left w-full text-center">
                        <p class="text-xl italic mx-auto text-gray-500 max-w-4xl">
                            "Buy from this website without any doubt, all products are delivered as see's in the website without quality drop, must try at least once here"
                        </p>
                        <div class="mt-12 mb-6 flex justify-center">
                            <img
                                src="https://media-exp1.licdn.com/dms/image/C4D03AQEUs8HTHhFf9A/profile-displayphoto-shrink_200_200/0/1626173576886?e=1658361600&v=beta&t=UkFLhoaTocHwa8ga3rkXUVS1BZOUtPfaQitiUkfLLac"
                                class="rounded-full w-24 h-24 shadow-lg"
                                alt="smaple image"
                            />
                        </div>
                        <p class="text-teal-600">- Ayesha Khalid</p>
                    </div>
                </div>
                <button
                    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Reviews
