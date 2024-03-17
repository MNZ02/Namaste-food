import React, { useState } from 'react'

function Search({ list, setFilteredList }) {

    

    function handleTopRated() {
        setFilteredList(list.filter(item => {
            return item.info.avgRating > 4.2
        }))
    }

    function handleSearch() {
        list.filter((item) => {
            return item.info.name.toLowerCase().includes()
        })
    }
   

    return (
        <div className='flex justify-center'>
            <input onChange={e => e.target.value} className='border border-gray-600 rounded-md m-2 p-2 bg-gray-200 outline-none' type="text" placeholder='Search...' />
            <button onClick={() => { handleSearch() }} className='border border-gray-600 m-2 p-2 rounded-md bg-blue-400 text-white outline-none'>Search</button>

            <button onClick={() => { handleTopRated() }} className='border border-gray-600 m-2 p-2 ml-4 rounded-md bg-green-600 text-white'>Top Rated</button>

        </div>
    )
}

export default Search
