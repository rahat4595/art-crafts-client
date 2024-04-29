import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../../providers/Context';

const AddCraft = () => {

    const {user} = useContext(AuthContext);
    console.log("user", user)

    if (!user) {
        return <div>Loading...</div>;
    }

    const { email, displayName,  } = user;

    const handleAddCraft = event => {
        event.preventDefault();

        const form = event.target;

        const item_name = form.item_name.value;
        const subcategory_Name = form.subcategory_Name.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const short_Description = form.short_Description.value;
        const processing_time = form.processing_time.value;
        const customization = form.customization.value;
        const stockStatus = form.stockStatus.value;
        const photo = form.photo.value
        

        const newCraft = { item_name, subcategory_Name, price, rating, short_Description, processing_time, customization, stockStatus, userName:displayName, email, photo }
        console.log("New Craft", newCraft)

        

        // send data to the server
        fetch('https://arts-design-server.vercel.app/crafts',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCraft)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Craft Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  });

                  form.reset();
            }
        })
    }



    return (
        <div className="bg-[#8bd94b6e] p-5 md:p-24">
            <h2 className="text-3xl text-center font-extrabold">Add a Craft</h2>
            <form  onSubmit={handleAddCraft}>
                {/* form name and subcategory row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="item_name" placeholder="Item Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* subcategory row */}
                    <div className="form-control md:w-1/2  md:ml-4">
                        <label className="input-group">
                            <div className="label">
                                <span className="label-text">Subcategory</span>
                                
                            </div>
                            <select className="select select-bordered w-full" name="subcategory_Name">
                            <option disabled selected>Pick One</option>
                                <option>Card Making</option>
                                <option>Scrapbooking</option>
                                <option>Paper Quilling & origami</option>
                                <option>Glass Painting</option>
                                <option>Lampworking</option>
                                <option>Glass Dying & Staining</option>
                            </select>
                            
                        </label>
                    </div>
                </div>
                {/* form supplier row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="rating" placeholder="Rating out of 5" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="short_Description" placeholder="Short Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">processing time</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="processing_time" placeholder="processing time" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* stock and customize row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="customization" placeholder="Yes or No" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Stock Status</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="stockStatus" placeholder="In Stock or Made to Order" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* User email and user name */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Email</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered w-full"
                                defaultValue={user.email}
                                readOnly
                            />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input
                                type="text"
                                name="userName"
                                placeholder="Name"
                                className="input input-bordered w-full"
                                defaultValue={user.displayName}
                                readOnly
                            />
                        </label>
                    </div>
                </div>

                {/* form Photo url row */}
                <div className="mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="ADD CRAFT" className=" bg-black text-white p-4  rounded-xl btn-block cursor-pointer" />

            </form>
        </div>
    );
};

export default AddCraft;