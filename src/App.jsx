import {useState} from "react";
import "./styles/App.css";
import Navbar from "./layouts/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <div className="background-image1" />
        <div className="hero-content">
          <h1 className="text-5xl font-extrabold font-sans object-top">Commercial Property for Lease</h1>
          <h2 className="text-lg font-medium font-sans desc1">
            J&F Divino Corporation offers 3786 square meters of commercial space for lease in a prime location in Cubao,
            Quezon City.
          </h2>
          <div className="flex justify-center mt-6 pt-6">
            <a href="" className="button1 text-lg font-bold">
              About
            </a>
            <a href="" className="button1 text-lg font-bold">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <br />
      <section id="aboutUs" className="pb-5">
        <div>
          <h1 className="text-4xl font-extrabold font-sans pt-7 pl-8 pr-8">ABOUT US</h1>
          <p className="text-lg font-light font-sans p-8">
            J&F Divino Development Corporation is a family-owned company, proudly founded by our grandparents, Jacobo
            "Oboy" Divino Sr. and Felicidad "Idad" Divino. Our family's journey in real estate began in the 1960s with
            the acquisition of properties along Aurora Boulevard in Cubao, Quezon City.
          </p>
          <p className="text-lg font-light font-sans pl-8 pr-8 pb-10 pt-1">
            Over the years, it was further developed into commercial establishments, now known as the J&F Divino
            Building, and Lolo Oboy's Commercial Center located at Aurora Boulevard, Cubao, Quezon City.
          </p>
        </div>
      </section>
      <section className="relative w-[500px] h-[350px] mx-auto">
        <img src="/img1.jpg" className="absolute top-0 left-0 w-3/5 rounded-xl shadow-xl z-30" />
        <img src="/img2.jpg" className="absolute top-10 left-36 w-3/5 rounded-xl shadow-lg z-20" />
        <img src="/img3.jpg" className="absolute top-20 left-72 w-3/5 rounded-xl shadow-md z-10" />
      </section>
    </>
  );
}

export default App;
