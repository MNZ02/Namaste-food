import React, { useState } from 'react'

function Search({ list, setFilteredList }) {

    const [searchTerm, setSearchTerm] = useState('')

    function handleTopRated() {
        setFilteredList(list.filter(item => {
            return item.info.avgRating > 4.2
        }))
    }

    function handleSearch() {
        setFilteredList(list.filter((item) => {
            return item.info.name.toLowerCase().includes(searchTerm.toLowerCase())
        }))
    }


    return (
        <div className='flex justify-center'>
            <input onChange={e => setSearchTerm(e.target.value)} value={searchTerm} className='border border-gray-600 rounded-md m-2 p-2 bg-gray-200 outline-none' type="text" placeholder='Search...' />
            <button onClick={() => { handleSearch() }} className='border border-gray-600 m-2 p-2 rounded-md bg-blue-400 text-white outline-none'>Search</button>

            <button onClick={() => { handleTopRated() }} className='border border-gray-600 m-2 p-2 ml-4 rounded-md bg-green-600 text-white'>Top Rated</button>

        </div>
    )
}

export default Search
