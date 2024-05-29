const Footer = () => {
    return (
        <div>
          <footer className="bg-gray-900 mx-2 rounded-lg mt-6 mb-2 shadow-lg text-white py-8  z-auto bottom-0 left-0 right-0">
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
            </div>
          </footer>
        </div>
    );
};

export default Footer;
