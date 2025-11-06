import { lazy } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import HeaderComponent from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import RouterError from "./components/RouterError";
import RestaurantMenu from "./components/RestaurantMenu";
const Groceries = lazy(() => import("./components/Groceries"));

const AppLayout = () => {
  return (
    <div className="bg-white dark:bg-black mb-6">
      <HeaderComponent />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/groceries",
        element: <Groceries />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <RouterError />,
  },
]);

const root = createRoot(document.getElementById("root")!);
root.render(<RouterProvider router={appRouter} />);
