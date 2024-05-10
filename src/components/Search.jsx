import React, { useState } from 'react'

function Search ({ list, setFilteredList }) {
  const [searchTerm, setSearchTerm] = useState('')

  function handleTopRated () {
    setFilteredList(
      list.filter(item => {
        return item.info.avgRating > 4.2
      })
    )
  }

  function handleSearch () {
    setFilteredList(
      list.filter(item => {
        return item.info.name.toLowerCase().includes(searchTerm.toLowerCase())
      })
    )
  }

  return (
    <div className='flex flex-col md:flex-row items-center justify-center'>
      <input
        onChange={e => setSearchTerm(e.target.value)}
        value={searchTerm}
        className='border border-gray-400 rounded-md m-2 p-2 bg-gray-200 outline-none md:w-auto'
        type='text'
        placeholder='Search...'
      />
      <div className='flex'>
        <button
          onClick={() => {
            handleSearch()
          }}
          className='border border-gray-400 m-2 px-2 rounded-md bg-blue-600 hover:bg-blue-800 text-white outline-none'
        >
          Search
        </button>

        <button
          onClick={() => {
            handleTopRated()
          }}
          className='border border-gray-400 m-2 px-2 ml-4 rounded-md bg-green-600 hover:bg-green-700 text-white'
        >
          Top Rated
        </button>
      </div>
    </div>
  )
}

export default Search
