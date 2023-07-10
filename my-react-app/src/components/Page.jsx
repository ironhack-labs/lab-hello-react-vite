import React from "react";
import imageLogo from "/src/assets/ironhack-logo-xs.png";
import burgerMenu from "/src/assets/menu-top-xs.png";
import iconOne from "/src/assets/icon1.png";
import iconTwo from "/src/assets/icon2.png";
import iconThree from "/src/assets/icon3.png";
import iconFour from "/src/assets/icon4.png";

export default function Page() {
  return (
    <>
      <section className="header">
        <nav>
          <img src={imageLogo} alt="" />
          <img src={burgerMenu} alt="" />
        </nav>
        <h1>
          Say Hello to <br />
          ReactJS
        </h1>
        <p className="introText">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          tenetur, laudantium neque nostrum explicabo voluptates magni expedita
          fugiat eius possimus?
        </p>
        <button className="whiteBtn">Awesome!</button>
      </section>
      <section className="footer">
        <div className="box">
          <img src={iconOne} alt="image of serive" />
          <h3>Declartive</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="box">
          <img src={iconTwo} alt="" />
          <h3>Components</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="box">
          <img src={iconThree} alt="" />
          <h3>Single-way</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="box">
          <img src={iconFour} alt="" />
          <h3>JSX</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </section>
    </>
  );
}
