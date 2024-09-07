import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 w-full">
      <div className="container mx-auto grid grid-cols-1 xxs:grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-5 gap-8 px-4">
        {/* Exclusive */}
        <div className="col-span-1">
          <h2 className="text-lg font-bold">Exclusive</h2>
          <p className="mt-4">Subscribe</p>
          <p>Get 10% off your first order</p>
          <form className="mt-4 flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white px-4 py-2 focus:outline-none flex-1 w-full"
            />
            <button
              type="submit"
              className="bg-white text-black px-4 py-2 hover:bg-gray-300"
            >
              ➔
            </button>
          </form>
        </div>

        {/* Support */}
        <div className="col-span-1">
          <h2 className="text-lg font-bold">Support</h2>
          <p className="mt-4">111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        {/* Account */}
        <div className="col-span-1">
          <h2 className="text-lg font-bold">Account</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:underline">My Account</a></li>
            <li><a href="#" className="hover:underline">Login / Register</a></li>
            <li><a href="#" className="hover:underline">Cart</a></li>
            <li><a href="#" className="hover:underline">Wishlist</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
          </ul>
        </div>

        {/* Quick Link */}
        <div className="col-span-1">
          <h2 className="text-lg font-bold">Quick Link</h2>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms Of Use</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Download App */}
        <div className="col-span-1">
          <h2 className="text-lg font-bold">Download App</h2>
          <p className="mt-4">Save $3 with App New User Only</p>
          <div className="mt-4 flex space-x-4">
            <a href="#" target="_blank">
              <img src="google-play-badge.png" alt="Google Play" />
            </a>
            <a href="#" target="_blank">
              <img src="app-store-badge.png" alt="App Store" />
            </a>
          </div>
          <div className="mt-4 flex space-x-4">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-gray-500 text-sm">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
