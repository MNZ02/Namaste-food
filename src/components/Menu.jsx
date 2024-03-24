import React, { useEffect, useState } from 'react';
import { SWIGGY_IMG } from '../utils/constants';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import spinnerSvg from '../assets/spinner.svg';
import clockSvg from '../assets/clock.svg';

function Menu() {
  const { resId } = useParams();
  const { resInfo, resItem } = useRestaurantMenu(resId);

  if (!resInfo || resItem.length === 0) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <img className='w-20' src={spinnerSvg} alt="Loading..." />
      </div>
    );
  }

  const limitDescription = (description, limit) => {
    const words = description.split(' ');
    if (words.length > limit) {
      return words.slice(0, limit).join(' ') + '...';
    }
    return description;
  };

  return (
    <div className='w-full max-w-5xl mx-auto'>
      <div className='m-4 p-4 ml-8'>
        <h1 className='text-2xl font-bold mx-2 my-4 px-2 text-gray-700'>{resInfo.name}</h1>
        <h2 className='text-lg mx-2 my-4 px-4'>{resInfo.cuisines?.join(', ')}</h2>
      </div>

      <div className='flex items-center -mt-2 space-x-8 xl:space-x-5'>
        <h3 className='text-lg font-bold mr-8 ml-16'>{resInfo.costForTwoMessage}</h3>
        <div className='flex items-center space-x-2'>
          <img className='w-5' src={clockSvg} alt="Delivery in.." />
          <h3 className='text-lg font-bold -mt-0.5'> {resInfo.sla?.deliveryTime} minutes</h3>
        </div>
      </div>

      <div className='mt-8 m-4 p-2'>
        <h3 className='text-xl font-bold mb-4 mt-8'>Recommended</h3>
        <ul>
          {resItem.map((item, index) => (
            <li className='my-8 lg:mx-4 py-6 lg:px-6 flex justify-between space-x-5 items-center' key={resItem.card?.info?.id || index}>
              <div>
                <div className='mb-1'>
                  <span className='font-semibold text-lg'>{item?.card?.info?.name}</span>
                </div>
                <div className='px-2'>
                  Rs.{item?.card?.info?.defaultPrice / 100 || item?.card?.info?.price / 100}
                </div>
                <div className='overflow-hidden sm:max-w-md xl:max-w-full px-2 py-3 text-gray-500'>
                  <p className='text-sm'>{limitDescription(item?.card?.info?.description, 20)}</p>
                </div>
              </div>
              <div>
                <img className='w-32 lg:w-full h-24 lg:h-28 object-cover rounded-md' src={SWIGGY_IMG + item?.card?.info?.imageId} alt="" />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
