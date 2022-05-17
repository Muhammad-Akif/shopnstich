import React, { useState, useEffect } from 'react'
import { getAllProducts } from '../../services'

const Orders = () => {
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
  return (
    <div>
      <div class="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">
        {
          Products.map(prod => (
            <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center">
              <div class="py-3 px-6 border-b border-gray-300">
                {prod.category.name}
              </div>
              <div class="p-6">
                <h5 class="text-gray-900 text-xl font-medium mb-2">{prod.name}</h5>
                <p class="text-gray-700 text-base mb-4">
                  {prod.excerpt}
                </p>
                <button type="button" class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Dilevered to Tailor</button>
              </div>
              <div class="py-3 px-6 border-t border-gray-300 text-gray-600">
                2 days ago
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Orders