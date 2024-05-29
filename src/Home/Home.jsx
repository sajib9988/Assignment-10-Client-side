
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";

import Banner from "../Slider/Banner";



const Home = () => {
    const crafts = useLoaderData();
    return (
        <div className="mt-0">
         
            <Navbar></Navbar>
            <Banner></Banner>
            <div className="mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {crafts.slice(0,6).map(craft => (
                    <div key={craft._id} className="p-4 border rounded  shadow-sm ">
                        <img src={craft.image} alt={craft.item_name} className="w-full h-48 object-cover mb-4"/>
                        <h2 className="text-xl font-bold">{craft.item_name}</h2>
                        {/* <p className="text-gray-600">{craft.short_description}</p> */}
                        <p className="text-gray-800 font-bold">${craft.price}</p>
                      <div className="flex justify-between">
                      {/* <Link to={`/update/${craft._id}`}>
                            <button className="mt-2 bg-green-500 text-white py-2 px-4 rounded">
                                Update
                            </button>
                        </Link> */}
                      <div className="mt-auto flex justify-center">
                      <Link to={`/viewdetails/${craft._id}`}>
                            <button className="mt-2 ml-3   bg-blue-500 text-white py-2 px-4 rounded">
                                View Details
                            </button>
                        </Link>
                      </div>
                      </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;