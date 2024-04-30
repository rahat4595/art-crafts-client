import { Link } from "react-router-dom";
import { GoStar } from "react-icons/go";
import 'animate.css';

const ItemDetails = ({item}) => {
    const { _id, item_name, subcategory_Name, price, rating, short_Description, processing_time, customization, stockStatus, userName, email, photo } = item
    return (
        <div>
            <div className="card w-full bg-base-100 shadow-xl animate__animated animate__fadeInUp">
            <figure><img className="duration-300 hover:scale-105" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">
                    {item_name}
                </h2>
                <h2 className="text-xl font-medium py-5">SUBCATEGORY: {subcategory_Name}</h2>
                <p className="text-gray-500">{short_Description}</p>
                <div className="flex">
                    <p>PRICE: ${price}</p>
                    <p className="flex gap-2">{rating} <GoStar className="mt-1" /></p>
                </div>
                <h2>Processing Time: {processing_time}</h2>
                <div className="card-actions justify-start">
                    <Link to={`/craft-details/${_id}`} >
                        <button className="text-xl font-semibold px-5 py-2 bg-black text-white rounded-md mt-10 relative overflow-hidden group">
                        <span className="absolute inset-0 bg-[#23BE0A] duration-300 transition-transform group-hover:translate-x-full"></span>
                        <span className="relative z-10">View Details</span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ItemDetails;