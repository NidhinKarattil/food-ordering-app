import ReactDOM from "react-dom/client";
import "./App.css";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";

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
