import { useLoaderData } from "react-router-dom";
import Crafts from "./Crafts";
import Banner from "./Banner/Banner";



const Home = () => {

    const crafts = useLoaderData();
    const firstSixCrafts = crafts.slice(0, 6);
    return (
        <div>
            <div className="max-w-7xl mx-auto mt-10">
                <h2 className="text-4xl font-bold text-center">Explore Arts & Crafts</h2>
                <p className="text-center text-lg mt-10">Embark on a creative journey into the world of arts and crafts, where imagination knows no bounds.</p>
            </div>
            <div className="max-w-7xl mx-auto rounded-xl p-2 mt-5 shadow-xl">
                <Banner></Banner>
            </div>

            <div className="max-w-7xl mx-auto mt-10">
                <h2 className="text-4xl font-bold text-center">Craft Items</h2>
                <p className="text-center text-lg mt-10 px-52">Discover a world of creativity with our diverse collection of craft items, ranging from essentials to specialty supplies, perfect for unleashing your artistic potential</p>
            </div>
            <div className="max-w-7xl mx-auto mt-10 grid grid-cols-3 gap-4">
               {
                firstSixCrafts.map(craft => <Crafts key={craft._id} craft={craft}></Crafts>)
               }

            </div>
        </div>
    );
};

export default Home;