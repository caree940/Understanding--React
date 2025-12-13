import { IMG_CDN_URL } from "../utils/contains";

const RestaurantCard = ({ resData }) => {
  if (!resData) return null;

  const {
    name,
    cuisines = [],
    avgRating,
    costForTwo,
    sla = {},
    cloudinaryImageId,
  } = resData;

  const imageUrl = cloudinaryImageId
    ? `${IMG_CDN_URL}fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`
    : "https://via.placeholder.com/508x320?text=No+Image";

  return (
    <div className="res-card">
      <img className="card-image" src={imageUrl} alt={name || "restaurant"} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo} FOR TWO</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;




