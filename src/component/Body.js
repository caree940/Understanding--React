
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
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />

          <button
            className="search-btn"
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

        <button className="filter-btn" onClick={filterTopRated}>
          Top Rated Restaurant
        </button>
      </div>

      <div className="res-container">
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


