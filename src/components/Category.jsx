import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ItemsList from './ItemsList';
import bouncingCirclesSvg from '../assets/bouncing-circles.svg'


function Category() {

  const { resId } = useParams();

  const { categories } = useRestaurantMenu(resId);

  const [showMenu, setShowMenu] = useState(0);

  const toggleMenu = (categoryIndex) => {
    setShowMenu((prevcategory) => (prevcategory === categoryIndex ? null : categoryIndex));
  }

  if (categories.length === 0) {
    return (
      <div className='flex justify-center mt-24'>
        <img className='w-12' src={bouncingCirclesSvg} alt="Loading..." />
      </div>
    );
  }

  const categoryMenu = categories.filter((category) => category?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

  console.log(categoryMenu)

  return (
    <div>
      {categoryMenu.map((category, index) => (
        <ItemsList key={index} category={category} showMenu={showMenu === index} toggleMenu={() => toggleMenu(index)} />

      ))}

    </div>
  )
}

export default Category
