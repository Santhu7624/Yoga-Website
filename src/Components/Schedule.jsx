import React, { useState } from "react";
import classImg1 from "../assets/images/home1.jpg"; // You can use different images per class if needed
import classImg2 from "../assets/images/home2.jpg";
import classImg3 from "../assets/images/home3.jpg";
import classImg4 from "../assets/images/home4.jpg";

const classData = [
  {
    type: "Online",
    day: "Monday To Friday",
    time: "5:30 AM – 6:30 AM",
    title: "Morning Flow",
    image: classImg1,
  },
  {
    type: "Online",
    day: "Wednesday",
    time: "8:00 AM – 9:00 AM",
    title: "Gentle Stretch",
    image: classImg4,
  },
  {
    type: "In-Person",
    day: "Weekend",
    time: "6:00 PM – 7:00 PM",
    title: "Power Yoga",
    image: classImg2,
  },
  {
    type: "In-Person",
    day: "Saturday",
    time: "9:00 AM – 10:30 AM",
    title: "Weekend Energizer",
    image: classImg3,
  },
];

export default function Schedule() {
  const [filter, setFilter] = useState("All");
  const [selectedClass, setSelectedClass] = useState(null);

  const filteredClasses =
    filter === "All" ? classData : classData.filter((c) => c.type === filter);

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Class Schedule</h2>

      {/* Filter Buttons */}
      <div className="flex justify-center mb-6 space-x-4">
        {["All", "Online", "In-Person"].map((f) => (
          <button
            key={f}
            className={`px-4 py-2 rounded-md ${filter === f ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
              }`}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Cards in horizontal layout */}
      <div className="grid gap-6 md:grid-cols-4 lg:grid-cols-4">
        {filteredClasses.map((cls, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col hover:shadow-lg transition"
          >
            {/* Image */}
            <img
              src={cls.image}
              alt={cls.title}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col justify-between flex-1">
              <div className="mb-2">
                <h3 className="text-xl font-bold text-gray-800">{cls.title}</h3>
                <p className="text-gray-600">{cls.day} — {cls.time}</p>
                <span className="text-sm text-blue-500">{cls.type}</span>
              </div>

              {/* Buttons */}
              <div className="mt-4 space-x-3">
                <button
                  onClick={() => setSelectedClass(cls)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Book
                </button>
                <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300">
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Popup for Booking Info */}
      {selectedClass && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-[90%] max-w-xl relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
              onClick={() => setSelectedClass(null)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedClass.title}</h2>
            <p className="mb-2">
              <strong>Time:</strong> {selectedClass.day} — {selectedClass.time}
            </p>
            <p className="mb-2">
              <strong>Type:</strong> {selectedClass.type}
            </p>
            <p className="mb-2">
              <strong>Contact:</strong> +65 80819848
              <br />
              <strong>Email:</strong> yogawithme@example.com
            </p>
            <div className="mt-4">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7163280116584!2d103.9341825!3d1.379611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d95a65c3fc1%3A0x3c60e65c8cdb36b4!2sWhiteWater!5e0!3m2!1sen!2ssg!4v1710000000000!5m2!1sen!2ssg"
                width="100%"
                height="400"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}