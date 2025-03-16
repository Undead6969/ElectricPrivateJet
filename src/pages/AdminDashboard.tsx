import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Bookings</h2>
          <p className="text-3xl font-bold text-blue-600">24</p>
          <p className="text-sm text-gray-500">Active bookings</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Revenue</h2>
          <p className="text-3xl font-bold text-green-600">$128,500</p>
          <p className="text-sm text-gray-500">This month</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Aircraft</h2>
          <p className="text-3xl font-bold text-purple-600">12</p>
          <p className="text-sm text-gray-500">Available jets</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Members</h2>
          <p className="text-3xl font-bold text-orange-600">156</p>
          <p className="text-sm text-gray-500">Active members</p>
        </div>
      </div>
      
      <div className="mt-8 p-6 border rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-4 bg-gray-50 rounded-lg">
              <p className="font-medium">New booking request</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
