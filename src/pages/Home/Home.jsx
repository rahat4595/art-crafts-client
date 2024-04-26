import { useLoaderData } from "react-router-dom";
import Crafts from "./Crafts";



const Home = () => {

    const crafts = useLoaderData();
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-5">
                <h2 className="text-4xl font-bold text-center">Craft Items</h2>
                <p className="text-center text-lg mt-5">Discover a world of creativity with our diverse collection of craft items, ranging from essentials to specialty supplies, perfect for unleashing your artistic potential</p>
            </div>
            <div className="max-w-7xl mx-auto mt-5 grid grid-cols-3 gap-4">
               {
                crafts.map(craft => <Crafts key={craft._id} craft={craft}></Crafts>)
               }

            </div>
        </div>
    );
};

export default Home;