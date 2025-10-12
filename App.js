import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

// const h1 = React.createElement("h1", null, React.createElement("i", null, "Hello World!"));

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

const RestaurantContainer = () => {
    
}


const Body = () =>{
    return (
        <div className="body-container">
            <div className="search">
                <input type="text" placeholder="Search for restaurants and food"/>
            </div>
            {/* Restaurant container */}
        </div>
    )
}

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
