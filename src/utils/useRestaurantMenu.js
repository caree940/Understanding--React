 //fetchData we will fetch the data using the useEffect() hook
//the difference is that instead of us fetching inside our RestaurantMenu component we fetch it here and export it
// there this way making our code more simple and clean

import { useEffect, useState } from "react";
import { MENU_DATA } from "../mock/data"; // adjust path

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      // simulate API delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // if you later switch to real API, change only here
      setResInfo(MENU_DATA.data);
    };

    fetchMenu();
  }, [resId]);

  return resInfo;
};

export default useRestaurantMenu;

