import React, {useState} from 'react'
import './App.css'
import BrucyBoard from './components/BrucyBoard/BrucyBoard'
import BankComponent from './components/Bank/BankComponent'

function App() {
  const cards = buildDeck(7);
  let bank = 10;
  let brucyBoardElement = React.createRef();
  let bankElement = React.createRef();

  const onSubmitClick = () => {
    //console.log('Hello in App')
  }

  const onUpdate = () => {
    console.log("UPDATEING APP COMPONENT 'OnUpdate Promise'");
  }

  
  
  let cardIndex = 0;
  let card = cards[cardIndex];


  return (
    <div className="App">

      <div>
           <img src="assets/images/codingChallengeHeader.jpg" alt="CodingChallenge" height="200"/> 
      </div> 
      
      <div className="grid-container">
        <div className="grid-item">
          <BankComponent counter={bank} ref={bankElement}/>
        </div>
        <div className="grid-item">
          <NameForm value="0" maxValue={bank} onSubmit={onSubmitClick()} 
                    cards={cards} 
                    card={card} 
                    cardIndex={cardIndex} 
                    brucyBoardElement={brucyBoardElement} 
                    bankElement={bankElement}></NameForm>
          
        </div>
      </div> 
      <div className="BrucyBoard">
        <BrucyBoard ref={brucyBoardElement} cards={cards} cardIndex={cardIndex} /> 
        {/* onUpdate={this.onUpdate.bind(this)}  */}
      </div>
    </div>
    
  )
  }

export default App

function updateAllComponentsNow() {
  console.log("UPDATEING APP COMPONENT 'Function'");
}

function buildDeck(numberOfCards) {
  const suites = ['H', 'D', 'S', 'C']
  const faces = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']
  let deck = Array(52);
  let deckCounter = 0
  for(let i=0; i<suites.length; i++){
    const suite = suites[i];
      for(let j=0; j<faces.length; j++){
        const face = faces[j];
        const aCard = face+""+suite;
        let position;
        if(face === 'A'){
          position = 14;
        } else if ( face === 'K'){
          position = 13;
        } else if ( face === 'Q'){
          position = 12;
        } else if ( face === 'J'){
          position = 11;
        } else {
          position = parseInt(face,10);
        }
        deck[deckCounter] = {id: aCard, fImage: '../assets/images/'+aCard+'.jpg', bImage: '../assets/images/Red_back.jpg', side: 'down', face: face, position: position };
        deckCounter++;
        //console.log(aCard);
      }
  }
  deck = deck.sort(() => Math.random() - 0.5)
  let cardsToReturn =  deck.slice(0,numberOfCards)
  //console.log("The Random Array")
  //console.log(deck);
  return cardsToReturn;
}



class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: props.value, maxValue: props.maxValue, cards: props.cards, 
                  card: props.card, cardIndex: props.cardIndex, 
                  brucyBoardElement: props.brucyBoardElement,
                bankElement: props.bankElement}; //, onSubmit: props.onSubmit};
    this.state.bankBalance = 0;
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    //console.log('Card Position= ' +this.state.card.position+' CardIndex= '+this.state.cardIndex)
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSelectChange(event) {
    this.setState({selectDirection: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    //{this.state.onSubmit()}
    if(this.state.selectDirection != 'higher' && this.state.selectDirection != 'lower' ){
      //alert("The Higher/Lower Direction wasn't selected. Please choose a Direction");
    }else{
      
      console.log('User selected Bet: '+this.state.value+ ' and Direction: '+this.state.selectDirection+' and currentIndex: '+this.state.cardIndex);
      //console.log('Card Position= ' +this.state.card.position+' CardIndex= '+this.state.cardIndex)

      let currentCardPosition = this.state.cards[this.state.cardIndex].position;
      this.state.cardIndex = this.state.cardIndex+1;
      let nextCardPosition = this.state.cards[this.state.cardIndex].position;
      console.log('Current Card = '+currentCardPosition+' and Next card is = '+nextCardPosition);
      if(currentCardPosition == nextCardPosition){
        console.log("OH the cards are the same!");
        //TODO Need go handle same card scenario 
      } else if (currentCardPosition < nextCardPosition){
        //Card is Higher than last 
        console.log("Card is Higher");
        if(this.state.selectDirection == "higher"){
          console.log("You are right! You said Higher and the card was Higher");
          this.state.bankBalance = this.state.bankElement.current.addToBankValue(this.state.value);
          console.log("Your bank = "+this.state.bankBalance);
        } else {
          console.log("You are wrong! You said Lower and the card was Higher");
          this.state.bankBalance = this.state.bankElement.current.deleteFromBankValue(this.state.value);
          console.log("Your bank = "+this.state.bankBalance);
        }
      }else {
        //Card is Lower than last
        console.log("Card is Lower");
        if(this.state.selectDirection == "lower"){
          console.log("You are right! You said Lower and the card was Lower");
          this.state.bankBalance = this.state.bankElement.current.addToBankValue(this.state.value);
          console.log("Your bank = "+this.state.bankBalance);
        } else {
          console.log("You are wrong! You said Higher and the card was Lower");
          this.state.bankBalance = this.state.bankElement.current.deleteFromBankValue(this.state.value);
          console.log("Your bank = "+this.state.bankBalance);
        }
      }
      


      this.state.brucyBoardElement.current.changeCardIndex(this.state.cardIndex);

      if(this.state.cardIndex == '6'){
        console.log("GAME OVER!");
        console.log("Your final score is "+this.state.bankElement.current.getBank());
      }

      
    }
  }

  render() {  
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          <div>Bet counters & Vote</div>
          <input type="number" min="0" max={this.state.maxValue} value={this.state.value} onChange={this.handleChange} />
        </label>

        <select value={this.state.selectDirection} onChange={this.handleSelectChange} onLoad={this.handleSelectChange}>
            <option value="unused">Choose</option>
            <option value="higher">Higher</option>
            <option value="lower">Lower</option>
          </select>
        <input type="submit" value="Submit" />
      </form>
      
      </div>
      

      


    );
  }
}
