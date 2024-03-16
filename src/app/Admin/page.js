import React from 'react'

const page = () => {
  return (
    <div>
      <h2 className=" md:col-span-5 font-bold text-3xl text-center text-gray-900">Adding Product</h2>
      
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
  
  
  <form className="bg-white shadow-md rounded px-8 pt-8 pb-8 mb-6">
    
    
    <div className="md:col-span-5">
      <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="Poduct Name">
       Product Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="proname" type="text" placeholder="Product Name" />
    </div>


    <div className="md:col-span-5">
      <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="Product Category">
        Product Category
      </label>
      <label className="block text-gray-700 text-sm mb-2 text-left"><input type='radio' name="category" value="Smartphones" ></input>Smartphones</label>  
      <label className="block text-gray-700 text-sm mb-2 text-left"><input type='radio' name="category" value="Laptops" ></input>Laptops</label>
      <label className="block text-gray-700 text-sm mb-2 text-left"><input type='radio' name="category" value="Smartwatches" ></input>Smartwatches</label>
      <label className="block text-gray-700 text-sm mb-2 text-left"><input type='radio' name="category" value="Home Appliances" ></input>Home Appliances</label>
      <label className="block text-gray-700 text-sm mb-2 text-left"><input type='radio' name="category" value="Computer Pheriperals" ></input>Computer Pheriperals</label>
      <label className="block text-gray-700 text-sm mb-2 text-left"><input type='radio' name="category" value="Headphones" ></input>Headphones</label>
    </div>
   <div className="md:col-span-5">
      <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="Description">
        Product Description
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="proreview" type="textarea" placeholder="Product Desciption"/>
    </div>

    <div className="md:col-span-5">
      <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="Product Pricing">
        Product Price
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="proreview" type="number" placeholder="Product Price"/>
    </div>
    
    <div className="md:col-span-5">
      <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="Product Image">
        Product Image
      </label>

      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="proreview" type="file" placeholder="Choose Image"/>
      
    </div>

    
    <div className="md:col-span-5 text-center">
      <button className="bg-blue-500 text-white rounded-md p-2 text-sm text-center m-2" type="button">
        Upload
      </button>
    </div>
    
    
  </form>
</div>
    </div>
  )
}

export default page