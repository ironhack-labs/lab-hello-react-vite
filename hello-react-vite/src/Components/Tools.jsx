import React from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

const Tools = () => {
  return (
    <div>
      <div className="box">
        <div className="item">
          <img src={icon1} />
          <h3>Declarative</h3>
          <p>
            React makes it <br />
            painless to create <br />
            interactive UIs.
          </p>
        </div>
        <div className="item">
          <img src={icon2} />
          <h3>Components</h3>
          <p>
            Build encapsulated <br />
            Components that <br />
            manage their state.
          </p>
        </div>
        <div className="item">
          <img src={icon3} />
          <h3>Single-Way</h3>
          <p>
            A set of immutable <br />
            values are pased to <br />
            the Component's.
          </p>
        </div>
        <div className="item">
          <img src={icon4} />
          <h3>JSX</h3>
          <p>
            Statically-typed, <br />
            designed to run on <br />
            modern browsers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tools;
