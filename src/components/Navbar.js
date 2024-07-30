import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black sticky top-0 z-250">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="inset-y-0 left-0 flex items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              E-commerce
            </Link>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block">
              <div className="ml-5 flex space-x-4 gap-5">
                <Link
                  to="/"
                  className="text-gray-300 nav-item py-2 rounded-md text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to="/Catalog"
                  className="text-gray-300 py-2 rounded-md text-sm font-medium nav-item"
                >
                  Catalog
                </Link>
                <Link
                  to="/News"
                  className="text-gray-300 nav-item py-2 rounded-md text-sm font-medium"
                >
                  News
                </Link>
                <Link
                  to="/About"
                  className="text-gray-300 nav-item py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Link
              to="/Login"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Login / Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
