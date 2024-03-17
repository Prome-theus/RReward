"use client";
import React, { useState } from "react";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

async function addDataToFireStore(
  brandName,
  brandDescription,
  brandPrice,
  brandDate,
  images
) {
  try {
    const imageUrls = await Promise.all(
      images.map(async (image) => {
        const storageRef = ref(storage, "offers/" + image.name);
        await uploadBytes(storageRef, image);
        return getDownloadURL(storageRef);
      })
    );

    const docRef = await addDoc(collection(db, "brand"), {
      brandName: brandName,
      brandDescription: brandDescription,
      brandPrice: brandPrice,
      brandDate: brandDate,
      images: imageUrls,
    });

    console.log("Document written with ID :", docRef.id);
    return true;
  } catch (error) {
    console.error("error adding document", error);
    return false;
  }
}

const Admin = () => {
  const [brandName, setBrandName] = useState("");
  const [brandDescription, setBrandDescription] = useState("");
  const [brandPrice, setBrandPrice] = useState("");
  const [brandDate, setBrandDate] = useState("");
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToFireStore(
      brandName,
      brandDescription,
      brandPrice,
      brandDate,
      images
    );
    if (added) {
      setBrandName("");
      setBrandDescription("");
      setBrandPrice("");
      setBrandDate("");
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
      <h2 className=" font-bold text-3xl bg-gray-900 text-center pt-10 pb-5 text-white">
        Adding Offer
      </h2>

      <div className="bg-gray-900 flex items-center justify-center">
        <form
          className="bg-white shadow-md rounded px-8 pt-5 pb-8 mb-6 w-11/12"
          onSubmit={handleSubmit}
        >
          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Offer Name"
            >
              Offer Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="offername"
              type="text"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
              placeholder="Offer Name"
            />
          </div>

          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Description"
            >
              Offer Description
            </label>
            <textarea
              row={5}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="offerDescription"
              type="textarea"
              placeholder="Offer Desciption"
              value={brandDescription}
              onChange={(e) => setBrandDescription(e.target.value)}
            />
          </div>

          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Offer Pricing"
            >
              Offer Price
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="offerPrice"
              type="number"
              placeholder="Offer Price"
              value={brandPrice}
              onChange={(e) => setBrandPrice(e.target.value)}
            />
          </div>

          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Offer End Date"
            >
              Offer End Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="offerdate"
              type="date"
              value={brandDate}
              onChange={(e) => setBrandDate(e.target.value)}
            />
          </div>

          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Offer Image"
            >
              Offer Image
            </label>

            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="offerimg"
              type="file"
              placeholder="Choose Image"
              onChange={handleImageChange}
            />
          </div>

          <div className="md:col-span-5 text-center">
            <button
              className="bg-blue-500 text-white rounded-md p-2 text-sm text-center m-2"
              type="submit"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Admin;
