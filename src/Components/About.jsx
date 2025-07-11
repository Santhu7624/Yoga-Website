// src/pages/About.jsx
import React from "react";
import teacherImg from "../assets/images/profile.jpeg";
import cert1 from "../assets/images/cert1.png";
import cert2 from "../assets/images/cert2.png";
import cert3 from "../assets/images/cert3.png";


export default function About() {
  return (
    <div className="bg-white  py-12 px-6" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Teacher Photo */}
        <img
          src={teacherImg}
          alt="Yoga Teacher"
          className="w-64 h-64 object-cover rounded-full shadow-md border-4 border-green-400"
        />

        {/* Text + Certifications */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl text-center font-semibold mb-4">About the Teacher</h2>
          <h2 className="text-2xl font-semibold mb-4">Dr. Pugazhmathi Varadhan</h2>
          <p className="text-gray-800 mb-4">
            I’m a certified yoga instructor with over 10 years of experience in guiding individuals
            towards holistic wellness. My approach blends traditional Hatha yoga, breathwork, and
            mindfulness techniques to help you feel calm, strong, and balanced. Whether you're a
            beginner or advanced student, I create an inclusive and empowering environment for all.
          </p>

          {/* Certificates */}
          <div className="flex justify-center md:justify-start items-center gap-4 mt-4 flex-wrap">
            <img src={cert1} alt="Certification 1" className="h-12 rounded-full" />
            <img src={cert2} alt="Certification 2" className="h-12 rounded-full" />
            <img src={cert3} alt="Certification 3" className="h-12 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}