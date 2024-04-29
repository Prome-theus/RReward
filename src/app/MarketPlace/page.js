"use client";
import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore"; // Import necessary Firebase Firestore functions
import { db } from "../firebase"; // Import your Firebase database connection
import BrandCard from "@/src/components/BrandCard";
const itemsPerPage = 12;

// BrandCard component to display information about a single brand


const HomePage = () => {
  const [brands, setBrandsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const sortByPrice = () => {
    // Sort logic here
  };

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const brandData = [];
        const querySnapshot = await getDocs(collection(db, "brand"));
        querySnapshot.forEach((doc) => {
          brandData.push({ docId: doc.id, ...doc.data() });
        });
        setBrandsData(brandData);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };
    fetchBrands();
  }, []);

  return (
    <div>
      <div className="text-3xl font-bold text-center mt-4 mb-1">
        Marketplace
      </div>
      <div className="flex items-end justify-end">
        <button onClick={sortByPrice} className="p-2 border rounded-md mr-2">
          Sort
        </button>
        <button onClick={sortByPrice} className="p-2 border rounded-md mr-2">
          Filter
        </button>
      </div>
      
      {/* Map through brands and render BrandCard for each brand */}
      <div className="grid grid-cols-3 gap-4">
        {brands.map((brand) => (
          <BrandCard key={brand.docId} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
