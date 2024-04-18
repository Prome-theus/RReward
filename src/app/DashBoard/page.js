"use client"
import { useEffect } from 'react';
import ReviewCard from '@/src/components/ReviewReward';
import Sidebar from '@/src/components/SideBar';
import { UserAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { user } = UserAuth(); // Access user object from the context

  useEffect(() => {
    // You can fetch user data here if needed
    // Example: Fetch user data from an API using user.uid
  }, [user]);

  return (
    <div className="text-white flex">
      <Sidebar user={user} />
      <div className="container mx-auto px-4 py-8">
        {user && ( // Render only if user is available
          <div>
            <div className="flex flex-col items-center mb-8">
              <img src={user?.photoURL} alt={user.displayName} className="w-48 h-48 rounded-full mb-4" />
              <h1 className="text-3xl font-semibold">{user.displayName}</h1>
              <p className=" mb-2">{user.email}</p>
              {/* Display user's review points if available */}
              {user.reviewPoints && <p className="text-gray-600">Review Points: {user.reviewPoints}</p>}
            </div>
            <h1 className="text-3xl font-semibold mb-4">Your Reviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Render review cards */}
              {/* You can use real userReviews if available */}
              {/* For now, using sample userReviews */}
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
