import ReactDOM from "react-dom/client";
import "./App.css";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://thumbs.dreamstime.com/b/food-delivery-logo-template-vector-icon-illustration-170869600.jpg"
          alt="logo"
          className="logo"
        />
        <p>Food Delivery</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = ({ resData }) => {
  const { resName, cuisines, rating, deliveryTime, imgId } = resData;
  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + imgId}
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

const resData = [
  {
    resId: 1,
    resName: "Bakery World",
    cuisines: ["Pastry", "Desserts", "Bakery"],
    rating: "4.2",
    deliveryTime: "30-40",
    imgId: "mt2aggiscfl3yviatwng",
  },
  {
    resId: 2,
    resName: "Adil Hotel",
    cuisines: ["Biryani", "North Indian", "Mughlai"],
    rating: "4.2",
    deliveryTime: "30-40",
    imgId: "gp1ityra6utvzqn6ghnv",
  },
  {
    resId: 3,
    resName: "McDonald's",
    cuisines: ["Burger", "American"],
    rating: "4.2",
    deliveryTime: "20-30",
    imgId: "enj3srsnhbltbom2ovvh",
  },
];
const Body = () => {
  return (
    <div className="body-container">
      <div className="search">
        <input type="text" placeholder="Search for restaurants and food" />
      </div>
      <div className="restaurant-container">
        {resData.map((restaurant) => (
          <RestaurantCard key={restaurant.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app-layout">
      <HeaderComponent />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
