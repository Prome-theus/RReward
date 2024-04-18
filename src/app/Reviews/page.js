"use client";

import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Reviews() {
    const slides = [
        {
            img: "/reviews/a.jpg",
            text: "Google Pixel: Crafted for organic interaction, boasting an unparalleled camera and symbiotic integration with Google's ecosystem. It adeptly captures life's essence, though sporadic software idiosyncrasies may impede its flow. Aesthetic simplicity may underwhelm, lacking the flair of its competitors. Tailored for those immersed in Google's realm, offering a personalized experience. While not a groundbreaking leap, it's a solid choice for the digitally organic"
        },
        {
            img: "/reviews/b.jpg",
            text: "The Sony WH-1000XM4 headphones offer exceptional noise cancellation and sound quality, making them perfect for immersive listening experiences. Their comfortable design and long battery life enhance user comfort during extended use. With advanced features like touch controls and voice assistant integration, they provide a seamless user experience. However, they can be pricey, and some may find the ear cups a bit bulky."
        },
        {
            img: "/reviews/c.jpg",
            text: "The Apple Watch Series 6 excels in fitness tracking, heart monitoring, and overall convenience. Its vibrant display and sleek design enhance usability, while new features like blood oxygen monitoring add health insights. Integration with the Apple ecosystem ensures seamless connectivity with other devices. However, battery life could be improved, and it remains relatively expensive compared to other smartwatches. Overall, a top choice for Apple enthusiasts seeking comprehensive health and connectivity features."
        },
        {
            img: "/reviews/d.jpg",
            text: "The Panasonic fridge offers spacious storage and efficient cooling performance, keeping food fresh for longer periods. Its sleek design and adjustable shelves provide versatility in organization. Energy-saving features contribute to eco-friendliness and reduced electricity bills. However, occasional noise levels and limited temperature control options may be drawbacks. Overall, it's a reliable choice for households seeking ample storage and reliable cooling without sacrificing style."
        },
        {
            img: "/reviews/e.jpg",
            text: "The Apple desktop, whether it's the iMac or Mac Pro, delivers exceptional performance and sleek design. With powerful hardware and macOS software optimization, it ensures smooth multitasking and creative work. Stunning displays and innovative features like Touch Bar (in select models) enhance user experience. However, limited upgradeability and premium pricing may deter some buyers. Overall, it's a premium choice for users valuing performance, aesthetics, and seamless integration within the Apple ecosystem."
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <div className='max-w-[1400px] mx-auto py-16 px-4'>
            <div className='relative group'>
                <div style={{ backgroundImage: `url(${slides[currentIndex].img})` }} className='w-full h-[700px] rounded-2xl bg-center bg-cover duration-500'></div>

                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>

                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>

                <div className="text-2xl flex justify-left py-2 cursor-pointer font-sans absolute bottom-0 bg-slate-950 bg-opacity-80 w-full "  >
                    <p className="text-white px-4 py-2">{slides[currentIndex].text}</p>
                </div>
            </div>

            <div className="text-2xl flex justify-center py-2 cursor-pointer mt-4">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)}>
                        <RxDotFilled />
                    </div>
                ))}
            </div>
        </div>
    );
}
