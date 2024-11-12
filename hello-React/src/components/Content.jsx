import ironLogo from '../assets/ironhack-logo-xs.png';
import topMenu from '../assets/menu-top-xs.png';

function Content() {
    return (
        <div className="content">
            <div className="navbar">
                <img src={ironLogo} alt="ironhack logo" />
                <img src={topMenu} alt="menu icon" />

            </div>
            <h1>Say hello to <br></br>ReactJS</h1>
            <p>You will learn how to use<br></br> the most popular frontend library,<br></br> and become a super Ninja developer</p>
            <button>Awesome!</button>
        </div>
    );
}

export default Content;