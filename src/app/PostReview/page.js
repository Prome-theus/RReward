"use client";
import React, { useState,useContext } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { UserAuth } from "../context/AuthContext";

async function addDataToFireStore(
  productname,
  category,
  brand,
  purchaseDate,
  purchasePrice,
  productReview,
  images,
  userEmail
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
      brand:brand,
      purchaseDate: purchaseDate,
      purchasePrice: purchasePrice,
      productReview: productReview,
      images: imageUrls,
      userEmail:userEmail,
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
  const [brand,setBrand]=useState("")
  const [purchaseDate, setPurchaseDate] = useState("");
  const [purchasePrice, setPurchasePrice] = useState("");
  const [productReview, setProductReview] = useState("");
  const [images, setImages] = useState([]);
  const {user } = UserAuth();

  const brandOptions = {
    Smartphone: ["APPLE", "SAMSUNG", "ONEPLUS","REALME","OPPO","VIVO","REDMI","HONOR"],
    Laptops: ["ASUS/ROG", "HP", "ACER","MSI","SAMSUNG","DELL"],
    Smartwatches: ["BOAT", "APPLE", "AMAZEFIT","SAMSUNG","ONEPLUS","HAMMER"],
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
