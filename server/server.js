import express from "express";
import cors from "cors";
import { resData } from "./mockData.js";

const app = express();
app.use(cors());

app.get("/restaurants", (req, res) => {
  res.send(resData);
});

app.get("/listRestaurantMenu/:id", (req, res) => {
  const { id } = req.params;
  const restaurantMenu =
    resData?.data?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants?.find(
      (restaurant) => restaurant.info.id === id
    );
  res.send(restaurantMenu);
});

app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
