import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../../services'
import { RelatedProducts } from '../../components'

const Dashboard = () => {
    const [Products, setProducts] = useState(null)
    const [menProducts, setMenProducts] = useState(null)
    const [womenProducts, setWomenProducts] = useState(null)
    const [kidsProducts, setKidsProducts] = useState(null)

    useEffect(() => {
        getAllProducts().then(products => {
            setProducts(products)
            setMenProducts(products?.filter(product => product.category.name === "Men"))
            setWomenProducts(products?.filter(product => product.category.name === "Women"))
            setKidsProducts(products?.filter(product => product.category.name === "Kids"))
        })
    }, [])
    const addToggle = (type) => {
        console.log(" type --> ", type, Products)
        if (type == 'Men') {
            setProducts(menProducts)
        }
        else if (type == 'Women') {
            setProducts(womenProducts)
        }
        else {
            setProducts(kidsProducts)
        }
    }

    return (
        <>
            <ul class="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
                <li class="mr-2">
                    <a href="#" class={`inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center`} onClick={(addToggle.bind(null, 'Women'))}>Women</a>
                </li>
                <li class="mr-2">
                    <a href="#" aria-current="page" class={`inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center `} onClick={(addToggle.bind(null, 'Men'))}>Men</a>
                </li>
                <li class="mr-2">
                    <a href="#" class={`inline-block text-gray-500 hover:text-gray-600 hover:bg-gray-50 rounded-t-lg py-4 px-4 text-sm font-medium text-center `} onClick={(addToggle.bind(null, 'Kids'))}>Kids</a>
                </li>
            </ul>
            {Products?.length > 0 ? <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">{Products?.map(RelatedProducts)}</div> : <div class='flex justify-center items-center text-red-500 font-bold text-xl py-5'> Comming Soon !</div>}
        </>
    )
}

export default Dashboard


// ${active ? 'bg-gray-100  text-blue-600 active' : 'text-gray-500 hover:text-gray-600 hover:bg-gray-50'}