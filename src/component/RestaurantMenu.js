import { MENU_DATA } from "../mock/data"; // adjust path
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams(); // grab the "id" from URL

  useEffect(() => {
    // simulate fetching menu with mock data
    const fetchMenu = async () => {
      // mimic async fetch
      await new Promise((resolve) => setTimeout(resolve, 500));
      setResInfo(MENU_DATA.data);
    };
    fetchMenu(resId);
  }, [resId]);

  if (!resInfo) return <Shimmer />;

  // safely access restaurant info
  const {
    name = "",
    cuisines = [],
    costForTwoMsg = "",
  } = resInfo || {};

  // safely access menu items
  const itemCards = resInfo.menu?.items
    ? Object.values(resInfo.menu.items)
    : [];

  return (
    <div>
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      <p>{costForTwoMsg}</p>

      <h2>Menu Items</h2>
      {itemCards.length === 0 ? (
        <p>No items available</p>
      ) : (
        <ul>
          {itemCards.map((item) => (
            <li key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.category}</p>
              <p>{item.price / 100} ₹</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RestaurantMenu;

