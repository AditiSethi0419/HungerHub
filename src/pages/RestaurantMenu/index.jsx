import { useState, useEffect } from 'react';
import Shimmer from "../../components/Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);


  const fetchMenu = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=671928");
    const response = await data.json();
    setResInfo(response.data);
    console.log(response.data);
    console.log(resInfo);
  }
  //console.log(resInfo?.cards[2]?.card?.card?.info);
  // eslint-disable-next-line no-unsafe-optional-chaining
  //const {name , cuisines , costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;
  //console.log(name , cuisines , costForTwoMessage) ;


  useEffect(() => {
    fetchMenu()
  }, []); // since dependency array is empty data call will be made only once after initial render.
  //console.log("hello i am rendered");

  return resInfo === null ? (<Shimmer />) : (
    <div className='menu'>
      {/* <h1>{name}</h1>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>{costForTwoMessage}</h3> */}
      <h2>Menu</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  )
}

export default RestaurantMenu;