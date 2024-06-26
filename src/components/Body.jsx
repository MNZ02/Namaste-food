import React, { useEffect, useState } from 'react'
import Card from './Card'
import Shimmer from './Shimmer'
import { SWIGGY_API } from '../utils/constants'
import Search from './Search'
import useOnlineStatus from '../utils/useOnlineStatus'

function Body () {
  const onlineStatus = useOnlineStatus()
  const [listofRes, setListofRes] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch(SWIGGY_API)
      const data = await res.json()
      console.log(data)
      const restaurants =
        window.innerWidth >= 768 // Check screen width
          ? data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
          : data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants // Choose data based on screen width

      setListofRes(restaurants)
      setIsLoading(false)
    } catch (error) {
      console.error('Error fetching data', error.message)
      setIsLoading(false)
    }
  }

  if (onlineStatus !== true) {
    return <h1>Looks like your are offline...</h1>
  }

  return (
    <div>
      <Search list={listofRes} setFilteredList={setFilteredList} />

      {isLoading ? (
        <Shimmer />
      ) : (
        <Card list={filteredList.length > 0 ? filteredList : listofRes} />
      )}
    </div>
  )
}

export default Body
