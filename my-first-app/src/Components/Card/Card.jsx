
export default function Card({src,title,text}) {
  return (
    <div className="card-container">
            <img  class="card"src={src}/>
            <h1 class="card">{title}</h1>
            <p class="card">{text}</p>
    </div>
  )
}
