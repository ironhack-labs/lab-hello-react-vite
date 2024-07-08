import React from 'react'
const card1="src/assets/icon1.png"
export default function Card() {
  return (
    <div className="card">
        <img src={card1} alt="" />
        <h3>Declarative</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus sapiente dolore repellat.</p>
      </div>
  )
}
