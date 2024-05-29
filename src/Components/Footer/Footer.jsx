import { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send email to backend)
        console.log('Email submitted:', email);
        // You can add your logic to send the email to your backend here
        // Reset the email state after submission
        setEmail('');
    };

    return (
        <div>
            <footer className="bg-gray-900 mx-2 rounded-lg mt-6 mb-2 shadow-lg text-white py-8 z-auto bottom-0 left-0 right-0">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between">
                        <div>
                            <h4 className="text-lg font-bold">Art & Craft Store</h4>
                            <p>&copy; 2024 Art & Craft Store. All rights reserved.</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold">Contact Us</h4>
                            <p>Email: info@artcraftstore.com</p>
                            <p>Phone: +1 (234) 567-890</p>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold">Follow Us</h4>
                            <div className="flex space-x-4">
                                <a href="https://facebook.com" className="text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">Facebook</a>
                                <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">Twitter</a>
                                <a href="https://instagram.com" className="text-pink-500 hover:text-pink-700" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </div>
                        </div>
                    </div>
                    {/* Email Subscription Form */}
                   <div className='flex justify-center mt-3'>
                   <form onSubmit={handleSubmit} className="mt-6">
                        <label htmlFor="email" className="block text-white mt-2">Subscribe to our newsletter:</label>
                        <div className="flex">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Your email"
                                className="bg-gray-800 text-white border border-gray-700 rounded-l  px-4 py-2 focus:outline-none"
                            />
                            <button type="submit" className="bg-green-700 hover:bg-blue-600 text-white px-4 py-2 rounded-r">Subscribe</button>
                        </div>
                    </form>
                   </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
