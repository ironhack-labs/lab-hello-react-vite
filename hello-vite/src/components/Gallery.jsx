import ImageOne from "../assets/ironhack-logo-xs.png";
import ImageTwo from "../assets/menu-top-xs.png";
import ImageThree from "../assets/icon1.png";
import ImageFour from "../assets/icon2.png";
import ImageFive from "../assets/icon3.png";
import ImageSix from "../assets/icon4.png";

function Gallery() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={ImageOne} alt="Ironhack Logo" />
        </div>
        <div className="drop">
          <img src={ImageTwo} alt="Menu" />
        </div>
        <div className="content">
          <h1>Say Hello to ReactJS</h1>
        </div>
        <div>
          {" "}
          <p>
            You will learn how to use the most popular frontend library, and
            become a super Ninja developer.
          </p>
        </div>
        <div>
          <button>Awesome!</button>
        </div>
      </nav>

      <div id="gallery">
        <img src={ImageThree} alt="Icon 1" />
        <h3>Declarative</h3>
        <p>React makes it painless to create interactive UIs</p>
        <img src={ImageFour} alt="Icon 2" />
        <h3>Components</h3>
        <p>Build encapsulated components that manage their state</p>
        <img src={ImageFive} alt="Icon 3" />
        <h3>Single-Way</h3>
        <p>A set of immutable values are passed to the components.</p>
        <img src={ImageSix} alt="Icon 4" />
        <h3>JSX</h3>
        <p>Statically-typed,designed to run on modern browsers</p>
      </div>
    </>
  );
}

export default Gallery;
