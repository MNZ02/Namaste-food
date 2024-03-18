import React, { useEffect, useState } from 'react'
import { SWIGGY_MENU_API } from '../utils/constants'
import { SWIGGY_IMG } from '../utils/constants';

function Menu() {
  const [resInfo, setResInfo] = useState('');
  const [resItem, setResItem] = useState([]);


  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const res = await fetch(SWIGGY_MENU_API);
      const data = await res.json();

      setResInfo(data?.data?.cards[0]?.card?.card?.info);

      setResItem(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

      console.log(data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);

    } catch (error) {
      console.error("Error fetching menu", error.message);
    }
  }


  return (
    <div className='m-2 p-2'>
      <div className='m-4 p-4 ml-8'>
        <h1 className='text-3xl font-bold m-2 p-2'>{resInfo.name}</h1>
        <h2 className='text-lg m-2 p-2'>{resInfo.cuisines?.join(', ')}</h2>
      </div>

      <div className='flex'>
        <h3 className='text-lg font-bold mr-8 -mt-2 ml-16'>{resInfo.costForTwoMessage}</h3>
        <h3 className='text-lg font-bold -mt-2 ml-4'>Delivery in {resInfo.sla?.deliveryTime} minutes</h3>
      </div>

      <div className='mt-8 m-4 p-2'>
        <h3 className='text-xl font-bold mb-4 mt-8'>Recommended</h3>
        <ul>
          {resItem.map((item) => (

            <li className='m-2 p-2 flex justify-between items-center' key={resItem.card?.info.id}>
              <div>
                <div>
                  <span className='font-semibold '>{item?.card?.info?.name}</span>
                </div>

                <div>
                  Rs. {item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}
                  {/* <button className='ml-8 p-2 bg-green-600 text-white text-sm rounded-md'>Add</button> */}
                </div>
              </div>
              <div>
                <img className='w-32 rounded-md' src={SWIGGY_IMG + item?.card?.info?.imageId} alt="" />
              </div>
            </li>
          )
          )}
        </ul>
      </div>



    </div>
  )
}

export default Menu
