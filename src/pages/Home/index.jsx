import React, { useState , useEffect } from "react";
import RestaurantCard from "../../components/RestaurantCard";
import styles from "./style.module.css";
import Shimmer  from "../../components/Shimmer";
import Search from "../../components/Search";

const Home = () => {
  const [listOfRestaurants , setListOfRestaurants] = useState([]);


  // useEfffect takes 2 arguments , a callbackfunction and a dependency array
  useEffect(() => {
  fetchData();
  }, []);

// callback function in use effect will be called after the componenet is rendered.

const fetchData = async () => {
  const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.8344396&lng=77.5698527&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  
  const jsonData = await data.json();

  //console.log(jsonData);

  //Optional Chaining
  setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
}

return listOfRestaurants.length === 0 ? (
   <Shimmer />
) : (
    <div className="cards-wrap">
      <div className="filter">
        <Search />
        <button className="filter-btn" onClick={()=>{
        const filteredList = listOfRestaurants.filter(
          (res) => res.info.avgRating > 4
        );
        setListOfRestaurants(filteredList);
        }}>
          Top Rated Restaurants
        </button>

      </div>
        <div className={styles["top-res-sec"]}>
      {listOfRestaurants.map((restaurant) => (
        <RestaurantCard resData={restaurant} key={restaurant.info.id}/>
      ))}
      </div>
    </div>
  
  );
};

export default Home;
