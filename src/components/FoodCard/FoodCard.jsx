import React from 'react';

const FoodCard = ({ item }) => {
    const { name, image, price, recipe } = item
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className=' w-full p-4' src={image} alt="Shoes" /></figure>
            <p className='bg-slate-700 rounded-lg p-2 text-white font-medium absolute right-0 top-2'>$ {price}</p>
            <div className="card-body text-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;