import { useEffect, useState } from "react";

const useRestaurantBodyCard = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await response.json();

      // ✅ Extract all restaurant cards from widgets
      const restaurants = [];
      json?.data?.cards?.forEach((cardWrapper) => {
        const resArray =
          cardWrapper?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (resArray) {
          restaurants.push(...resArray);
        }
      });

      setAllRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (err) {
      console.error("Error fetching restaurants:", err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    allRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
    loading,
    error,
  };
};

export default useRestaurantBodyCard;
