import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import RestaurantSkelton from "./RestaurantSkelton";
import { useEffect, useState } from "react";
import useOnlineStatus from "../hooks/useOnlineStatus";
import type { Restaurant, APIResponse } from "./types";

const Body = () => {
  const [res, setRes] = useState<Restaurant[]>([]);
  const [filteredRes, setFilteredRes] = useState<Restaurant[]>([]);
  const [textFilter, setTextFilter] = useState("");
  const isOnline = useOnlineStatus();

  const handleSearch = (): void => {
    const filteredRes = res.filter(val =>
      val?.info?.name?.toLowerCase().includes(textFilter?.toLowerCase())
    );
    setFilteredRes(filteredRes);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTextFilter(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("http://localhost:4000/restaurants");
    const res: APIResponse = await data.json();
    const resCards =
      res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setRes(resCards || []);
    setFilteredRes(resCards || []);
  };

  if (!isOnline)
    return <h1>You are Offline. Please check your internet connection</h1>;
  return (
    <div className="flex flex-col items-center gap-4 px-10 pt-4">
      <div className="flex justify-center gap-4">
        <input
          type="text"
          placeholder="Search for restaurants and food"
          onChange={handleInputChange}
          className="px-8 w-96 py-2 border border-black rounded-lg dark:border-white dark:text-white"
        />
        <button
          onClick={() => {
            handleSearch();
          }}
          className="px-4 py-2 border border-black rounded-lg bg-gray-300 cursor-pointer"
        >
          Search
        </button>
      </div>
      {res?.length === 0 ? (
        <RestaurantSkelton />
      ) : (
        <div className="flex flex-wrap gap-8 justify-start">
          {filteredRes?.map(restaurant => (
            <Link
              to={`restaurant/${restaurant?.info?.id}`}
              key={restaurant?.info?.id}
            >
              <RestaurantCard resData={restaurant.info} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
