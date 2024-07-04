
function cards({image, title, text}) {
  return (
    <div className="card">
        <img src={image} alt="card image" />
        <h2>{title}</h2>
        <p className="card-text">{text}</p>
    </div>
  )
}

export default cards