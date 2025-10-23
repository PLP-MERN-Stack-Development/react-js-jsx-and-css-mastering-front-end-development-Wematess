import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Button from './Button';
import { Sun, Moon } from 'lucide-react'; 


const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const Icon = theme === 'dark' ? Sun : Moon;

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-10 transition duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400">
            ReactApp
          </Link>
          <div className="flex space-x-4 items-center">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-150">Home</Link>
            <Link to="/tasks" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-150">Tasks</Link>
            <Link to="/users" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition duration-150">Users</Link>
            
            
            <Button variant="secondary" onClick={toggleTheme} className="p-2 ml-4">
              <Icon size={20} />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;