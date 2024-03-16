// components/Sidebar.js

const Sidebar = () => {
    return (
      <div className="bg-gray-800 text-white w-64 flex flex-col">
        {/* Sidebar content */}
        <div className="p-4 flex-grow">
          <h1 className="text-xl font-bold mb-4">Dashboard</h1>
          <ul>
            <li className="py-2 cursor-pointer hover:bg-gray-700">Overview</li>
            <li className="py-2 cursor-pointer hover:bg-gray-700">My Reviews</li>
            <li className="py-2 cursor-pointer hover:bg-gray-700">Settings</li>
            {/* Add more menu items as needed */}
          </ul>
        </div>
        {/* Sidebar footer */}
        <div className="p-4">
          <p>© 2024 Your Company</p>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  