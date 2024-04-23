"use client";
import React, { useState, useContext, useEffect } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc, query, where } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { UserAuth } from "../context/AuthContext";

import { getDocs, doc, updateDoc } from "firebase/firestore";

async function addDataToFireStore(
  productname,
  category,
  brand,
  purchaseDate,
  purchasePrice,
  productReview,
  images,
  userEmail,
) {
  try {
    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const storageRef = ref(storage, "images/" + image.name);
        await uploadBytes(storageRef, image);
        return getDownloadURL(storageRef);
      })
    );

    const docRef = await addDoc(collection(db, "reviews"), {
      productname: productname,
      category: category,
      brand: brand,
      purchaseDate: purchaseDate,
      purchasePrice: purchasePrice,
      productReview: productReview,
      images: imageUrls,
      userEmail: userEmail,
      reviewPoint: 100,
    });


    console.log("Document written with ID :", docRef.id);
    return true;
  } catch (error) {
    console.error("error addding document", error);
    return false;
  }
}

const PostReview = () => {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("")
  const [purchaseDate, setPurchaseDate] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [productReview, setProductReview] = useState("");
  const [images, setImages] = useState([]);
  const { user } = UserAuth();
  const [userData, setUserData] = useState([])

  const brandOptions = {
    Smartphone: ["APPLE", "SAMSUNG", "ONEPLUS", "REALME", "OPPO", "VIVO", "REDMI", "HONOR"],
    Laptops: ["ASUS/ROG", "HP", "ACER", "MSI", "SAMSUNG", "DELL"],
    Smartwatches: ["BOAT", "APPLE", "AMAZEFIT", "SAMSUNG", "ONEPLUS", "HAMMER"],
    Headphones: ["Brand10", "Brand11", "Brand12"],
    "Home Appliances": ["Brand13", "Brand14", "Brand15"],
    "Computer Peripheral": ["Brand16", "Brand17", "Brand18"],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = user.email;

    const added = await addDataToFireStore(
      productName,
      category,
      brand,
      purchaseDate,
      purchasePrice,
      productReview,
      images,
      userEmail
    );
    if (added) {
      setProductName("");
      setCategory("");
      setBrand("")
      setPurchaseDate("");
      setPurchasePrice("");
      setProductReview("");
      setImages([]);

      alert("Data added to firestore DB!!");
      const q = query(collection(db, "users"), where("email", "==", userEmail));

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];  
          const docRef = doc.ref;
          const currentReviewPoints = doc.data().reviewPoints;
          await updateDoc(docRef, {
              reviewPoints: currentReviewPoints+100 // bhai yahan pe apna logic add kr dena abhi ke liye 100 hardcoded rakha tha
          });
        console.log("review submitted successfully!!")
      } else {
          console.log("No documents found with the provided email.");
      }
      
      return true;

    }

  }
  async function updateReviewPoints(userEmail, newReviewPoints) {
    try {
      const userRef = doc(db, "users", userEmail);
      await updateDoc(userRef, {
        reviewPoints: newReviewPoints
      });
      console.log("User's review points updated successfully!");
    } catch (error) {
      console.error("Error updating user's review points:", error);
    }
  }
   
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        if (!user || !user.email) {
          console.log("User not found or email not available.");
          return;
        }

        const userEmail = user.email;
        const temp = [];
        const q = query(collection(db, "users"), where("email", "==", userEmail));

        const querySnapshot = await getDocs(q);
        console.log("Number of documents retrieved:", querySnapshot.size);
        
        querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          temp.push(doc.data());
        });

        console.log("Temp array:",temp);

        setUserData(temp);
        console.log(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUser();
  }, [user]); 

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Product Review</h2>
        <form onSubmit={handleSubmit}>
          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Product Name"
            >
              Product Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="productname"
              type="text"
              placeholder="Product Name"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </div>

          <label
            className="block text-gray-700 text-sm font-bold mb-2 text-center"
            htmlFor="Product Category"
          >
            Product Category
          </label>

          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            required
          >
            <option value="">Select</option>
            <option value="Smartphone">Smartphone</option>
            <option value="Laptops">Laptops</option>
            <option value="Smartwatches">Smartwatches</option>
            <option value="Headphones">Headphones</option>
            <option value="Home Appliances">Home Appliances</option>
            <option value="Computer Pheriperal">Computer Peripheral</option>
          </select>


          {category && (
            <div className="md:col-span-5">
              <label
                className="block text-gray-700 text-sm font-bold mb-2 text-center"
                htmlFor="Product Brand"
              >
                Product Brand
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                onChange={(e) => setBrand(e.target.value)}
                value={brand}
                required
              >
                <option value="">Select</option>
                {brandOptions[category].map((brandOption, index) => (
                  <option key={index} value={brandOption}>
                    {brandOption}
                  </option>
                ))}
              </select>
            </div>
          )}
          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Purchase Date"
            >
              Purchase Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="purchasedate"
              type="date"
              value={purchaseDate}
              onChange={(e) => setPurchaseDate(e.target.value)}
              required
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
              id="proprice"
              type="number"
              placeholder="Purchased Price"
              value={purchasePrice}
              onChange={(e) => setPurchasePrice(e.target.value)}
              required
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
              row={5}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="proreview"
              placeholder="Product Review"
              value={productReview}
              onChange={(e) => setProductReview(e.target.value)}
              required
            ></textarea>
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
              onChange={handleImageChange}
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
