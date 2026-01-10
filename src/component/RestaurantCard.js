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
    <div className="res-card m-4 p-4 w-[300px] bg-gray-100 rounded-lg hover:bg-gray-200">
      <img className="card-image rounded-md" src={imageUrl} alt={name || "restaurant"} />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="font-semibold text-md py-2">{cuisines.join(", ")}</h4>
      <h4 className="font-semibold text-md py-1">{avgRating}</h4>
      <h4 className="font-semibold text-sm py-1">{costForTwo} FOR TWO</h4>
      <h4 className="font-semibold text-sm py-1">{sla.deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;




