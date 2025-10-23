import { IMG_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { resName, cuisines, rating, deliveryTime, imgId } = resData;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={IMG_URL + imgId}
        alt="restaurant"
      />
      <div className="restaurant-info">
        <h2>{resName}</h2>
        <p className="cuisines">{cuisines.join(", ")}</p>
        <p className="rating">Rating: {rating}</p>
        <p>{deliveryTime} minutes</p>
      </div>
    </div>
  );
};

export default RestaurantCard;