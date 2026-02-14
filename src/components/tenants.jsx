// src/components/ClientsSection.jsx
import React from "react";
import Jollibee from "../assets/images/jollibee.png";
import Shakeys from "../assets/images/shakeys.png";
import Prestige from "../assets/images/prestige.png";
import Dentist from "../assets/images/delos.jpg";
import Thinksafe from "../assets/images/thinksafe.jpg";
import Beautystudio from "../assets/images/beautystudio.jpg";
import Primemedia from  "../assets/images/primemedia.jpg";

// Option A (recommended): put your logos in /src/assets/clients/
// then import them like below.
// import redPlanet from "../assets/clients/red-planet.png";
// import marriott from "../assets/clients/marriott.png";

const clients = [
  // { name: "Red Planet", src: redPlanet },
  // { name: "Marriott", src: marriott },
  // For now, placeholders (replace with your real images):
  {name: "Jollibee", src: Jollibee},
  {name: "Shakeys", src: Shakeys},
  {name: "Prestige", src: Prestige},
  {name: "Dentist", src: Dentist},
  {name: "Thinksafe", src: Thinksafe},
  {name: "Beauty Studio", src: Beautystudio},
  {name: "Prime Media", src: Primemedia},
];

export default function ClientsSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-wide text-neutral-900 md:text-5xl">OUR CLIENTS</h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-neutral-600 md:text-base">
            Our partner establishments that have found success in our prime location.
          </p>
        </div>

        {/* Logos */}
        <div className="mt-10">
          <div className="grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {clients.map((c) => (
              <div key={c.name} className="flex h-20 w-full items-center justify-center" title={c.name}>
                <img
                  src={c.src}
                  alt={c.name}
                  className="max-h-20 w-auto max-w-full object-contain opacity-90 md:grayscale-90 md:hover:grayscale-0 hover:opacity-100 transition"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
