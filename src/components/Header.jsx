import React from 'react';
import { LOGO_URl } from '../utils/constants';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import cartSvg from '../assets/cart.svg';
import { useSelector } from 'react-redux'
import searchSvg from '../assets/search.svg'

function Header() {

    const onlineStatus = useOnlineStatus();
    const cartItems = useSelector(state => state.cart.items);

    return (
        <div className='flex justify-between items-center my-4 px-6 py-3 shadow-lg rounded-md'>
            <div>
                <Link to='/'>
                    <img className='h-16 cursor-pointer' src={LOGO_URl} alt="logo" />
                </Link>
            </div>

            <div>
                <ul className='flex space-x-4 text-lg'>

                    <li className={`font-semibold text-${onlineStatus ? 'green' : 'red'}-600`}>
                        {onlineStatus ? 'Online🟢' : 'Offline🔴'}
                    </li>

                    <li className='hover:text-blue-600 cursor-pointer'>
                        <div className='flex'>
                            <img className='w-4 mx-2 mt-0.5' src={searchSvg} alt="search" />
                            <p>Search</p>
                        </div>
                    </li>

                    <li className='hover:text-blue-600 cursor-pointer'>
                        <Link to='/'>Home</Link>
                    </li>

                    <li className='hover:text-blue-600 cursor-pointer'><Link to='/grocery'>Grocery</Link></li>

                    <li className='hover:text-blue-600 cursor-pointer'><Link to='/about'>About</Link></li>

                    <div className='py-1 flex'>
                        <img className='w-6 shadow-md mx-2' src={cartSvg} alt="cart" />
                        <p className='text-sm font-semibold bg-red-500 text-white px-1 rounded-full absolute -mt-2 right-5'>{cartItems.length}</p>
                    </div>

                </ul>
            </div>
        </div>
    )
}

export default Header
