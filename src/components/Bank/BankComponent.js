import React from 'react'
import ReactDOM from "react-dom";
import { render } from 'react-dom';
import PlayingCard from '../PlayingCard/PlayingCard'
import './BankComponent.css'

class BankComponent extends React.Component {
  //cardIndex = 0;
  //cards = [];

  
  state = {
    bank: 0
  }
  

  constructor(props) {
    super(props);
    this.state.bank = props.counter;
  }



  addToBankValue(addedValue){
    //console.log('Request for new CardIndexChange = '+newindex)
    let newBalance = parseInt(this.state.bank)+parseInt(addedValue);
    this.setState(
      {
        bank: newBalance
      }
    );
    return this.state.bank;
  };

  deleteFromBankValue(deductedValue){
    //console.log('Request for new CardIndexChange = '+newindex)
    let newBalance = parseInt(this.state.bank)-parseInt(deductedValue);
    this.setState(
      {
        bank: newBalance
      }
    );
    return this.state.bank;
  };

  getBank(){
      return this.state.bank;
  }




  render() {
    return <div className="BankComponent">
        <div>Your counters</div>
        <div className="counter">{this.state.bank}</div>
        {/*console.log("hello in Board")*/}
        {/*console.log("Card Index = "+this.state.cardIndex)*/}
        {/*this.state.cardsToRender.map(card => (
          <PlayingCard {...card}  key={card.id} />
        ))*/}
    </div>;
  }

}
    
    


export default BankComponent
