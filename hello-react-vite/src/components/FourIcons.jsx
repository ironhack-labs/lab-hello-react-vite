import React from "react";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

function FourIcons() {
  return (
    <div class="four-icons">
      <section>
        <img src={icon1} />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs.</p>
      </section>
      <section>
        <img src={icon2} />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state.</p>
      </section>
      <section>
        <img src={icon3} />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the component's.</p>
      </section>
      <section>
        <img src={icon4} />
        <h3>JSX</h3>
        <p>Statically-typed, designed to run on modern browsers.</p>
      </section>
    </div>
  );
}

export default FourIcons;
