import React from 'react'
import { LOGO_URl } from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import cartSvg from '../assets/cart.svg'
import { useSelector } from 'react-redux'
import searchSvg from '../assets/search.svg'

function Header () {
  const onlineStatus = useOnlineStatus()
  const cartItems = useSelector(state => state.cart.items)

  return (
    <div className='flex flex-col md:flex-row justify-between items-center my-4 px-6 py-3 shadow-lg rounded-md'>
      <div className='flex items-center mb-4 md:mb-0'>
        <Link to='/'>
          <img className='h-16 cursor-pointer' src={LOGO_URl} alt='logo' />
        </Link>

        <ul className='flex space-x-4 ml-4'>
          <li
            className={`font-semibold text-${
              onlineStatus ? 'green' : 'red'
            }-600`}
          >
            {onlineStatus ? 'Online🟢' : 'Offline🔴'}
          </li>

          <li className='hover:text-blue-600 cursor-pointer hidden md:block'>
            <div className='flex items-center'>
              <img className='w-4 mx-2 mt-0.5' src={searchSvg} alt='search' />
              <p>Search</p>
            </div>
          </li>
        </ul>
      </div>

      <div className='flex items-center'>
        <ul className='flex space-x-4 text-lg'>
          <li className='hover:text-blue-600 cursor-pointer'>
            <Link to='/'>Home</Link>
          </li>
          <li className='hover:text-blue-600 cursor-pointer'>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li className='hover:text-blue-600 cursor-pointer'>
            <Link to='/about'>About</Link>
          </li>
        </ul>

        <div className='relative ml-4'>
          <img className='w-6 shadow-md' src={cartSvg} alt='cart' />
          <p className='text-sm font-semibold bg-red-500 text-white px-1 rounded-full absolute -mt-2 right-0 top-0'>
            {cartItems.length}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
