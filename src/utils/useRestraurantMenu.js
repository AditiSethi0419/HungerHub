// Custom hook

import { useState , useEffect} from "react";
import { MENU_API } from "./constants";

const useRestraurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const response = await data.json();
        setResInfo(response.data);
        //console.log(response.data);
        // console.log(resInfo);
      };
      useEffect(() => {
        fetchMenu();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []); // since dependency array is empty data call will be made only once after initial render.
      //console.log("hello i am rendered");
       
      return resInfo;
}

export default useRestraurantMenu
