import { GoStar } from "react-icons/go"; import { Link } from "react-router-dom";


const Crafts = ({ craft }) => {

    const { _id, item_name, subcategory_Name, price, rating, short_Description, processing_time, customization, stockStatus, userName, email, photo } = craft
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="duration-300 hover:scale-105" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">
                    {item_name}
                </h2>
                <p className="text-gray-500">{short_Description}</p>
                <div className="flex">
                    <p>PRICE: ${price}</p>
                    <p className="flex gap-2">{rating} <GoStar className="mt-1" /></p>
                </div>
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
    );
};

export default Crafts;