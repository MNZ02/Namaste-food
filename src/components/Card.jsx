import React from 'react';
import { SWIGGY_IMG } from '../utils/constants';
import { Link } from 'react-router-dom';

function Card({ list }) {
    return (
        <div className='flex flex-wrap justify-center gap-8 md:justify-start md:gap-8 lg:gap-12 cursor-pointer mt-8 lg:ml-8'>
            {
                list.map((res) => (
                    <Link to={`res/${res.info.id}`} key={res.info.id}>
                        <div className='w-64 shadow-lg bg-gray-100 hover:bg-gray-300 overflow-hidden rounded-md hover:shadow-lg transition duration-300'>



                            <img className='h-40 w-full object-cover object-center transform hover:scale-110 transition duration-300 ease-in-out  rounded-t-lg' src={SWIGGY_IMG + res.info.cloudinaryImageId} alt="card" />

                            <div className='p-4'>
                                <h2 className='font-semibold text-lg mb-2'>{res.info.name}</h2>
                                <p className='text-gray-600 mb-2'>{res.info.cuisines.join(', ')}</p>
                                <div>
                                    <span className={`text-lg ${res.info.avgRating > 4 ? 'text-green-500' : 'text-red-500'} mr-1`}>{res.info.avgRating}</span>
                                    <span className='text-sm text-gray-500'>({res.info.totalRatings} ratings)</span>
                                </div>
                                <p className='text-gray-700'>{res.info.sla.deliveryTime} minutes</p>
                            </div>


                        </div>
                    </Link>
                ))
            }

        </div>
    );
}



export default Card;
