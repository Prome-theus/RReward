"use client"
import { get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { database , db } from "../firebase";
import { collection, getDocs , query, where } from "firebase/firestore";


export default function review() {
  const [reviews, setreview] = useState([]);
  useEffect(() => {
    const fetchReview = async () => {
      try {
        const temp=[]
        const querySnapshot = await getDocs(collection(db, "reviews"));
        querySnapshot.forEach((doc) => {
          temp.push(doc.data());
          console.log(doc.id, " => ", doc.data());
        });
        setreview(temp)
      } catch (error) {
        console.error("Error fetching reviews :", error);
      }
    }
    fetchReview();
  }, []);
  return (
    <div>
      <title>My Review</title>

      <p className="text-center font-bold text-6xl py-10 text-amber-600 font-mono">
        My Reviews
      </p>

      <main className="container mx-auto py-10 px-8 ">
        <div className="grid lg:grid-cols-3 gap-10 md:grid-cols-2 grid-col-1">
          {reviews.map((review) => (
            <div key={review.id} className="shadow-lg rounded-lg">
              <img className="rounded-t-lg" src={review.img} alt="" />
              <div className="p-5">
                <h3 className="text-3xl font-bold text-amber-600 mb-3">
                  {review.title}
                </h3>
                <p className="text-lg font-normal text-stone-950 ">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

