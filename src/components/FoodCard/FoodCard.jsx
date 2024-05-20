/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const FoodCard = ({ item }) => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const axiosSecure = useAxiosSecure()

    const { name, image, price, recipe, _id } = item
    const location = useLocation()

    const handleAddToCart = () => {
        // console.log(item,user?.email);
        if (user && user?.email) {
            //TODO:send cart item to the database
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price,
            }
            console.log(cartItem);
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
            })
        } else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className=' w-full p-4' src={image} alt="Shoes" /></figure>
            <p className='bg-slate-700 rounded-lg p-2 text-white font-medium absolute right-0 top-2'>$ {price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCart} className="btn btn-outline bg-slate-100 border-0 border-orange-400 border-b-4 mt-4 ">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;