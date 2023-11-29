import FirstIcon from "/src/assets/icon1.png";
import SecondIcon from "/src/assets/icon2.png";
import ThirdIcon from "/src/assets/icon3.png";
import FourthIcon from "/src/assets/icon4.png";

function Icon() {
    return(
        <div className="container">
            <div className="icons">
                <img src={FirstIcon}/>
                <h1>Declarative</h1>
                <p>React makes it painless to create interactive UIs.</p>
            </div>
            <div className="icons">
                <img src={SecondIcon}/>
                <h1>Components</h1>
                <p>Build encapsulated components that manage their state.</p>
            </div>
            <div className="icons">
                <img src={ThirdIcon}/>
                <h1>Single-Way</h1>
                <p>A set of immutable values are passed to the components.</p>
            </div>
            <div className="icons">
                <img src={FourthIcon}/>
                <h1>JSX</h1>
                <p>Statically-typed, designed to run on modern browsers.</p>
            </div>
        </div>
    )
}

export default Icon;