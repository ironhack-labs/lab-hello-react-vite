import "./card.css";

function Card({ img, title, text }) {
  return (
    <div className="col-md-3">
      <div className="card border-none">
      <img src={img} className="card-img" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
