// components/ParallaxScroll.js
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

const scroll = () => {
  return (
    <ParallaxProvider>
      <div className="min-h-screen flex items-center justify-center">
        <Parallax y={[-30, 30]} tagOuter="figure">
          <div className="bg-blue-500 p-10 rounded-lg shadow-lg text-white">
            <h1 className="text-4xl font-bold">Parallax Scroll Example</h1>
            <p className="mt-4">Scroll down to see the parallax effect.</p>
          </div>
        </Parallax>
      </div>
    </ParallaxProvider>
  );
};

export default scroll;
