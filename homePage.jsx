import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 text-center">
      <Card className="mt-16 bg-blue-50 dark:bg-gray-700 p-10">
        <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Welcome to the React Task App
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          A fully functional application built with React, Vite, and Tailwind CSS.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/tasks">
            <Button variant="primary" className="text-lg">
              Go to Task Manager
            </Button>
          </Link>
          <Link to="/users">
            <Button variant="secondary" className="text-lg">
              View API Data
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default HomePage;