
export default function Card({src,title,text}) {
  return (
    <div className="flex">
          <div className="card-container">
      <div className="card-body">
      <img src={src}/>
      <h >{title}</h>
      <p >{text}</p>
      </div>

         
    </div>

    </div>

  )
}
