
import Shimmer from "../../components/Shimmer";
import { useParams } from "react-router-dom";
import useRestraurantMenu from "../../utils/useRestraurantMenu";
// import RestaurantCategory from "../../components/RestaurantCategory";


const RestaurantMenu = () => {
  

  const {resId}= useParams();

 const resInfo = useRestraurantMenu(resId);


  if (resInfo === null) return <Shimmer />; // ✅ early return

   //console.log(resInfo?.cards[2]?.card?.card?.info);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info ?? {};
  //console.log(name , cuisines , costForTwoMessage) ;

  // eslint-disable-next-line no-unsafe-optional-chaining
  const{ itemCards }= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  //  console.log(itemCards);

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  
console.log(categories)
  return  (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(" , ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h2>Menu</h2>
      <ul>
  {itemCards.map((item) => (
    <li key={item.card.info.id}>
      {item.card.info.name} - ₹
      {item.card.info.finalPrice / 100 || item.card.info.defaultPrice / 100}
    </li>
  ))}
</ul>
    </div>
  );
};

export default RestaurantMenu;
