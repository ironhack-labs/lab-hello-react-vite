import React from "react";
import logo from "../assets/Ironhack Logo XS.png";
import menu from "../assets/Menu Top XS.png";

const Container = () => {
  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="logo" />
        <img className="menu" src={menu} alt="menu" />
      </div>
      <div className="landing">
        <h1>
          Say hello to <br />
          React Js
        </h1>
        <p>
          You will learn how to use <br />
          the most popular frontend library <br />
          and become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </div>
    </div>
  );
};

export default Container;
