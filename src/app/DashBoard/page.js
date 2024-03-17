// pages/Dashboard.js
"use client"
import { useState } from 'react';
import ReviewCard from '@/src/components/ReviewReward';
import Sidebar from '@/src/components/SideBar';
import { UserAuth } from '../context/AuthContext';
const Dashboard = () => {
  // Sample user data
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    image: "https://via.placeholder.com/300", // Larger image size
    reviewPoints: 500 // Assuming the user's review points
  });

  // Sample review data
  const [userReviews] = useState([
    {
      id: 1,
      title: "Amazing Product",
      rating: 5,
      content: "This product exceeded my expectations. It's high quality and works perfectly.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Great Service",
      rating: 4,
      content: "I had a great experience with the customer service. They were very helpful and responsive.",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      title: "Disappointing Experience",
      rating: 2,
      content: "Unfortunately, this product didn't meet my expectations. It had several issues and defects.",
      image: "https://via.placeholder.com/150"
    }
  ]);

  return (
    <div className="flex">
      <Sidebar user={user} />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center mb-8">
          <img src={user.image} alt={user.name} className="w-48 h-48 rounded-full mb-4" /> {/* Larger image and centered */}
          <h1 className="text-3xl font-semibold">{user.name}</h1>
          <p className="text-gray-600 mb-2">{user.email}</p> {/* Display email below name */}
          <p className="text-gray-600">Review Points: {user.reviewPoints}</p>
        </div>
        <h1 className="text-3xl font-semibold mb-4">Your Reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {userReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
