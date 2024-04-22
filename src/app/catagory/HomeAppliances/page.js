"use client"
import React, { useState } from "react";

const photos = [
  {
    title: "Photo 1",
    image: "/Homeappliances/1.jpg",
    comment: "Beautiful nature scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Photo 2",
    image: "/Homeappliances/2.jpg",
    comment: "Beautiful nature scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Photo 3",
    image: "/Homeappliances/3.jpg",
    comment: "Beautiful nature scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Photo 4",
    image: "/Homeappliances/4.jpg",
    comment: "Beautiful nature scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Photo 5",
    image: "/Homeappliances/5.jpg",
    comment: "Beautiful nature scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Photo 6",
    image: "/Homeappliances/6.jpg",
    comment: "Beautiful nature scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Photo 7",
    image: "/Homeappliances/7.jpg",
    comment: "Beautiful nature scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Photo 8",
    image: "/Homeappliances/8.jpg",
    comment: "Beautiful nature scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Photo 9",
    image: "/Homeappliances/9.jpg",
    comment: "Beautiful nature scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Photo 10",
    image: "/Homeappliances/10.jpg",
    comment: "Beautiful nature scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Photo 11",
    image: "/Homeappliances/11.jpg",
    comment: "Beautiful nature scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Photo 12",
    image: "/Homeappliances/12.jpg",
    comment: "Beautiful nature scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Photo 13",
    image: "/Homeappliances/13.jpg",
    comment: "Beautiful nature scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Photo 14",
    image: "/Homeappliances/14.jpg",
    comment: "Beautiful nature scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Photo 15",
    image: "/Homeappliances/15.jpg",
    comment: "Beautiful nature scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    title: "Photo 16",
    image: "/Homeappliances/16.jpg",
    comment: "Beautiful nature scene. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
];

export default function HomeAppliances() {
  const itemsPerRow = 3;
  const rowsPerPage = 4;
  const itemsPerPage = itemsPerRow * rowsPerPage;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(photos.length / itemsPerPage);

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleClickNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const truncateComment = (comment) => {
    const words = comment.split(" ");
    if (words.length > 10) {
      return words.slice(0, 10).join(" ") + "....";
    }
    return comment;
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedPhotos = photos.slice(startIndex, endIndex);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="min-h-screen bg-slate-900">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {displayedPhotos.map((photo, index) => (
            <div
              key={index}
              className={`p-4 relative ${
                hoveredIndex !== null && hoveredIndex !== index && "blur"
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="shadow-lg rounded-lg overflow-hidden bg-slate-800">
                <img
                  className="w-full h-64 object-cover object-center"
                  src={photo.image}
                  alt={photo.title}
                />
                <div className="p-4">
                  <p className="text-white font-semibold text-xl mb-2 font-sans">
                    {photo.title}
                  </p>
                  <p className="text-white text-base font-sans">
                    {hoveredIndex === index
                      ? photo.comment
                      : truncateComment(photo.comment)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            onClick={handleClickPrev}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="mx-4 text-white">
            Page {currentPage} of {totalPages}
          </span>
          <button
            className="bg-blue-500 text-white font-semibold py-2 px-4 rounded"
            onClick={handleClickNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
