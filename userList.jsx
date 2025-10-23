import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Card from './Card';
import { Search, Loader2 } from 'lucide-react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchUsers = useCallback(async (pageNumber) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?_limit=4&_page=${pageNumber}`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const newUsers = await response.json();
      
      setUsers(prevUsers => pageNumber === 1 ? newUsers : [...prevUsers, ...newUsers]);
      setHasMore(newUsers.length > 0);
      setPage(pageNumber);

    } catch (e) {
      setError("Failed to fetch data. Please try again.");
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsers(1);
  }, [fetchUsers]);

  const filteredUsers = useMemo(() => {
    if (!searchTerm) return users;
    const lowerCaseSearch = searchTerm.toLowerCase();
    return users.filter(user => 
      user.name.toLowerCase().includes(lowerCaseSearch) || 
      user.email.toLowerCase().includes(lowerCaseSearch)
    );
  }, [users, searchTerm]);

 
  if (error) {
    return (
      <div className="text-center p-8 text-red-600 dark:text-red-400">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">API Data (JSONPlaceholder Users)</h2>
      
     
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search users by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white transition duration-300"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredUsers.map(user => (
          <Card key={user.id} className="transform transition-transform duration-300 hover:scale-[1.05] shadow-md">
            <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2 truncate">{user.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">{user.email}</p>
            <p className="text-gray-500 dark:text-gray-400 text-xs italic">{user.phone.split(' ')[0]}</p>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        {loading && page > 1 ? ( // Show loading spinner only for subsequent pages
          <Loader2 className="animate-spin text-blue-500" size={30} />
        ) : (
          hasMore && !loading && (
            <Button onClick={() => fetchUsers(page + 1)} disabled={loading}>
              Load More Users
            </Button>
          )
        )}
      </div>
      
     
      {loading && page === 1 && (
        <div className="text-center p-8">
            <Loader2 className="animate-spin text-blue-500 mx-auto" size={40} />
            <p className="text-gray-500 dark:text-gray-400 mt-2">Loading...</p>
        </div>
      )}
      
      
      {!loading && filteredUsers.length === 0 && searchTerm && (
        <p className="text-center text-gray-500 dark:text-gray-400 mt-8">
          No users found matching your search.
        </p>
      )}
    </div>
  );
};

export default UserList;