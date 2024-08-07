import { useLoaderData } from "react-router-dom";
import Crafts from "./Crafts";
import Banner from "./Banner/Banner";
import { useEffect, useState } from "react";
import SingleArt from "../SingleArt/SingleArt";
import Reviews from "./Reviews";
import Aos from "aos";
import 'aos/dist/aos.css'
import { Bounce, Fade, JackInTheBox, Slide } from "react-awesome-reveal";
import Works from "./Works";




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

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div>
            <div className="max-w-7xl mx-auto mt-10">
                <JackInTheBox triggerOnce>
                    <h2 className="text-4xl font-bold text-center ">Explore Arts & Crafts</h2>
                    <p className="text-center text-lg mt-10 px-5 lg:px-52">Explore your favourite arts and crafts categories and get yourself a inspiration to go beyond about artisticts</p>
                </JackInTheBox>
            </div>
            {/* banner section */}
            <div className="max-w-7xl mx-auto rounded-xl p-2 mt-5 shadow-xl">
                <Banner></Banner>
            </div>

            <div className="max-w-7xl mx-auto mt-10 px-5">
                <Slide triggerOnce>
                    <h2 className="text-4xl font-bold text-center">Crafted Items</h2>
                </Slide>

                <p className="text-center text-lg mt-10 lg:px-52">Discover a world of creativity with our diverse collection of craft and art items, ranging from essentials to specialty supplies, perfect for unleashing your artistic potential</p>

            </div>
            {/* crafts section */}
            <div className="max-w-7xl mx-auto md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5 " data-aos="zoom-in">
                {
                    firstSixCrafts.map(craft => <Crafts key={craft._id} craft={craft}></Crafts>)
                }

            </div>

            <div className="max-w-7xl mx-auto mt-10 px-5">
                <Slide triggerOnce>
                    <h2 className="text-4xl font-bold text-center">Our Works</h2>
                </Slide>

                <p className="text-center text-lg mt-10 lg:px-52">
                    Explore the Essence of Our Creations: A Diverse Showcase Reflecting Creativity, Craftsmanship, and Artistic Expression.</p>

            </div>


            {/* our works */}
            <div className="max-w-7xl mx-auto mt-10">
                <Works></Works>
            </div>

            <div className="max-w-7xl mx-auto mt-10 px-5">
                <Bounce triggerOnce>
                    <h2 className="text-4xl font-bold text-center">What Our Customer Says</h2>
                </Bounce>

            </div>

            {/* reviews section */}
            <div className="max-w-7xl mx-auto rounded-xl p-2 mt-5">
                <Reviews></Reviews>
            </div>

            <div className="max-w-7xl mx-auto mt-10">
                <Fade triggerOnce>
                    <h2 className="text-4xl font-bold text-center">Art & Craft Categories</h2>
                </Fade>
                <p className="text-center text-lg mt-10 lg:px-52">
                    Explore an Array of Artistic Genres and Craft Categories, Each Offering a Unique Canvas for Your Creative Expression and Exploration.</p>
            </div>
            {/* categories section */}
            <Slide triggerOnce>
                <div className="max-w-7xl mx-auto my-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
                    {
                        arts.map(art => <SingleArt key={art._id} art={art}></SingleArt>)
                    }
                </div>
            </Slide>
        </div>
    );
};

export default Home;