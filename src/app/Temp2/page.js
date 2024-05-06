"use client"
import React, { useRef } from "react";
import Card from "@/src/components/Card";

const Page = () => {
    const scrollRef = useRef(null);

    const handleScroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset;
    };

    return (
        <div>
            <nav className="border-b p-4 border-zinc-500 text-white text-xl w-screen">
                <div className="grid grid-cols-2">
                    <div className="col-span-1">Logo</div>
                    <div className="col-span-1 flex items-end justify-end">Sign Out</div>
                </div>
            </nav>
            <div className="h-screen">
                <div className="grid grid-cols-2 text-white">
                    <div className="col-span-1 m-4 text-xl">Popular-topics 🔥</div>
                    <div className="col-span-1 flex items-end justify-end m-4">
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => handleScroll(-100)}
                        >
                            Left
                        </button>
                        <button
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            onClick={() => handleScroll(100)}
                        >
                            Right
                        </button>
                    </div>
                </div>
                <div className="flex justify-between items-center px-4">

                    <div
                        className="CARDS overflow-x-auto flex gap-4 p-4"
                        ref={scrollRef}
                    >
                        {[...Array(10)].map((_, index) => (
                            <div
                                key={index}
                                className="border border-zinc-500 h-fit w-fit rounded-lg m-4 text-white flex flex-col items-center"
                            >
                                <Card
                                    imageUrl="google.png"
                                    heading="Introduction to Rocker Science"
                                    description="  Covers fundamental, design, construction, operation and
          programming of Robots. Covers Fundamentals, design, construction,
          operation and"
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
