// import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const RelatedProducts = ({ name, price, image, slug }) => {

    return (
        <article key={slug}>
            <Link href={`/product/${slug}`}>
                <a className="group no-underline w-full h-full flex">
                    <div className="bg-gray-50 rounded-lg cursor-pointer w-full overflow-hidden relative px-3 py-6 md:px-6">
                        <img
                            alt={name}
                            height="auto"
                            width="auto"
                            src={image?.url}
                        />

                        <div className="pt-3 md:pt-6 text-center">
                            <p className="text-gray-800 font-semibold text-lg group-hover:text-indigo-600 mb-1">
                                {name}
                            </p>
                            <p className="text-gray-600 text-sm">
                                Rs: {price}
                            </p>
                        </div>
                    </div>
                </a>
            </Link>
        </article>
    )
}

export default RelatedProducts