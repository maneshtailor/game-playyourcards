import React from 'react'
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import PlayingCard from '../PlayingCard/PlayingCard'
import './BrucyBoard.css'

class BrucyBoard extends React.Component {
  //cardIndex = 0;
  //cards = [];

  
  state = {
    cards:[],
    cardIndex: 0
  }
  

  constructor(props) {
    super(props);
    this.state.cardIndex = props.cardIndex;
    this.state.cards = props.cards;
    this.state.cards[0].side = "up";
    //this.onUpdate = props.onUpdate;
  }



  changeCardIndex(newindex){
    //console.log('Request for new CardIndexChange = '+newindex)
    this.state.cards[newindex].side = "up";
    this.setState(
      {
        cardIndex: newindex
      }
    );
    //this.onUpdate();
    
  };




  render() {
    return <div className="BrucyBoard">
        {/*console.log("hello in Board")*/}
        {/*console.log("Card Index = "+this.state.cardIndex)*/}
        {this.state.cards.map(card => (
          <PlayingCard {...card}  key={card.id} />
        ))}
    </div>;
  }

}
    
    


export default BrucyBoard
