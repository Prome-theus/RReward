import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const predefinedVideos = [
  { yt: 'https://www.youtube.com/embed/video1' },
  { yt: 'https://www.youtube.com/embed/video2' },
  { yt: 'https://www.youtube.com/embed/video3' },
  // Add more video URLs as needed
];

const YoutubeSlider = () => {
  return (
    <div className="w-[90vw] sm:w-[600px] md:w-[800px] mx-auto">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        delay={30}
        autoplay={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        style={{ height: '500px' }} // Set the height of the Swiper component
      >
        {predefinedVideos.map((video, index) => (
          <SwiperSlide key={index}>
            <iframe
              className="rounded-lg w-full h-full" // Set the height to 100% of the SwiperSlide
              src={video.yt}
              title={`YouTube video ${index + 1}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default YoutubeSlider;
