import React, { useState } from 'react';

const DeleteItemComponent: React.FC = () => {
  const [itemId, setItemId] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    if (!itemId) {
      setError('Please enter an item ID');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccessMessage(null);

    try {
      const response = await fetch(`https://app.nginnovators.am/api/auth/delete-user/${itemId}`, {
        method: 'DELETE', // DELETE մեթոդը
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSuccessMessage(data.message);
        console.log(data);
        
        setItemId(''); 
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Failed to delete item');
      }
    } catch (err) {
      setError('Failed to delete item');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Delete Item</h1>
        
        <input
          type="text"
          value={itemId}
          onChange={(e) => setItemId(e.target.value)}
          placeholder="Enter Item ID"
          className="w-full px-3 py-2 mb-4 border rounded-lg focus:outline-none focus:border-blue-500"
        />
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}
        
        <button
          onClick={handleDelete}
          disabled={loading}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors"
        >
          {loading ? 'Deleting...' : 'Delete Item'}
        </button>
      </div>
    </div>
  );
};

export default DeleteItemComponent;
