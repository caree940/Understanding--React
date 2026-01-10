
import { useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useRestaurantBodyCard from "../utils/useRestaurantBodyCard";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const {
    allRestaurants,
    filteredRestaurant,
    setFilteredRestaurant,
    loading,
  } = useRestaurantBodyCard();

  const [searchText, setSearchText] = useState("");

  // ✅ Top Rated Filter
  const filterTopRated = () => {
    const filtered = allRestaurants.filter(
      (res) => res.info?.avgRating > 4
    );
    setFilteredRestaurant(filtered);
  };

  const onLineStatus = useOnlineStatus();

  if (onLineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection</h1>

  // ✅ Loading state
  if (loading) return <Shimmer />;


  return (
    <div className="body">
      <div className="filter flex items-center justify-between">
        <div className="search-container m-2 p-2 ">
          <input
            type="text"
            className="search-input border border-solid border-black py-2 px-2 rounded-md"
            placeholder="Search restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="search-btn px-4 py-2 bg-green-200 m-4 rounded-lg"
            onClick={() => {
              const filtered = allRestaurants.filter((res) =>
                res?.info?.name
                  ?.toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
        <div className="px-4 py-2">
        <button className="filter-btn px-4 py-2 bg-gray-200 rounded-lg" onClick={filterTopRated}>
          Top Rated Restaurant
        </button>
        </div>
      </div>

      <div className="res-container grid grid-cols-4">
        {filteredRestaurant.length === 0 ? (
          <h3>No restaurants found</h3>
        ) : (
          filteredRestaurant.map((restaurant, index) => (
            <Link
              key={`${restaurant.info.id}-${index}`}
              to={"/restaurant/" + restaurant.info.id}
            >
              <RestaurantCard resData={restaurant.info} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;


