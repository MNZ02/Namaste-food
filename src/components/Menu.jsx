import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import Category from './Category';
import spinnerSvg from '../assets/spinner.svg';
import clockSvg from '../assets/clock.svg';

function Menu() {

  const { resId } = useParams();
  const { resInfo, resItem } = useRestaurantMenu(resId);
 

  if (!resInfo || resItem.length === 0) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <img className='w-28' src={spinnerSvg} alt="Loading..." />
      </div>
    );
  }


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


      <Category />
    </div>
  );
}

export default Menu;
