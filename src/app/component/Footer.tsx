function Footer () {
    return (
        <>
      <footer className="mt-12 border-t-4 border-purple-200 py-8">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-3">Funiro.</h2>
              <p className="text-gray-500 text-sm leading-relaxed py-8">
                400 University Drive Suite 200 Coral Gables,
                <br /> FL 33134 USA
              </p>
            </div>

          
  
            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-400 mb-2">Links</h3>
              <ul className="text-black space-y-6 py-8">
                <li><a href="#" className="hover:text-purple-400">Home</a></li>
                <li><a href="#" className="hover:text-purple-400">Shop</a></li>
                <li><a href="#" className="hover:text-purple-400">About</a></li>
                <li><a href="#" className="hover:text-purple-400">Contact</a></li>
              </ul>
            </div>
  
            {/* Help */}
            <div>
              <h3 className="text-lg font-semibold text-gray-400 mb-2">Help</h3>
              <ul className="text-black space-y-6 py-8">
                <li><a href="#" className="hover:text-purple-400">Payment Options</a></li>
                <li><a href="#" className="hover:text-purple-400">Returns</a></li>
                <li><a href="#" className="hover:text-purple-400">Privacy Policies</a></li>
              </ul>
            </div>
  
            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-400 mb-2">Newsletter</h3>
              <div className="flex flex-col gap-3 py-8">
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-purple-300"
                />
                <button className="bg-gray-300 text-black py-2 px-4 rounded-md hover:bg-gray-500 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="text-center text-sm text-black mt-8">
            <p>2023 Funiro. All rights reserved</p>
          </div>
        </div>
      </footer>
      </>
    );
  };
  
  export default Footer;
  