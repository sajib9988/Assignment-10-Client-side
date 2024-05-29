
import { useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar";

const ViewDetails = () => {
    const craft = useLoaderData();
    console.log(craft)

    return (
        <div className="container mx-auto">
            <Navbar />
            <div className="bg-white p-6 mx-auto mt-9 rounded shadow-md border">
                <h1 className="text-2xl font-bold text-center mb-4">Craft Details</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <img src={craft.image} alt={craft.item_name} className="w-full h-auto mb-4 rounded" />
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-2">{craft.item_name}</h2>
                        <p className="text-gray-600 mb-4">{craft.short_description}</p>
                        <p className="text-gray-800 font-bold mb-2">Price: ${craft.price}</p>
                        <p className="text-gray-800 font-bold mb-2">Rating: {craft.rating}</p>
                        <p className="text-gray-800 font-bold mb-2">Customization: {craft.customization}</p>
                        <p className="text-gray-800 font-bold mb-2">Processing Time: {craft.processingTime}</p>
                        <p className="text-gray-800 font-bold mb-2">Stock Status: {craft.stockStatus}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
