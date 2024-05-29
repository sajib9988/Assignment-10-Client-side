import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../../Shared/Navbar";

const MyCraft = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  
  const [control, setControl] = useState(false)
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/mycrafts/${user.email}`)
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [user, control]);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete/${id}`, { method: 'DELETE' })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert('Item deleted successfully');
          setControl(!control);
        } else {
          alert('Failed to delete item');
        }
      })
      .catch((error) => {
        console.error("Error deleting item:", error);
        alert('Error deleting item');
      });
  };

  return (
    <div className="Container mx-auto pt-10">
      <Navbar />
      {items.length === 0 ? (
        <h1 className="flex justify-center items-center text-4xl font-bold mt-10">No products found.</h1>
      ) : (
        <div className="container mx-auto">
          <div className="mx-3 p-3  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border rounded shadow-sm">
            {items.map((craft) => (
              <div key={craft._id} className="p-4 border rounded shadow-sm flex  flex-col">
                <img src={craft.image} alt={craft.item_name} className="w-full h-48 object-cover mb-4" />
                <h2 className="text-xl font-bold">{craft.item_name}</h2>
                <p className="text-gray-800 font-bold">${craft.price}</p>
                <div className="mt-auto flex justify-between">
                  <Link to={`/update/${craft._id}`}>
                    <button className="mt-2 bg-green-500 text-white py-2 px-4 rounded">Update</button>
                  </Link>
                  <Link to={`/viewdetails/${craft._id}`}>
                    <button className="mt-2 ml-3 bg-blue-500 text-white py-2 px-4 rounded">View Details</button>
                  </Link>
                  <button onClick={() => handleDelete(craft._id)} className="mt-2 ml-3 bg-red-500 text-white py-2 px-4 rounded">Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyCraft;

