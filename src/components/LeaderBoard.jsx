// components/Leaderboard.js

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Leaderboard = ({ leaders }) => {
  const leaderboardRef = useRef(null);

  useEffect(() => {
    gsap.from(leaderboardRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  const scrollToBottom = () => {
    gsap.to(window, { duration: 1, scrollTo: { y: 'max', autoKill: false } });
  };

  return (
    <div
      ref={leaderboardRef}
      className="bg-white shadow-md rounded-lg overflow-hidden"
    >
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-4">Leaderboard</h2>
        <ul>
          {leaders.map((leader, index) => (
            <li
              key={index}
              className="flex justify-between items-center border-b border-gray-200 py-2"
            >
              <span>{index + 1}.</span>
              <span className="ml-2">{leader.name}</span>
              <span className="text-gray-600">{leader.score}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        onClick={scrollToBottom}
        className="block w-full bg-blue-500 text-white py-2 hover:bg-blue-600 focus:outline-none"
      >
        Scroll to Bottom
      </button>
    </div>
  );
};

export default Leaderboard;
