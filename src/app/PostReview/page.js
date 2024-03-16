import React from "react";

const PostReview = () => {
  return (
    <div>
      <h2 className="font-bold text-3xl bg-gray-900 text-center pt-10 pb-5 text-white">
        Product Review
      </h2>
      <div className="bg-gray-900 flex items-center justify-center">
        <form className="bg-white shadow-md rounded px-8 pt-5 pb-8 mb-6 w-11/12">
          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Product Name"
            >
              Product Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="proname"
              type="text"
              placeholder="Product Name"
            />
          </div>

          <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Product Category"
            >
              Product Category
            </label>
           
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"> 
      <option value="Smartphone">Smartphone</option> 
      <option value="Laptops">Laptops</option> 
      <option selected value="Smartwatches">Smartwatches</option> 
      <option value="Headphones">Headphones</option>
      <option value="Home Appliances">Home Appliances</option>
      <option value="Computer Pheriperal">Computer Pheriperal</option> 
    </select> 

          <div className="md:col-span-5">
            <label
              className="block text-gray-700 text-sm font-bold mb-2 text-center"
              htmlFor="Purchase Date"
            >
              Purchase Date
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="purdate"
              type="date"
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
              id="proreview"
              type="number"
              placeholder="Purchased Price"
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
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="proreview"
              placeholder="Product Review"
            />
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
            />
          </div>

          <div className="md:col-span-5 text-center">
            <button
              className="bg-blue-500 text-white rounded-md p-2 text-sm text-center m-2"
              type="button"
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
