import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Sample images (replace with your yoga teacher's images)
import yoga1 from "../assets/images/home1.jpg";
import yoga2 from "../assets/images/home2.jpg";
import yoga3 from "../assets/images/home3.jpg";
import yoga4 from "../assets/images/home4.jpg";
import yoga5 from "../assets/images/home5.jpg";
import yoga6 from "../assets/images/home6.jpg";
export default function Home() {
  return (
     
    <div className="w-full">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        transitionTime={1000}
        stopOnHover={false}
        swipeable
        emulateTouch
        dynamicHeight={false}
      >
        {[yoga1, yoga2, yoga3, yoga4,yoga5, yoga6].map((img, idx) => (
          <div key={idx}>
            <img
              src={img}
              alt={`Yoga Pose ${idx + 1}`}
              className="w-full h-[600px] object-cover"
            />
            <p className="legend text-base">Slide {idx + 1}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}