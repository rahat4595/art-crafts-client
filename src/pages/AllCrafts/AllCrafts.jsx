import { Link, useLoaderData } from "react-router-dom";

const AllCrafts = () => {
    const crafts = useLoaderData();

    return (
        <div className="overflow-x-auto max-w-7xl mx-auto mt-5">
            <table className="table-auto w-full">
                <thead>
                    <tr className="text-xl">
                        <th className="px-4 py-2"></th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Subcategory</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">Rating</th>
                        <th className="px-4 py-2">Details</th> {/* Add this column for the button */}
                    </tr>
                </thead>
                <tbody className="text-xl">
                    {crafts.map((craft, index) => (
                        <tr key={craft._id}>
                            <td className="border px-4 py-4">{index + 1}</td>
                            <td className="border px-4 py-2">{craft.item_name}</td>
                            <td className="border px-4 py-2">{craft.subcategory_Name}</td>
                            <td className="border px-4 py-2">{craft.price} $</td>
                            <td className="border px-4 py-2">{craft.rating}</td>
                            <td className="border px-4 py-2">
                                <Link to={`/craft-details/${craft._id}`} className="text-blue-500 hover:underline">View Details</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllCrafts;
