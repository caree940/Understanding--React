import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";



const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); // original full data
  const [listOfRestaurant, setListOfRestaurant] = useState([]); // UI data
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      //api configuration
      const json = await response.json();

      // Extract all restaurant cards from all widgets
      const restaurants = [];
      json?.data?.cards.forEach((cardWrapper) => {
        const resArray =
          cardWrapper?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (resArray) {
          restaurants.push(...resArray);
        }
      });

      console.log(restaurants);

      setAllRestaurants(restaurants);
      setListOfRestaurant(restaurants);
      setFilteredRestaurant(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    } finally {
      setLoading(false);
    }
  };

  const filterTopRated = () => {
    const filtered = allRestaurants.filter(
      (res) => res.info?.avgRating < 4
    );
    setListOfRestaurant(filtered);
  };

  //Conditional rendering
  if (loading) return <h2><Shimmer /></h2>;

  return (
    <div className="body">
      <div className="filter">
        <div className="search-container">
          <input 
          type="text" 
          className="search-input" 
          placeholder="search" 
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          />
          <button onClick={() => {
            //Filter the Restaurant card and update the UI
            console.log(searchText);

            const filteredRestaurant = listOfRestaurant.filter((res) => 
             res?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
           );
           setFilteredRestaurant(filteredRestaurant)

          }} 
          className="search-btn">
            search</button>
        </div>

        
        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
        {listOfRestaurant.length === 0 ? (
          <h3>No restaurants found</h3>
        ) : (
          filteredRestaurant.map((restaurant, index) => {
            const info = restaurant.info;
            if (!info) return null;

            // Use id + index to ensure unique key
            return <RestaurantCard key={`${info.id}-${index}`} resData={restaurant.info} />;
          })
        )}
      </div>
    </div>
  );
};

export default Body;


