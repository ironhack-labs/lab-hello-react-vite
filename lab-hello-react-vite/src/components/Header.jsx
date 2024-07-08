import React from "react";
const logo = "src/assets/ironhack-logo-xs.png";
const menuTop = "src/assets/menu-top-xs.png";

export default function Header() {
  return (
    <div className="bg-[#1f2535] text-white min-h-96 p-8">
      <section
        id="navbar"
        className="flex flex-row justify-between items-center mb-16"
      >
        <img src={logo}></img>
        <img src={menuTop}></img>
      </section>
      <section id="cta" className="flex flex-col items-start">
        <h1 className="font-bold text-6xl">
          Say hello to<br></br> React.js
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora sint
          iste aliquam illum mollitia ad voluptates laudantium, saepe fugiat
          molestiae, consectetur eaque? Rem soluta ipsum tempora suscipit iure,
          fuga ullam!
        </p>
        <button className="mt-4 bg-white text-blue-900 rounded p-4 font-bold">
          Awesome!{" "}
        </button>
      </section>
    </div>
  );
}
