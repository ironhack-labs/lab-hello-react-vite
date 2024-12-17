import reactLogo from '../assets/react.svg'
import './Hero.css'
function Hero(){
    return (
        <div className="hero-layout">
            <div className="content">
                <h1>Say hello to ReactJS</h1>
                <p><span>You will learn how to use </span><span>the most popular fronttend library,</span><span> and become a super Ninja developer.</span></p>
                <button>Awesome!</button>
            </div>
            <div className="graphic-logos">
                <div className="left">
                    <img src={reactLogo} className="logo-left" alt="React logo" />
                    <img src={reactLogo} className="logo-left" alt="React logo" />
                    <img src={reactLogo} className="logo-left" alt="React logo" />
                </div>
                <div className="right">
                    <img src={reactLogo} className="logo" alt="React logo" />
                    <img src={reactLogo} className="logo" alt="React logo" />
                    <img src={reactLogo} className="logo" alt="React logo" />
                </div>
            </div>
        </div>
    );
}
export default Hero;