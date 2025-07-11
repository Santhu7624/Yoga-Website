// src/pages/Gallery.jsx
import React from "react";
import yoga1 from "../assets/images/poses/pose1.jpeg";
import yoga2 from "../assets/images/poses/pose2.jpeg";
import yoga3 from "../assets/images/poses/pose3.jpeg";
import yoga4 from "../assets/images/poses/pose4.jpeg";
import yoga5 from "../assets/images/poses/pose5.jpeg";
import yoga6 from "../assets/images/poses/pose6.jpeg";

const images = [yoga1, yoga2, yoga3, yoga4, yoga5, yoga6];

export default function Gallery() {
  return (
       <div className="p-6 max-w-7xl mx-auto bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">
          Yoga Gallery
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-green-100 to-blue-100 p-2 rounded-sm shadow-sm hover:shadow-sm transition duration-300 ease-in-out"
            >
              <div className="h-64 flex items-center justify-center bg-white rounded-sm overflow-hidden">
                <img
                  src={img}
                  alt={`Yoga pose ${i + 1}`}
                  className="h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}