import React from 'react';
import { SWIGGY_IMG } from '../utils/constants';

function Card({ list }) {
    return (
        <div className='flex flex-wrap m-4 p-4 cursor-pointer'>

            {
                list.map((res) => (
                    
            <div className='w-60 border border-black m-2 p-2 px-2 bg-gray-200 rounded-md' key={res.info.id}>
                

                <img className='h-40 w-44 m-auto mb-2 rounded-md p-2' src={SWIGGY_IMG + res.info.cloudinaryImageId} alt="card" />
                <h2>{res.info.name}</h2>
                <h2>{res.info.cuisines.join(', ')}</h2>
                <h3>{res.info.avgRating}</h3>
                <h3>{res.info.sla.deliveryTime} minutes</h3>

            </div>
            ))
            }

        </div>
    );
}

export default Card;
