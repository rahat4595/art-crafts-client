import { useLoaderData } from "react-router-dom";
import Crafts from "./Crafts";
import Banner from "./Banner/Banner";
import { useEffect, useState } from "react";
import SingleArt from "../SingleArt/SingleArt";



const Home = () => {
    const [arts, setArts] = useState([]);
    const crafts = useLoaderData();
    const firstSixCrafts = crafts.slice(0, 6);

    useEffect(() => {
        fetch('https://arts-design-server.vercel.app/arts')
            .then(res => res.json())
            .then(data => {
                setArts(data)
            })
    }, [])

    console.log(arts)

    return (
        <div>
            <div className="max-w-7xl mx-auto mt-10">
                <h2 className="text-4xl font-bold text-center">Explore Arts & Crafts</h2>
                <p className="text-center text-lg mt-10">
                    Discover the beauty of handmade craftsmanship with our curated selection of unique and inspiring creations.</p>
            </div>
            <div className="max-w-7xl mx-auto rounded-xl p-2 mt-5 shadow-xl">
                <Banner></Banner>
            </div>

            <div className="max-w-7xl mx-auto mt-10">
                <h2 className="text-4xl font-bold text-center">Craft Items</h2>
                <p className="text-center text-lg mt-10 lg:px-52">Discover a world of creativity with our diverse collection of craft items, ranging from essentials to specialty supplies, perfect for unleashing your artistic potential</p>
            </div>
            <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {
                    firstSixCrafts.map(craft => <Crafts key={craft._id} craft={craft}></Crafts>)
                }

            </div>
            <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                {
                    arts.map(art => <SingleArt key={art._id} art={art}></SingleArt> )
                }
            </div>
        </div>
    );
};

export default Home;