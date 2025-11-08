import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantSkelton from "./RestaurantSkelton";
import type { RestaurantMenuType } from "./types";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState<RestaurantMenuType | null>(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "http://localhost:4000/listRestaurantMenu/" + resId
    );
    const restaurant = await data.json();
    setResMenu(restaurant?.info);
  };

  if (!resMenu) return <RestaurantSkelton />;

  return (
    <div>
      <h1>{resMenu?.name}</h1>
      <ul></ul>
    </div>
  );
};

export default RestaurantMenu;
