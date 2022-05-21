import React from 'react'
import { useStateContext } from '../context/StateContext';
import { RelatedProducts } from '../components'

const search = () => {
    const { searchResult } = useStateContext();
    return (
        <div>
            <div class="w-full pb-5 p-5 text-center font-bold text-blue-400 text-2xl font-serif">Search Results</div>
            {searchResult?.length > 0 ? <div className="gap-8 grid sm:grid-cols-2 lg:grid-cols-3">{searchResult?.map(RelatedProducts)}</div> : <div class='flex justify-center items-center text-red-500 font-bold text-xl py-5'> loading !</div>}
        </div>
    )
}

export default search