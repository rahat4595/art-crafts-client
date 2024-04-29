import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "../../ItemDetails/ItemDetails";


const CategoryItem = () => {
    const { subcategory_Name } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://arts-design-server.vercel.app/crafts/arts/${subcategory_Name}`)
                const data = await response.json();
                console.log(data);
                setItems(data)
                setLoading(false)
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchData();
    }, [subcategory_Name]);

    if (loading) {
        return <h1 className="w-16 h-16 border-4 max-w-7xl mx-auto my-56 duration-1000 border-dashed rounded-full animate-spin border-violet-600"></h1>
    }


    return (
        <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            {
                items.map(item => <ItemDetails key={item._id} item={item}></ItemDetails>)
            }
        </div>
    );
};

export default CategoryItem;