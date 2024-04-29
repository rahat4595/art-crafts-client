import { Link } from "react-router-dom";


const SingleArt = ({art}) => {
    const {photo,name,description} = art || {}
    return (
       <Link to={`/arts/${name}`}>
        <div className="">
            <div className="card w-full bg-base-100 shadow-xl">
            <figure><img className="duration-300 hover:scale-105" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">
                    {name}
                </h2>
                <p>{description}</p>
                
               
                <div className="card-actions justify-start">
                
                </div>
            </div>
        </div>
        </div>
       </Link>
    );
};

export default SingleArt;