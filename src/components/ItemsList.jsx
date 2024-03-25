import React, { useState } from 'react'
import { SWIGGY_IMG } from '../utils/constants';
import downArrowSvg from '../assets/downArrow.svg';
import upArrowSvg from '../assets/upArrow.svg';


function ItemsList({ category }) {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    const limitDescription = (description, limit) => {
        const words = description?.split(' ');
        if (words?.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        }
        return description;
    };

    return (
        <div className='mt-8 m-4 p-2'>
            <div className='px-4 py-3 mx-2 shadow-lg rounded-md'>

                <div onClick={toggleMenu} className='flex items-center justify-between cursor-pointer'>
                    <h3 className='text-xl lg:px-4 font-bold mb-4 mt-8 select-none'>{category?.card?.card?.title}</h3>

                    <img className='w-4 lg:w-5 mt-2 lg:mr-4 select-none' src={showMenu ? upArrowSvg : downArrowSvg} alt="down-arrow" />
                </div>


                <ul>
                    {
                        category?.card?.card?.itemCards?.map((item) => {
                            return (
                                <li key={item?.card?.info?.id} className={`my-8 lg:mx-4 py-6 lg:px-6 flex justify-between space-x-5 items-center ${showMenu ? 'block' : 'hidden'} select-none`}>
                                    <div className='transition duration-300 ease-in-out'>
                                        <div className='mb-1'>
                                            <span className='font-semibold text-lg'>{item?.card?.info?.name}</span>
                                        </div>
                                        <div className='px-2'>
                                            Rs.{Math.floor(item?.card?.info?.defaultPrice / 100) || Math.floor(item?.card?.info?.price / 100)}
                                        </div>
                                        <div className='overflow-hidden sm:max-w-md xl:max-w-full px-2 py-3 text-gray-500'>
                                            <p className='text-sm'>{limitDescription(item?.card?.info?.description, 20)}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <img className='w-32 lg:w-full h-24 lg:h-28 object-cover rounded-md' src={SWIGGY_IMG + item?.card?.info?.imageId} alt="" />
                                    </div>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>



        </div>
    )
}

export default ItemsList

