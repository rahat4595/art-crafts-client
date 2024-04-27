import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Context";
import { GoStar } from "react-icons/go";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyCrafts = () => {

    const { user } = useContext(AuthContext);
    console.log(user);
    const [lists, setLists] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLists(data);
            });
    }, [user]);

    const handleDeleteCraft = (id) => {
        // Show SweetAlert confirmation dialog
        Swal.fire({
            title: 'Are you sure?',
            text: 'You will not be able to recover this craft!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                // If user confirms deletion, send DELETE request to server
                fetch(`http://localhost:5000/crafts/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        // Update state to remove the deleted craft
                        setLists(lists.filter(craft => craft._id !== id));
                        // Show success message
                        Swal.fire(
                            'Deleted!',
                            'Your craft has been deleted.',
                            'success'
                        );
                    })
                    .catch(error => console.error('Error deleting craft:', error));
            }
        });
    };

    return (
        <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            {
                lists?.map(list => (
                    <div key={list._id}>
                        <div className="card w-full bg-base-100 shadow-xl">
                            <figure><img className="duration-300 hover:scale-105" src={list.photo} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-2xl">
                                    {list.item_name}
                                </h2>

                                <div className="flex my-4">
                                    <p>PRICE: {list.price}</p>
                                    <p className="flex gap-2">{list.rating} <GoStar className="mt-1" /></p>
                                </div>
                                <div className="flex">
                                    <p><b>Customization:</b> {list.customization}</p>
                                    <p><b>Stock Status:</b> {list.stockStatus}</p>
                                </div>
                                <div className="flex gap-5">
                                    <Link to={`/updateCraft/${list._id}`}>
                                        <button className="text-xl font-semibold px-5 py-2 bg-black text-white rounded-md mt-10 relative overflow-hidden group">
                                            <span className="absolute inset-0 bg-[#23BE0A] duration-300 transition-transform group-hover:translate-x-full"></span>
                                            <span className="relative z-10">Update</span>
                                        </button>
                                    </Link>

                                    <button onClick={() => handleDeleteCraft(list._id)} className="text-xl font-semibold px-5 py-2 bg-black text-white rounded-md mt-10 relative overflow-hidden group">
                                        <span className="absolute inset-0 bg-red-500 duration-300 transition-transform group-hover:translate-x-full"></span>
                                        <span className="relative z-10">Delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


                ))
            }

        </div>
    );
};

export default MyCrafts;