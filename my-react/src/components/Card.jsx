import iconOne from '../assets/icon1.png'
import iconTwo from '../assets/icon2.png'
import iconThree from '../assets/icon3.png'
import iconFour from '../assets/icon4.png'
import './Card.css'

function Card(){
    const itemArr = [{img: iconOne, heading: "Declarative", description: "React makes it painless to create interactive UIs."}, 
        {img: iconTwo, heading: "Components", description: "Build encapsulated components that manage their state."}, 
        {img: iconThree, heading: "Single-Way", description: "A set of immutable values are passed to the components"}, 
        {img: iconFour, heading: "JSX", description: "Statically-typed, designed to run on modern browsers."}];
    
    return (
        <div className="item-container">
            {itemArr.map((item, index) => (
            <div key={index} className="card-item">
                <img src={item.img} alt="icon"/>
                <h1>{item.heading}</h1>
                <p>{item.description}</p>
            </div>))}
        </div>
       
    );
}
export default Card