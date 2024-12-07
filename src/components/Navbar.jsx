import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">My Store</div>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:text-yellow-300">
              Home
            </a>
          </li>
          <li>
            <a href="/products" className="hover:text-yellow-300">
              Products
            </a>
          </li>
          <li>
            <a href="/about" className="hover:text-yellow-300">
              About
            </a>
          </li>
          <li>
            <a href="/contact" className="hover:text-yellow-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
