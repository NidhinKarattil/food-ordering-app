import RestaurantCard from "./RestaurantCard";
import { resData } from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [res, setRes] = useState(resData);

  const handleFilter = () => {
    const filteredRes = res.filter(val => Number(val.rating) > 4)
    setRes(filteredRes)
  };

  return (
    <div className="body-container">
      <div className="search">
        <input type="text" placeholder="Search for restaurants and food" />
        <button
          onClick={() => {
            handleFilter();
          }}
        >
          Filter highly rated restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {res.map((restaurant) => (
          <RestaurantCard key={restaurant.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
