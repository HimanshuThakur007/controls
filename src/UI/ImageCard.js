import React from 'react'
import "./ImageCard.css"

const ImageCard = (props) => {
    
    // const classes = "card" + props.className
  return (

    <>
    <div className="card" style={{width: "18rem"}}>
    <img src={props.img} className="card-img-top" alt={props.alt}/>
    <div className="card-body">
      <p className="card-text">{props.text}</p>
    </div>
  </div>
  </>
  )
}

export default ImageCard


// Some quick example text to build on the card title and make up the bulk of the card's content.