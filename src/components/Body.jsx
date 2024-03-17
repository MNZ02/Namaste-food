import React, { useEffect, useState } from 'react'
import Card from './Card'
import Shimmer from './Shimmer';
import { SWIGGY_API } from '../utils/constants';
import Search from './Search';


function Body() {

    const [listofRes, setListofRes] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {
        try {
            const res = await fetch(SWIGGY_API);
            const data = await res.json();
            const restaurants = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants

            console.log(restaurants);
            setListofRes(restaurants)
            setIsLoading(false)
        } catch (error) {
            console.error('Error fetching data', error.message)
            setIsLoading(false);
        }


    }

    return (
        <div>
            <Search list={listofRes} setFilteredList={setFilteredList} />

            {isLoading ? (<Shimmer />) : (<Card list={filteredList.length > 0 ? filteredList : listofRes} />)}


        </div>
    )
}

export default Body
