import React, { useEffect, useState } from 'react'
import { SWIGGY_IMG } from '../utils/constants';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';

function Menu() {
  const { resId } = useParams();

  const { resInfo, resItem } = useRestaurantMenu(resId);

  if (!resInfo || resItem.length === 0) {
    return <div>Loading...</div>;
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
          {resItem.map((item, index) => (

            <li className='m-2 p-2 flex justify-between items-center' key={resItem.card?.info?.id || index}>
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
