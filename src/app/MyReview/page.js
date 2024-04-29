"use client"
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import ReviewCard from "@/src/components/ReviewCard";


export default function Review() {
  const [reviews, setReviews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 12;

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsData = [];
        const querySnapshot = await getDocs(collection(db, "reviews"));
        querySnapshot.forEach((doc) => {
          reviewsData.push({ docId: doc.id, ...doc.data() });
        });
        setReviews(reviewsData);
      } catch (error){
        console.error("Error fetching reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div>
      <title>My Review</title>
      <p className="text-center font-bold text-6xl py-10 text-amber-600 font-mono">
        My Reviews
      </p>
      <main className="container mx-auto py-10 px-8">
        <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-col-1">
        {reviews.map((reviewData, index) => (
                <ReviewCard key={index} review={reviewData} />
              ))}
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Previous
          </button>
          <button
            onClick={nextPage}
            disabled={currentReviews.length < reviewsPerPage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
}
