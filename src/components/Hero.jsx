import NavBar from "./NavBar"
function Hero() {
    return (
        <div className="heroBg">
            <NavBar />
            <div className="heroContainer">
            <h1>
                Say hello to ReactJS
            </h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
            <a href="#">
            <button className="awesome">
                Awesome!
            </button>
            </a>
            </div>
        </div>
    )
}

export default Hero