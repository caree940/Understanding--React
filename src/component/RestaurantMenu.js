import { MENU_DATA } from "../mock/data"; // adjust path
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu"; //imported our personal hook


//I will creating a custom hooks here in the RestaurantMenu
// creating it here? The RestaurantMenu component has two major
//  jobs (fetching the data and displaying the data on the UI)
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId); // This now made our code look more clear and clean

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

