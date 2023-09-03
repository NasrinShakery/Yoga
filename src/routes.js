import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import AboutUs from "./pages/AboutUs/AboutUs";
// import Properties from "./pages/Products/Products";
// import PropertyDetails from "./pages/ProductDetails/ProductDetails";
import NotFound404 from "./pages/NotFound404/NotFound404";

const routes = [
   { path: "/", element: <Home /> },
   { path: "/login", element: <Login /> },
   { path: "/about-us", element: <AboutUs /> },
   // { path: "/Products", element: <Products /> },
   // { path: "/ProductDetails/:ProductID", element: <ProductDetails /> },
   // { path: "/admin-panel", element: <AdminPanel /> },
   { path: "*", element: <NotFound404 /> }
];

export default routes;
