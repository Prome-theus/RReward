import React from "react";
import Link from "next/link";

export default function SettingsPage() {
  
  return (
    <div className=" min-h-screen font-sans bg-[#FDA403]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-[#91091E]">
        
        <h1 className="text-5xl font-bold px-8 py-8">Settings</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="col-span-1 md:col-span-3 bg-white rounded-lg shadow-md p-6 hover:bg-[#E8751A]">
            <h2 className="text-xl font-bold mb-4">User Profile</h2>
            <div className="flex items-center">
              <img
                src="/userprofile.jpg"
                alt="User Profile"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="text-lg font-semibold">John Doe</p>
                <p className="text-gray-600">john.doe@example.com</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-1 bg-white rounded-lg shadow-md p-6 hover:bg-[#E8751A]">
            <Link href="/DashBoard/Settings/ProfileSettings">
            <h2 className="text-xl font-bold mb-4">Profile Settings</h2>
            <p className="text-gray-600">Profile settings</p>
            </Link>
          </div>

          <div className="md:col-span-1 bg-white rounded-lg shadow-md p-6 hover:bg-[#E8751A]">
            <Link href="/DashBoard/Settings/PrivacySettings">
            <h2 className="text-xl font-bold mb-4">Privacy Settings</h2>
            <p className="text-gray-600">Privacy settings</p>
            </Link>
          </div>

          <div className="md:col-span-1 bg-white rounded-lg shadow-md p-6 hover:bg-[#E8751A]">
            <Link href="/DashBoard/Settings/ChangePass">
            <h2 className="text-xl font-bold mb-4">Change Password</h2>
            <p className="text-gray-600">changed password</p>
            </Link>
          </div>

          <div className="md:col-span-1 bg-white rounded-lg shadow-md p-6 hover:bg-[#E8751A]">
            <Link href="/DashBoard/Settings/YourActivity">
            <h2 className="text-xl font-bold mb-4">Your Activity</h2>
            <p className="text-gray-600">Your Activity</p>
            </Link>
          </div>

          <div className="md:col-span-1 bg-white rounded-lg shadow-md p-6 hover:bg-[#E8751A]">
            <Link href="/DashBoard/Settings/OrderHistory">
            <h2 className="text-xl font-bold mb-4">Order History</h2>
            <p className="text-gray-600">Order History</p>
            </Link>
          </div>

          <div className="md:col-span-1 bg-white rounded-lg shadow-md p-6 hover:bg-[#E8751A]">
            <Link href="/DashBoard/Settings/CustomerCare">
            <h2 className="text-xl font-bold mb-4">Coustomer Care</h2>
            <p className="text-gray-600">Coustomer Care</p>
            </Link>
          </div>

          <div className="col-span-1 md:col-span-3 flex justify-end">
            <button
              // onClick={handleLogout}
              className="bg-orange-500 hover:bg-[#E72929] text-white font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
