import { IMG_URL } from "../utils/constants";
import type { Info } from "./types";

const RestaurantCard = ({ resData }: { resData: Info }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData;
  return (
    <div className="w-60 rounded-lg hover:bg-gray-100 overflow-hidden dark:hover:bg-black">
      <img
        className="w-full h-48 rounded-t-lg"
        src={IMG_URL + cloudinaryImageId}
        alt="restaurant"
      />
      <div className="py-4 px-4">
        <h2 className="dark:text-white">{name}</h2>
        <p className="dark:text-white">{cuisines.join(", ")}</p>
        <p className="text-green-600 font-medium dark:text-white">
          Rating: {avgRating}
        </p>
        <p className="text-gray-500 dark:text-white">{sla.slaString}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
