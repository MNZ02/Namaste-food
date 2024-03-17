import React, { useEffect, useState } from 'react'
import Card from './Card'
import { SWIGGY_API } from '../utils/constants';
import Search from './Search';


function Body() {

    const [listofRes, setListofRes] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])


    const fetchData = async () => {

        const res = await fetch(SWIGGY_API);
        const data = await res.json();
        const restaurants = data.data.cards[4].card.card.gridElements.infoWithStyle.restaurants

        console.log(restaurants);
        setListofRes(restaurants)
    }
    return (
        <div>
            <Search list={listofRes} setFilteredList={setFilteredList} />

            <Card list={filteredList.length > 0 ? filteredList : listofRes} />


        </div>
    )
}

export default Body
