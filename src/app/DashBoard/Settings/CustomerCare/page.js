import react from 'react';

export default function CustomerCarePage(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDA403] text-[#91091E] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-md w-full space-y-8 ">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold ">
            Customer Care Page
          </h2>
        </div>
        <form className="mt-8 space-y-6" >
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="issue" className="sr-only">
                Describe the issue
              </label>
              <textarea
                id="issue"
                name="issue"
                rows={5}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Describe the issue..."
                required
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-500 hover:bg-[#E72929] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>

        <div className="mt-8 font font-sans">
            <h2 className="text-2xl font-bold font-sans mb-4">Customer Care</h2>
            <p className="text-lg mb-2">For any inquiries or assistance, please contact our customer support team:</p>
            <p className="text-lg mb-2">Email: rndreward@gmail.com</p>
            <p className="text-lg mb-2">Phone: +91-8957392057</p>
            <p className="text-lg">Working Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
        </div>
      </div>
    </div>
  );
};

