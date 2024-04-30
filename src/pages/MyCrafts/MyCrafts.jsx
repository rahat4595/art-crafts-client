import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/Context";
import { GoStar } from "react-icons/go";
import { Link } from "react-router-dom";
import Aos from "aos";
import 'aos/dist/aos.css'
import Swal from "sweetalert2";

const MyCrafts = () => {

    const { user } = useContext(AuthContext);
    console.log(user);
    const [lists, setLists] = useState([]);
    const [filteredLists, setFilteredLists] = useState([]); // State for filtered crafts
    const [customizationFilter, setCustomizationFilter] = useState(''); // State for customization filter

    // Filter crafts based on customization (case-insensitive)
    useEffect(() => {
        if (customizationFilter === '') {
            // If no filter is applied, show all crafts
            setFilteredLists(lists);
        } else {
            // Otherwise, filter crafts based on customization
            const filteredCrafts = lists.filter(craft =>
                craft.customization.toLowerCase() === customizationFilter.toLowerCase()
            );
            setFilteredLists(filteredCrafts);
        }
    }, [customizationFilter, lists]);


    useEffect(() => {
        fetch(`https://arts-design-server.vercel.app/myList/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setLists(data);
                setFilteredLists(data);
            });
    }, [user]);

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

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
                fetch(`https://arts-design-server.vercel.app/crafts/${id}`, {
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
        <div>
            <div className="max-w-7xl mx-auto mt-10">
                <h2 className="text-4xl font-bold text-center">Have a look at your crafts</h2>
                <p className="text-center text-lg mt-10">You will find all the crafts and arts you have added</p>
            </div>
            <div className="max-w-7xl mx-auto text-center mt-5">
                <h2 className="text-xl font-bold mb-2" >Filter Your Crafts</h2>
                {/* <select id="customizationFilter" value={customizationFilter} onChange={(e) => setCustomizationFilter(e.target.value)}>
                    <option value="">All</option>
                    <option value="Yes">Customized</option>
                    <option value="No">Non-Customized</option>
                </select> */}

                <select id="customizationFilter" value={customizationFilter} onChange={(e) => setCustomizationFilter(e.target.value)} className="select select-bordered w-full max-w-xs">
                    <option value="">All</option>
                    <option value="Yes">Customizable</option>
                    <option value="No">Non Customizable</option>
                </select>
            </div>
            <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {
                    filteredLists?.map(list => (
                        <div key={list._id}>
                            <div className="card w-full h-full bg-base-100 shadow-xl " data-aos="zoom-in">
                                <figure><img className="duration-300 hover:scale-105 " src={list.photo} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">
                                        {list.item_name}
                                    </h2>

                                    <div className="flex my-4">
                                        <p>PRICE: ${list.price}</p>
                                        <p className="flex gap-2">{list.rating} <GoStar className="mt-1" /></p>
                                    </div>
                                    <div className="flex">
                                        <p><b>Customization:</b> {list.customization}</p>
                                        <p><b>Status:</b> {list.stockStatus}</p>
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

        </div>
    );
};

export default MyCrafts;