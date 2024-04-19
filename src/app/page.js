"use client";
import React, { useRef } from "react";
// import { Gravitas_One } from "next/font/google";
import { Oswald } from "next/font/google";
import { Shrikhand } from "next/font/google";
import { Concert_One } from "next/font/google";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

// const gravitas = Gravitas_One({
//   subsets: ["latin"],
//   style: ["normal"],
//   weight: ["400"],
// });

const oswald = Oswald({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
});

const shrikhand = Shrikhand({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const concertone = Concert_One({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
});

const items = [
  {
    id: 1,
    color: "from-[#475569] to-[#334155]",
    title: "SIGN UP",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 2,
    color: "from-slate-800 to-slate-900",
    title: "POST REVIEW",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
  {
    id: 3,
    color: "from-slate-900 to-slate-950",
    title: "EARN EXCITING REWARDS",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    link: "https://lama.dev",
  },
];

const Page = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <motion.div
      className="h-full w-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] bg-[#18181b] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] text-white flex flex-col items-center justify-center text-8xl text-center">
          <div className={concertone.className}>
            <div>GIVE REVIEW.</div>
            <div>EARN REWARDS.</div>
          </div>
          <div className="bg-[#18181b] mt-5">
            <div className={oswald.className}>
              <div className=" text-xl dark:text-white">
                EVERY REVIEW YOU POST COMES WITH EXCITING PRIZES
              </div>
              <div className="text-xl dark:text-white">
                SO WHAT'S STOPPING YOU
              </div>
            </div>
          </div>
        </div>

        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-[#64748b] to-slate-600" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl md:text-4xl lg:text-6xl xl:text-8xl font-bold">
                    {item.title}
                  </h1>
                  <p className="w-80 md:w-[500px] md:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link}>
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                      See Demo
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="bg-[#18181b] w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-white sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-extrabold text-white">
              REWARD FOR REVIEW
            </h2>
            <p className="mb-4">
              Compose a detailed review outlining your experience with the
              product, covering its performance, durability, ease of use, and
              any other pertinent factors. Offer genuine insights to aid
              potential buyers in making informed decisions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="reward image.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="review.jpg"
              alt="office content 2"
            />
          </div>
        </div>
      </div>

      <section className="bg-[#18181b] w-screen h-screen flex flex-col gap-16 items-center justify-center text-center dark:bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg sm:text-lg text-white">
            <h2 className="mb-4 text-4xl font-bold text-white">
              Helping users for better shopping and product experience
              <span className="font-extrabold"></span>
            </h2>
            <p className="mb-4 font-light">
              Exciting rewards for every review you post. Reward Review makes
              the service provider understand the customers and the response of
              the users on the products.
            </p>
            <a
              href="/AboutUs"
              className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
            >
              Learn more
              <svg
                className="ml-1 w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Page;
