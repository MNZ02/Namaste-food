import React from 'react'
import { LOGO_URl } from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
function Header() {

    const onlineStatus = useOnlineStatus();

    return (
        <div className='flex justify-between items-center my-4 px-6 py-3 shadow-lg rounded-md'>
            <div>
                <img className='h-16' src={LOGO_URl} alt="logo" />
            </div>

            <div>
                <ul className='flex space-x-4 text-lg'>

                    <li className={`font-semibold text-${onlineStatus ? 'green' : 'red'}-600`}>
                        {onlineStatus ? 'Online🟢' : 'Offline🔴'}
                    </li>
                    <li className='hover:text-blue-600 cursor-pointer'>
                        <Link to='/'>Home</Link>
                    </li>

                    <li className='hover:text-blue-600 cursor-pointer'><Link to='/res'>Menu</Link></li>

                    <li className='hover:text-blue-600 cursor-pointer'><Link to='/grocery'>Grocery</Link></li>

                    <li className='hover:text-blue-600 cursor-pointer'><Link to='/about'>About</Link></li>

                    <li className='hover:text-gray-600 cursor-pointer font-semibold text-xl'>Cart</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
