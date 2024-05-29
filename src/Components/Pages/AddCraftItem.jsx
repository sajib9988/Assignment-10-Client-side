import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Navbar from '../../Shared/Navbar';

const AddCraftItem = () => {

  const {user}= useContext(AuthContext)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const subcategory = form.subcategory.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const image = form.image.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;
    
    const newItem = {
      name,
      subcategory,
      description,
      price,
      rating,
      image,
      customization,
      processingTime,
      stockStatus,
      email: user.email
    };
    
    // For debugging
    console.log(newItem);

    fetch('http://localhost:5000/crafts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newItem)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if (data.success) {
        alert('Item added successfully!');
        form.reset(); // Reset the form after successful submission
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred while adding the item.');
    });
  };

  return (
    <div className='container mx-auto'>
      <Navbar />
      <div className="bg-white p-6 mx-auto w-full mt-9 rounded shadow-md">
        <h1 className="text-2xl font-bold text-center mb-4">Add Craft Item</h1>
        <form onSubmit={handleSubmit}>
          <div className='w-full grid grid-cols-2 gap-6'>
            <div>
              <input
                type="text"
                name="name"
                placeholder="Item Name"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <input
                type="text"
                name="subcategory"
                placeholder="Subcategory"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <textarea
                name="description"
                placeholder="Description"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <input
                type="number"
                name="price"
                placeholder="Price"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
            </div>
            <div>
              <input
                type="number"
                name="rating"
                placeholder="Rating"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <input
                type="text"
                name="customization"
                placeholder="Customization"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <input
                type="text"
                name="processingTime"
                placeholder="Processing Time"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <input
                type="text"
                name="stockStatus"
                placeholder="Stock Status"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                className="w-full p-2 border border-gray-300 rounded mb-4"
                required
              />
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Add Item</button>
        </form>
      </div>
    </div>
  );
};

export default AddCraftItem;
