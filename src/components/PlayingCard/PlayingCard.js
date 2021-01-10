import React from 'react'
import './PlayingCard.css'

const Card = props => {
  const {id, fImage, bImage, side, face, position} = props;
  let imageToShow;
  if (side == 'down'){
    imageToShow = bImage;
  }else{
    //side = up
    imageToShow = fImage;
  }

  return (
      <img className="PlayingCard" src={imageToShow} alt={id}/>
  )

  // return (
  //   <div className="PlayingCard">
  //     <img src={imageToShow} alt={id}/>
  //   </div>
  // )
}

export default Card