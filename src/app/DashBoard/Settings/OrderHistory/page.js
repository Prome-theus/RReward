import React from "react";

export default function OrderHistoryPage(){
//   fake dates h y
  const orders = [
    { id: 1, date: "2024-04-10", total: 50.00, status: "Delivered" },
    { id: 3, date: "2024-04-05", total: 30.00, status: "Delivered" }, 
    { id: 2, date: "2024-04-08", total: 75.00, status: "In Transit" },
  ];

  return (

    <div className="bg-[#FDA403] ">
        <div className="max-w-4xl mx-auto mt-10 px-4 sm:px-6 lg:px-8 font-sans">
        <h1 className="text-3xl mb-6 font-bold">Order History</h1>
        <div className="bg-white shadow-md rounded-lg overflow-hidden ">
            <table className="w-full">
            <thead className="bg-gray-200">
                <tr>
                <th className="px-4 py-2 text-left">Order ID</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-4 py-2 text-left">Status</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order => (
                <tr key={order.id} className="border-b border-gray-200">
                    <td className="px-4 py-2">{order.id}</td>
                    <td className="px-4 py-2">{order.date}</td>
                    <td className="px-4 py-2">${order.total.toFixed(2)}</td>
                    <td className="px-4 py-2">{order.status}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>

        {/* Customer Care Section */}
        <div className="mt-8 font font-sans">
            <h2 className="text-2xl font-bold font-sans mb-4">Customer Care</h2>
            <p className="text-lg mb-2">For any inquiries or assistance, please contact our customer support team:</p>
            <p className="text-lg mb-2">Email: support@example.com</p>
            <p className="text-lg mb-2">Phone: 123-456-7890</p>
            <p className="text-lg">Working Hours: Monday - Friday, 9:00 AM - 5:00 PM</p>
        </div>
        </div>
    </div>   
  );
};
