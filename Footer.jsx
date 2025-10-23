import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 mt-10 transition duration-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              ReactApp
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                <li><Link to="/tasks" className="hover:text-blue-600 transition">Tasks</Link></li>
                <li><Link to="/users" className="hover:text-blue-600 transition">Users</Link></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-600 transition">Terms & Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
        <div className="text-center">
          <span className="text-sm text-gray-500 dark:text-gray-400">© {new Date().getFullYear()} React Task App. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;