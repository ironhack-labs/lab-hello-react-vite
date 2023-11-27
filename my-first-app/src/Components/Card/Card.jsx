import PropTypes from 'prop-types'; 

export default function Card({src,title,text}) {
  Card.propTypes ={
    src : PropTypes.string,
    title : PropTypes.string,
    text : PropTypes.string
  }
  return (
    <div className="card-container">
      <div className="card-body">
        <img src={src}/>
        <h2>{title}</h2>
        <p >{text}</p>
      </div>      
    </div>
  )
}
