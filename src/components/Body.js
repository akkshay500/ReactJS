import RestaurantList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const Body = () =>{
    const [ListOfRestaurants,setListOfRestaurants] = useState([]);
    const [FilteredRestaurantList,setFilteredRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=> {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.556466603697835&lng=73.75945129380037&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(json);
    };

    if(ListOfRestaurants.length ===0){
        return <Shimmer/>
    }

    return (
      <div className="body">
        <div className="filter">
            <div className="search">
                <input className="searchInpt" onChange={(e)=> {
                    setSearchText(e.target.value);
                }}/>
                <button className="searchbtn" onClick={()=>{
                    const filteredList = ListOfRestaurants.filter((res)=>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    console.log(filteredList);
                    setFilteredRestaurantList(filteredList);
                }}>Search</button>
            </div>
            <button className="filter-top-rated" onClick={() => {
                const filteredRestaurants = ListOfRestaurants.filter((x) => x.info.avgRating > 4);
                setFilteredRestaurantList(filteredRestaurants);
            }}> Top Rated Restaurants</button>
        </div>
      <div className="res-container">
      {FilteredRestaurantList.map(Restaurant => <RestaurantCard key = {Restaurant.info.id} resData = {Restaurant}/>)}
        </div>
    </div>
    );
};

export default Body;