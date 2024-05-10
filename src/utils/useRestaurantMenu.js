import { useState, useEffect } from 'react'
import { SWIGGY_MENU_API } from '../utils/constants'

const useRestaurantMenu = resId => {
  const [resInfo, setResInfo] = useState('')
  const [resItem, setResItem] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    if (resId) fetchData()
  }, [resId])

  const fetchData = async () => {
    try {
      const res = await fetch(SWIGGY_MENU_API + resId)
      const data = await res.json()
      console.log(data)
      setResInfo(data?.data?.cards[2]?.card?.card?.info)

      const restaurantsItem =
        window.innerWidth >= 768 // Check screen width
          ? data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
              ?.card?.card?.itemCards
          : data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4] // Choose data based on screen width

      setResItem(restaurantsItem)
      const categoryItem =
        window.innerWidth >= 768
          ? data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          : data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      setCategories(categoryItem)
      console.log(categoryItem)
    } catch (error) {
      console.error('Error fetching menu', error.message)
    }
  }
  return { resInfo, resItem, categories }
}

export default useRestaurantMenu
