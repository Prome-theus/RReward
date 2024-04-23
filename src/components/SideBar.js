// components/Sidebar.js
import Link from "next/link";

const Sidebar = () => {
    return (
      <div className="bg-gray-800 text-white w-64 flex flex-col">
        {/* Sidebar content */}
        <div className="p-4 flex-grow">
          <h1 className="text-xl font-bold mb-4">Dashboard</h1>
          <ul>
            <Link href="/DashBoard/Settings">
            <li className="py-2 cursor-pointer hover:bg-gray-700">Settings</li>
            </Link>
            {/* Add more menu items as needed */}
          </ul>
        </div>
        {/* Sidebar footer */}
  
      </div>
    );
  };
  
  export default Sidebar;
  