import { useLoaderData } from "react-router-dom";
import 'animate.css';


const CraftDetails  = () => {
const craft = useLoaderData();
const { _id, item_name, subcategory_Name, price, rating, short_Description, processing_time, customization, stockStatus, userName, email, photo } = craft
   
    return (
        <div>
            <div className="hero my-20 animate__animated animate__zoomIn">
                <div className="hero-content flex-col gap-10 md:gap-28 lg:flex-row">
                    <img src={photo}className=" rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{item_name}</h1>
                        <p className="py-6">{short_Description}</p>
                        <p className='mb-2 text-xl text-black'><b>Sub Category:</b> {subcategory_Name}</p>
                        <h1 className='text-xl text-black font-bold'>Processing Time: {processing_time}</h1>
                       
                        <div className='flex gap-10 mt-4'>
                            <b className='lg:text-xl'>Rating: {rating}</b><b className='lg:text-xl'>Price: ${price}</b>
                        </div>
                        <div className='flex gap-10 mt-4'>
                            <b className='lg:text-xl'>Customizaton: {customization}</b><b className='lg:text-xl'>Status: {stockStatus}</b>
                        </div>
                    </div>
                    
                </div>
            </div>
    </div>
    );
};

export default CraftDetails;