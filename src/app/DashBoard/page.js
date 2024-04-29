"use client"
import { useEffect, useState } from 'react';
import ReviewCard from '@/src/components/ReviewCard';
import Sidebar from '@/src/components/SideBar';
import { UserAuth } from '../context/AuthContext';
import { collection, addDoc, query, where } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "../firebase";
import { getDocs, doc, updateDoc } from "firebase/firestore";

const Dashboard = () => {
  
  const { user } = UserAuth(); // Access user object from the context
  const [review, setReview] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [reviewsPerPage] = useState(9);

  useEffect(() => {
    const fetchReviews = async () => {
      if (user) {
        const userEmail = user.email;
        const temp = [];
        const q = query(collection(db, "reviews"), where("userEmail", "==", userEmail));

        const querySnapshot = await getDocs(q);
        console.log("Number of documents retrieved:", querySnapshot.size);
        
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          temp.push(doc.data());
        });

        console.log("Temp array:", temp);

        setReview(temp);
        console.log(review);
      }
    };

    fetchReviews();
  }, [user]);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = review.slice(indexOfFirstReview, indexOfLastReview);

  const paginate = (pageNumber, event) => {
    event.preventDefault();
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <div className="text-white flex">
      <div className="container mx-auto px-4 py-8">
        {user && (
          <div>
            <div className="flex flex-col items-center mb-8">
              <img src={user?.photoURL} alt={user.displayName} className="w-48 h-48 rounded-full mb-4" style={{objectFit: "cover"}} />
              <h1 className="text-3xl font-semibold">{user.displayName}</h1>
              <p className=" mb-2">{user.email}</p>
              {user.reviewPoints && <p className="text-gray-600">Review Points: {user.reviewPoints}</p>}
            </div>
            <h1 className="text-3xl font-semibold mb-4">Your Reviews</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {currentReviews.map((reviewData, index) => (
                <ReviewCard key={index} review={reviewData} />
              ))}
            </div>
            <div className="mt-4 flex justify-center">
              <nav className="block">
                <ul className="flex pl-0 rounded list-none flex-wrap">
                  {Array.from({ length: Math.ceil(review.length / reviewsPerPage) }, (_, i) => (
                    <li key={i}>
                      <button
                        onClick={(e) => paginate(i + 1, e)}
                        className={`bg-blue-500 text-white hover:bg-blue-700 font-semibold py-2 px-4 rounded mx-1 ${
                          currentPage === i + 1 ? 'bg-blue-700' : ''
                        }`}
                      >
                        {i + 1}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        )}
      </div>
      <Sidebar user={user} />
    </div>
  );
};

export default Dashboard;
