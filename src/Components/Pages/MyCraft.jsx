import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Navbar from "../../Shared/Navbar";
import { IoIosArrowDown } from "react-icons/io";
import Swal from 'sweetalert2';

const MyCraft = () => {
  const { user } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('All');
  const [control, setControl] = useState(false);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/mycrafts/${user.email}`)
        .then((res) => res.json())
        .then((data) => setItems(data))
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [user, control]);

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/delete/${id}`, { method: 'DELETE' })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your item has been deleted.',
                'success'
              );
              setControl(!control);
            } else {
              Swal.fire(
                'Failed!',
                'Failed to delete the item.',
                'error'
              );
            }
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire(
              'Error!',
              'Error deleting item.',
              'error'
            );
          });
      }
    });
  };

  const handleFilter = (filterValue) => {
    setFilter(filterValue);
  };

  const filteredItems = filter === 'All' ? items : items.filter((item) => {
    // Assuming `stockStatus` is the property representing stock status
    return item.stockStatus.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="container mx-auto pt-10">
      <Navbar />
      <div className="flex justify-center item-center m-4">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn m-1 bg-[#23BE0A] hover:bg-[#22be0ac5] text-white w-52">
            Filter By <IoIosArrowDown className="text-2xl" />
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
            <li onClick={() => handleFilter('All')}><Link to="#">All</Link></li>
            <li onClick={() => handleFilter('In stock')}><Link to="#">In Stock</Link></li>
            <li onClick={() => handleFilter('Made to Order')}><Link to="#">Made to Order</Link></li>
          </ul>
        </div>
      </div>
      {filteredItems.length === 0 ? (
        <h1 className="flex justify-center items-center text-4xl font-bold mt-10">No products found.</h1>
      ) : (
        <div className="container mx-auto">
          <div className="mx-3 p-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 border rounded shadow-sm">
            {filteredItems.map((craft) => (
              <div key={craft._id} className="p-4 border rounded shadow-sm flex flex-col">
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
