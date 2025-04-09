import { useState, useEffect } from "react";
import Shimmer from "../../components/Shimmer";
import { useParams } from "react-router-dom";
import {MENU_API} from "../../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const {resId}= useParams();

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const response = await data.json();
    setResInfo(response.data);
    console.log(response.data);
    // console.log(resInfo);
  };
  useEffect(() => {
    fetchMenu();
  }, []); // since dependency array is empty data call will be made only once after initial render.
  //console.log("hello i am rendered");

  if (resInfo === null) return <Shimmer />; // ✅ early return

   //console.log(resInfo?.cards[2]?.card?.card?.info);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info ?? {};
  //console.log(name , cuisines , costForTwoMessage) ;

  return  (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
