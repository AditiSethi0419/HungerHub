import React, { useState , useEffect } from "react";
import RestaurantCard from "../../components/RestaurantCard";
import styles from "./style.module.css";
import Shimmer  from "../../components/Shimmer";
import Search from "../../components/Search";
import { Link } from 'react-router-dom';

const Home = () => {
  const [listOfRestaurants , setListOfRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]); // Keep original list
  const [searchText , setSearchText] = useState("");

  // useEfffect takes 2 arguments , a callbackfunction and a dependency array
  useEffect(() => {
  fetchData();
  }, []);

// callback function in use effect will be called after the componenet is rendered.

const fetchData = async () => {
  const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  
  const jsonData = await data.json();
  const restaurants = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants; // optional chaining

  setListOfRestaurants(restaurants);
  setAllRestaurants(restaurants); // Keep a copy of full data

}


const handleSearch = () => {
  const filtered = allRestaurants.filter((res) =>
    res.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  setListOfRestaurants(filtered);
};

return listOfRestaurants.length === 0 ? (
   <Shimmer />
) : (
    <div className="cards-wrap">
      <div className="filter">
        <Search  onSearch={handleSearch}
          searchText={searchText}
          onInputChange={setSearchText} />
           <button className="filter-btn" onClick={() => {
    setListOfRestaurants(allRestaurants); // Reset to original
    setSearchText(""); // Clear search box
  }}>
    Reset
  </button>
        <button className="filter-btn" onClick={()=>{
        const filteredList = listOfRestaurants.filter(
          (res) => res.info.avgRating > 4.5
        );
        setListOfRestaurants(filteredList);
        }}>
          Top Rated Restaurants
        </button>
        
      </div>
        <div className={styles["top-res-sec"]}>
      {listOfRestaurants.map((restaurant) => (
      <>
      {/* {console.log(restaurant?.info?.id)} */}
       <Link to={`restaurants/${restaurant?.info?.id}`}><RestaurantCard resData={restaurant} key={restaurant.info.id}/></Link>
       </>  
    
      ))}
      </div>
    </div>
  
  );
};

export default Home;
