import { GoStar } from "react-icons/go";
import { useLoaderData } from "react-router-dom";

const AllCrafts = () => {
    const crafts = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto mt-5 grid grid-cols-3 gap-4">
            {crafts.map(craft => (
                <div key={craft._id} className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className="duration-300 hover:scale-105" src={craft.photo} alt={craft.item_name} /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{craft.item_name}</h2>
                        <p className="text-gray-500">{craft.short_Description}</p>
                        <div className="flex">
                            <p>PRICE: {craft.price}</p>
                            <p className="flex gap-2">{craft.rating} <GoStar className="mt-1" /></p>
                        </div>
                        <div className="card-actions justify-start">
                            {/* Any actions you want to include */}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllCrafts;
