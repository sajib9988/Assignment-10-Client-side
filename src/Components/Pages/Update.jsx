import { useLoaderData, useNavigate } from "react-router-dom";
import Navbar from "../../Shared/Navbar";

const Update = () => {
  const craft = useLoaderData();
  const navigate = useNavigate();
  console.log(craft);
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedItem = {
      item_name: form.name.value,
      subcategory_Name: form.subcategory.value,
      short_description: form.description.value,
      price: form.price.value,
      rating: form.rating.value,
      image: form.image.value,
      customization: form.customization.value,
      processingTime: form.processingTime.value,
      stockStatus: form.stockStatus.value,
    };

    try {
      const res = await fetch(`http://localhost:5000/crafts/${craft._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedItem),
      });

      if (!res.ok) throw new Error('Failed to update craft item');
      
      const data = await res.json();
      alert('Item Updated Successfully');
      navigate('/allartcraft');
    } catch (error) {
      console.error('Error updating item:', error);
      alert('Failed to update item');
    }
  };

  return (
    <div className='container mx-auto'>
      <Navbar />
      <div className="bg-white p-6 mx-auto w-full mt-9 rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Update Craft Item</h1>
        <form onSubmit={handleUpdate}>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <input type="text" name="name" placeholder="Item Name" defaultValue={craft.item_name} className="w-full p-2 border border-gray-300 rounded mb-4" required />
              <input type="text" name="subcategory" placeholder="Subcategory" defaultValue={craft.subcategory_Name} className="w-full p-2 border border-gray-300 rounded mb-4" required />
              <textarea name="description" placeholder="Description" defaultValue={craft.short_description} className="w-full p-2 border border-gray-300 rounded mb-4" required />
              <input type="number" name="price" placeholder="Price" defaultValue={craft.price} className="w-full p-2 border border-gray-300 rounded mb-4" required />
            </div>
            <div>
              <input type="number" name="rating" placeholder="Rating" defaultValue={craft.rating} className="w-full p-2 border border-gray-300 rounded mb-4" required />
              <input type="text" name="customization" placeholder="Customization" defaultValue={craft.customization} className="w-full p-2 border border-gray-300 rounded mb-4" required />
              <input type="text" name="processingTime" placeholder="Processing Time" defaultValue={craft.processingTime} className="w-full p-2 border border-gray-300 rounded mb-4" required />
              <input type="text" name="stockStatus" placeholder="Stock Status" defaultValue={craft.stockStatus} className="w-full p-2 border border-gray-300 rounded mb-4" required />
              <input type="text" name="image" placeholder="Image URL" defaultValue={craft.image} className="w-full p-2 border border-gray-300 rounded mb-4" required />
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Update Item</button>
        </form>
      </div>
    </div>
  );
};

export default Update;
