// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-center items-center">
       

        <div className="space-x-4">
          <Link href="/"className="text-white hover:underline">HOME
          </Link>
          <Link href="/about"className="text-white hover:underline">ABOUT US
          </Link>
          <Link href="/"className="text-white hover:underline">CATAGORY
          </Link>
          <Link href="/"className="text-white hover:underline">MARKETPLACE
          </Link>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
