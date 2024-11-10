import "./card.css"

function Card ({title, children, img}) {
    return (
        <div className="card">
            <img className="card-img" src={img} />
            <p className="card-title">{title}</p>
            <p className="card-text">{children}</p>
        </div>
    )
}

export default Card;