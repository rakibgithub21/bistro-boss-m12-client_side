import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUp/Signup";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Reservation from "../Pages/Dashboard/Cart/Reservation/Reservation";
import Review from "../Pages/Dashboard/Review/Review";
import MyHome from "../Pages/Dashboard/MyHome/MyHome";
import MyBookings from "../Pages/Dashboard/MyBookings/MyBookings";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/menu',
                element:<Menu></Menu>
            },
            {
                path: '/order/:category',
                element:<Order></Order>
            },
            {
                path: '/login',
                element:<Login></Login>
            },
            {
                path: '/signup',
                element:<Signup></Signup>
            },
            {
                path: '/secret',
                element: <PrivateRoute><Secret></Secret></PrivateRoute>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: '/dashboard/cart',
                element:<Cart></Cart>
            },
            {
                path: '/dashboard/reservation',
                element:<Reservation></Reservation>
            },
            {
                path: '/dashboard/review',
                element:<Review></Review>
            },
            {
                path: '/dashboard/home',
                element:<MyHome></MyHome>
            },
            {
                path: '/dashboard/bookings',
                element:<MyBookings></MyBookings>
            },
        ]
    }
]);