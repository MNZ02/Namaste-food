import React from 'react'
import { LOGO_URl } from '../utils/constants'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
function Header() {

    const onlineStatus = useOnlineStatus();

    return (
        <div className='flex justify-between m-4 p-4 border border-black'>
            <div>
                <img className='h-20 -mt-3' src={LOGO_URl} alt="logo" />
            </div>

            <div>
                <ul className='flex text-xl m-2 p-2'>

                    <li>
                        {onlineStatus ? '🟢' : '🔴'}
                    </li>
                    <li className='mr-2 pr-2 cursor-pointer'>
                        <Link to='/'>Home</Link>
                    </li>

                    <li className='mr-2 pr-2 cursor-pointer'><Link to='/res'>Menu</Link></li>

                    <li className='mr-2 pr-2 cursor-pointer'><Link to='/grocery'>Grocery</Link></li>

                    <li className='mr-2 pr-2 cursor-pointer'><Link to='/about'>About</Link></li>

                    <li className='mr-2 pr-2 cursor-pointer'>Cart</li>
                </ul>
            </div>

        </div>
    )
}

export default Header
