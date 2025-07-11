import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Schedule from "./Components/Schedule";
import { Carousel } from "react-responsive-carousel";
// import Contact from "../Components/Contact";
import yoga1 from "./assets/images/home11.jpg";
import yoga2 from "./assets/images/home8.jpg";
import yoga3 from "./assets/images/home9.jpg";
import yoga4 from "./assets/images/home10.jpg";
import yoga5 from "./assets/images/home5.jpg";
import yoga6 from "./assets/images/home6.jpg";
import Gallery from './Components/Gallery';
import "react-responsive-carousel/lib/styles/carousel.min.css";

// const navItems = ["Home", "About", "Schedule", "Gallery", "Contact"];
  const images = [yoga1, yoga2, yoga3, yoga4, yoga5, yoga6];
function App() {
  
  return (
    
      <div className="scroll-smooth">
      <Header />

<main className="container mx-auto px-4 py-10 space-y-20">
 {/* Home */}
      <section id="home" className="Container pt-16">
        <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      interval={4000}
    >
      {images.map((img, i) => (
        <div key={i} className="relative h-[60vh]">
          <img
            src={img}
            alt={`Slide ${i + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
              
            </h1>
          </div>
        </div>
      ))}
    </Carousel>

        
      </section>
</main>
     

      {/* About */}
      <section id="about" className="container mx-auto p-6 bg-white">
        {/* <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About the Teacher</h2>
          <p className="text-gray-700">
            I’m a certified yoga instructor with 10+ years of experience guiding students to better
            health through breath, balance, and flow. Join me to cultivate strength, flexibility,
            and inner peace.
          </p>
        </div> */}
        <About></About>
      </section>

      {/* Schedule */}
      <section id="schedule" className="p-6 bg-gray-100">
        {/* <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Class Schedule</h2>
          <div className="grid gap-4">
            {[
              {
                title: "Morning Flow",
                day: "Monday",
                time: "8:00 – 9:00 AM",
                type: "Online",
              },
              {
                title: "Power Yoga",
                day: "Tuesday",
                time: "6:00 – 7:00 PM",
                type: "In-Person",
              },
              {
                title: "Gentle Stretch",
                day: "Wednesday",
                time: "7:00 – 8:00 AM",
                type: "Online",
              },
              {
                title: "Weekend Energizer",
                day: "Saturday",
                time: "9:00 – 10:30 AM",
                type: "In-Person",
              },
            ].map((cls, i) => (
              <div
                key={i}
                className="bg-white p-4 rounded-md shadow border-l-4 border-green-500"
              >
                <h3 className="text-xl font-semibold">{cls.title}</h3>
                <p className="text-gray-600">
                  {cls.day} — {cls.time}
                </p>
                <span className="text-sm text-blue-500">{cls.type}</span>
              </div>
            ))}
          </div>
        </div> */}
        <Schedule></Schedule>
      </section>

      {/* Gallery */}
      <section id="gallery" className="p-6 bg-white">
        {/* <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[yoga1, yoga2, yoga3, yoga4].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Gallery ${i + 1}`}
                className="h-64 w-full object-cover rounded-lg shadow hover:scale-105 transition-transform"
              />
            ))}
          </div>
        </div> */}
        <Gallery></Gallery>
      </section>

      {/* Contact */}
      <section id="contact" className="p-6 bg-gray-100">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p>Kanishka @ YOGA Center</p>
            <p>📞 Phone: +65 80819848</p>
            <p>📧 Email: yogawithme@example.com</p>
            <p>📍 72 Pasir Ris Street,White Water, Singapore</p>
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
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-2 rounded"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="w-full border border-gray-300 p-2 rounded"
            ></textarea>
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-700 text-white text-center py-4">
        © {new Date().getFullYear()} Kanishka Yoga Center. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
