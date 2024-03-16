import React from 'react'

const page = () => {
  return (
    <div>
      <h2 className=" font-bold text-3xl bg-gray-900 text-center pt-10 pb-5 text-white">Adding Offer</h2>
      
      <div className="bg-gray-900 flex items-center justify-center">
  
  
  <form className="bg-white shadow-md rounded px-8 pt-5 pb-8 mb-6 w-11/12">
    
    
    <div className="md:col-span-5">
      <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="Offer Name">
       Offer Name
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="proname" type="text" placeholder="Offer Name" />
    </div>
  
   <div className="md:col-span-5">
      <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="Description">
        Offer Description
      </label>
      <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="proreview" type="textarea" placeholder="Offer Desciption"/>
    </div>

    <div className="md:col-span-5">
      <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="Offer Pricing">
        Offer Price
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="proreview" type="number" placeholder="Offer Price"/>
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
              id="purdate"
              type="date"
            />
          </div>
    
    <div className="md:col-span-5">
      <label className="block text-gray-700 text-sm font-bold mb-2 text-center" htmlFor="Offer Image">
        Offer Image
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