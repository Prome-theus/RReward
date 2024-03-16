"use client";
import React, { useState } from "react";
import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";
// import firebase from "./firebase"; 

// const db = getFirestore(firebase_app)

// export default async function addData(colllection, id, data) {
//   let result = null;
//   let error = null;

//   try {
//       result = await setDoc(doc(db, colllection, id), data, {
//           merge: true,
//       });
//   } catch (e) {
//       error = e;
//   }

//   return { result, error };
// }


const PostReview = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("Select");
  const [purchaseDate, setPurchaseDate] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [productReview, setProductReview] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const datetime = new Date().toISOString();

    const postRef = firebase.database().ref("posts").push();
    const postData = {
      productName,
      category,
      purchaseDate,
      purchasePrice,
      productReview,
      datetime,
      images: images.map((image) => image.name),
    };

    try {
      await postRef.set(postData);
      alert("Review posted successfully!");
      // Reset form fields after successful submission
      setProductName("");
      setCategory("Select");
      setPurchaseDate("");
      setPurchasePrice("");
      setProductReview("");
      setImages([]);
    } catch (error) {
      console.error("Error posting review:", error);
      alert("An error occurred while posting the review.");
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };

  return (
    <div>
      <h2 className="font-bold text-3xl bg-gray-900 text-center pt-10 pb-5 text-white">
        Product Review
      </h2>
      <div className="bg-gray-900 flex items-center justify-center">
        <form
          className="bg-white shadow-md rounded px-8 pt-5 pb-8 mb-6 w-11/12"
          onSubmit={handleSubmit}
        >
          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Product Name"
            >
              Product Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="proname"
              type="text"
              placeholder="Product Name"
            />
          </div>

          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-center"
            htmlFor="Product Category"
          >
            Product Category
          </label>

          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option selected value="Smartphone">Smartphone</option>
            <option value="Laptops">Laptops</option>
            <option  value="Smartwatches">
              Smartwatches
            </option>
            <option value="Headphones">Headphones</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Computer Pheriperal">Computer Pheriperal</option>
          </select>
          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Purchase Date"
            >
              Purchase Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="purdate"
              type="date"
            />
          </div>
          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Purchased Price"
            >
              Purchased Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="proreview"
              type="number"
              placeholder="Purchased Price"
            />
          </div>
          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Product Review"
            >
              Product Review
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="proreview"
              placeholder="Product Review"
            />
          </div>

          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Product Image"
            >
              Product Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="proreview"
              type="file"
              multiple
              placeholder="Choose Image"
            />
          </div>

          {/* Submit button */}
          <div className="md:col-span-5 text-center">
            <button
              className="bg-blue-500 text-white rounded-md p-2 text-sm text-center m-2"
              type="submit"
            >
              Post Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostReview;
