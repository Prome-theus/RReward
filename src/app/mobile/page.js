"use client";
import React, { useRef } from "react";
import MobileCard from "@/src/components/MobileCard"; // Corrected component import

const Page = () => {
  const scrollRef = useRef(null);

  const handleScroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  // Array of card data
  const cardData = [
    {
      imageUrl: "rocket.png",
      heading: "Introduction to Rocker Science",
    },
    {
      imageUrl: "brain.png",
      heading: "Artificial Intelligence",
    },
    {
      imageUrl: "telescope.png",
      heading: "Astro Physics",
    },
    {
      imageUrl: "quantum.png",
      heading: "Quantum Computing",
    },
    {
      imageUrl: "robot.png",
      heading: "Robotics",
    },
    {
      imageUrl: "mars.png",
      heading: "Terraforming Mars",
    },
    {
      imageUrl: "venus.png",
      heading: "Terraforming Venus",
    },
    {
      imageUrl: "ufo.png",
      heading: "Fermi Paradox - Finding Aliens",
    },
    {
      imageUrl: "home.png",
      heading: "Base on Moon & Mars",
    },
    {
      imageUrl: "atom.png",
      heading: "Neural Networks",
    },

    // Add more card data objects here
  ];

  return (
    <div>
      <nav className="p-4 border-[#425568] border-b-2 text-white w-screen">
        <div className="grid grid-cols-2">
          <img src="Halwailogo.png" className="w-[80px] h-[37]" />
          <div className="col-span-1 flex items-end justify-end mb-2 font-poppins text-[16px]">
            Sign Out
          </div>
        </div>
      </nav>
      <div className="h-screen">
        <div className="col-span-1 m-4 text-[20px] text-white font-poppins font-semibold">
          Popular topics{" "}
        </div>
        <div className="flex justify-between items-center px-4">
          <div
            className="mobileCard overflow-x-auto flex gap-[18px]"
            ref={scrollRef}
          >
            {cardData.map((card, index) => (
              <div
                key={index}
                className="border-2 border-solid border-l-6 border-r-2 border-[#425568] h-[280px] w-[180px] rounded-lg m-4 text-white flex flex-col items-center"
              >
                <MobileCard
                  imageUrl={card.imageUrl}
                  heading={card.heading}
                  description="Covers fundamentals, design, construction, operation and programming of robots."
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
