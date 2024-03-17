"use client";
import { useState } from "react";
import Marketplace from "@/src/components/MarketPlace";

const allProducts = [
  {
    id: 1,
    name: "Spotify Premium",
    price: 16.0,
    image: "https://i.gadgets360cdn.com/large/spotify_covid_19_offers_1589451456389.jpg",
  },
  {
    id: 2,
    name: "Youtube Premium",
    price: 21.15,
    image: "https://images.fonearena.com/blog/wp-content/uploads/2022/06/Xiaomi-YouTube-Premium-1024x608.jpg",
  },
  {
    id: 3,
    name: "Nord Vpn Premium",
    price: 12.0,
    image: "https://cdn.grabon.in/gograbon/images/web-images/uploads/1618490405719/nordvpn-offers.jpg",
  },
  {
    id: 1,
    name: "Zomato Gold",
    price: 16.0,
    image: "https://cdn2.desidime.com/topics/photos/1677838/original/imagepicker2D6501B7-235F-4DD1-ACB2-4B046C1A1865-51477-00000957888CDEAC.jpg?1698033163",
  },
  {
    id: 2,
    name: "Swiggy One",
    price: 21.15,
    image: "https://i.gadgets360cdn.com/large/swiggy_one_1637582636501.jpg",
  },
  {
    id: 3,
    name: "Dineout Passport",
    price: 12.0,
    image: "https://mma.prnewswire.com/media/1324797/Dineout_Passport.jpg",
  },
  {
    id: 1,
    name: "Dominos Offer",
    price: 16.0,
    image: "https://couponswala.com/blog/wp-content/uploads/2020/03/Dominos-first-order-coupon.jpg.webp",
  },
  {
    id: 2,
    name: "Mcdonald's offer",
    price: 21.15,
    image: "https://cdn.grabon.in/gograbon/images/merchant/1610276833504.png",
  },
  {
    id: 3,
    name: "Sugar Cosmetics Offer",
    price: 12.0,
    image: "https://img.paisawapas.com/ovz3vew9pw/2022/06/23122951/Sugar-Cosmetics-Offers.png",
  },
  {
    id: 1,
    name: "Lenskart Coupon",
    price: 16.0,
    image: "https://www.dealnloot.com/wp-content/uploads/2015/11/lenskart-offer-300x226.jpg",
  },
  {
    id: 2,
    name: "Oyo Coupon",
    price: 21.15,
    image: "https://img.paisawapas.com/ovz3vew9pw/2021/08/27161542/OYO-Discount-Coupon.jpg",
  },
  {
    id: 3,
    name: "Disney Hotstar",
    price: 12.0,
    image: "https://d168jcr2cillca.cloudfront.net/uploadimages/coupons/14167-Hotstar_Offers_Coupons.jpg",
  },
  {
    id: 1,
    name: "Netflix Premium",
    price: 16.0,
    image: "https://i0.wp.com/www.smartprix.com/bytes/wp-content/uploads/2022/04/Still_image.jpg?ssl=1",
  },
  {
    id: 2,
    name: "Amazon Coupon ",
    price: 21.15,
    image: "https://coupongizer.com/en/wp-content/uploads/2023/01/Amazon-GCC-Coupon-Code-480x480.jpg",
  },
  {
    id: 3,
    name: "Ajio Coupon",
    price: 12.0,
    image: "https://i.pinimg.com/originals/39/7f/aa/397faa78fef1da556e4ca164bd429059.jpg",
  },
  {
    id: 1,
    name: "Flipkart Coupon",
    price: 16.0,
    image: "https://www.marketing360.in/wp-content/uploads/2017/09/Flipkart-places-its-bets-on-private_Ayushi_E-commerce_6th-Sept-2017-Sakshi-Nahta-1024x524.jpg",
  },
  {
    id: 2,
    name: "Myntra Coupon",
    price: 21.15,
    image: "https://miro.medium.com/v2/resize:fit:604/1*Sg6eaKrFt-P_mdKrJmK1mQ.jpeg",
  },
  {
    id: 3,
    name: "Nike Offer",
    price: 12.0,
    image: "https://i.pinimg.com/originals/e4/80/c5/e480c5b4ec0082e8f1535f27da9c4b54.jpg",
  },
  {
    id: 1,
    name: "Adidas Coupon",
    price: 16.0,
    image: "https://i.ytimg.com/vi/oT5KoOopG3c/sddefault.jpg",
  },
  {
    id: 2,
    name: "Asian Paints Coupon",
    price: 21.15,
    image: "https://cdn.grabon.in/gograbon/images/web-images/uploads/1617802425776/Asian-Paints-Coupons.jpg",
  },
  {
    id: 3,
    name: "Mamaearth Coupon",
    price: 12.0,
    image: "https://cdn.grabon.in/gograbon/images/web-images/uploads/1707730177665/mamaearth-coupon-codes%20.jpg",
  },
];

const itemsPerPage = 12;

const HomePage = () => {
  const [products, setProducts] = useState(allProducts);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const isLastPage = indexOfLastItem >= products.length;

  const sortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

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
      <Marketplace products={currentProducts} />
      <div className="flex items-center justify-center">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="p-2 mr-2 mb-4 bg-gray-300 text-gray-600 rounded-md"
        >
          Prev
        </button>
        <button
          onClick={nextPage}
          disabled={isLastPage}
          className="p-2 mb-4 bg-blue-500 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
