import React, { useState } from "react";
import RestaurantCard from "../../components/RestaurantCard";
import styles from "./style.module.css";
import resList from "../../utils/data";

const Home = () => {
  const [listOfRestaurants , setListOfRestaurants] = useState(resList);
  return (
    <div className="cards-wrap">
      <div className="filter">
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
