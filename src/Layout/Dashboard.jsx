import { FaBook, FaCalendarWeek, FaEnvelope, FaHome, FaList,  FaShoppingBag,  FaUsers, FaUtensils } from "react-icons/fa";
import { FcRating } from "react-icons/fc";
import { IoMdMenu } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
    //TODO: get isAdmin value from the database
    const isAdmin = true;

    return (
        <div className="flex gap-10">
            <div className="w-64 h-screen bg-orange-300">

                <ul className="menu space-y-2">
                    {isAdmin ? <>
                        <li><NavLink to={'/dashboard/adminHome'}><FaHome></FaHome> Admin Home</NavLink></li>

                        <li><NavLink to={'/dashboard/addItems'}><FaUtensils></FaUtensils> Add Items</NavLink></li>

                        <li><NavLink to={'/dashboard/manageItems'}><FaList></FaList>Manage Items</NavLink></li>
                        <li><NavLink to={'/dashboard/manageBookings'}><FaBook></FaBook>Manage Bookings</NavLink></li>
                        <li><NavLink to={'/dashboard/allUsers'}><FaUsers />All Users</NavLink></li>
                    </> : <>
                            <li><NavLink to={'/dashboard/reservation'}><FaCalendarWeek></FaCalendarWeek>Reservation</NavLink></li>

                            <li><NavLink to={'/dashboard/home'}><FaHome></FaHome> My Home</NavLink></li>

                            <li><NavLink to={'/dashboard/review'}><FcRating></FcRating> Add a Review</NavLink></li>

                            <li><NavLink to={'/dashboard/cart'}><FaShoppingBag></FaShoppingBag>My Cart</NavLink></li>

                            <li><NavLink to={'/dashboard/bookings'}><FaList></FaList>My Bookings</NavLink></li>
                    </>}
                    <div className="divider"></div>
                    {/* shared nav links */}
                    <li><NavLink to={'/'}><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to={'/order/salad'}><IoMdMenu /> Menu</NavLink></li>
                    <li><NavLink to={'/order/contact'}><FaEnvelope /> Contact</NavLink></li>
                </ul>

            </div>
            {/* dashboard side bar */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;