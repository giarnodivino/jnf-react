import Navbar from "../layouts/Navbar.jsx";
import {Link} from "react-router-dom";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="mx-auto mt-22 max-w-5xl px-6 py-16">
        <h1 className="text-4xl font-extrabold">About Us</h1>
        <p className="mt-6 text-lg text-gray-700">
          For decades, the company has contributed to the growth of Cubao by developing well‑planned, mid‑sized
          residential buildings designed for families and middle‑income homeowners. These communities were built in
          accessible, strategically chosen locations, reflecting our commitment to providing quality homes that enhance
          everyday living.{" "}
        </p>
        <br />
        <p className="mt-6 text-lg text-gray-700">
          The company also owns and manages two commercial buildings along the bustling Aurora Boulevard, near the
          Anonas MRT‑3 station and the future Metro Manila Subway stop. These properties serve as vibrant hubs for the
          community, hosting a diverse mix of tenants including retail shops, fast‑food restaurants, dental clinics, and
          a BPO center.
        </p>
        <Link to="/" className="mt-8 inline-block text-blue-700 underline">
          Back to Home
        </Link>
      </main>
    </>
  );
}
