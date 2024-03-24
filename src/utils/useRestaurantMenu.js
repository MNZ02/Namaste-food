import { useState, useEffect } from 'react';
import { SWIGGY_MENU_API } from '../utils/constants'


const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState('');
    const [resItem, setResItem] = useState([]);


    useEffect(() => {
        if(resId)
         fetchData();
    }, [resId])

    const fetchData = async () => {
        try {
            const res = await fetch(SWIGGY_MENU_API + resId);
            const data = await res.json();

            setResInfo(data?.data?.cards[0]?.card?.card?.info);

            setResItem(data?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);

            console.log(data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards);

        } catch (error) {
            console.error("Error fetching menu", error.message);
        }
    }
    return { resInfo, resItem }
}

export default useRestaurantMenu;