import React, {useState} from 'react'
import './App.css'
import BrucyBoard from './components/BrucyBoard/BrucyBoard'
import BankComponent from './components/Bank/BankComponent'
import Popup from 'reactjs-popup';

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
      <div>
            <div className="phantom" />
            <div className="footerStyle">
            <div class="grid-forFooter">
            <div class="MyNameFooter">@maneshtailor</div>
            <div class="GitHubFooter">
            <img src="assets/images/GitHub-Mark-32px.png" alt="github" height="10"/> <a href='https://github.com/maneshtailor/game-playyourcards'> https://github.com/maneshtailor/game-playyourcards</a></div>
            </div>
            </div>
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
    this.state.bankBalance = 10;
    this.handleChange = this.handleChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    this.modelOpen = false;
    // const [open, setOpen] = useState(false);
    // const 
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
          let newBalance = parseInt(this.state.bankBalance) + parseInt(this.state.value);
          this.state.bankElement.current.addToBankValue(this.state.value);
          this.state.bankBalance = newBalance;
          console.log("Your bank = "+this.state.bankBalance);
        } else {
          console.log("You are wrong! You said Lower and the card was Higher");
          let newBalance = parseInt(this.state.bankBalance) - parseInt(this.state.value);
          this.state.bankElement.current.deleteFromBankValue(this.state.value);
          this.state.bankBalance = newBalance;
          console.log("Your bank = "+this.state.bankBalance);
        }
      }else {
        //Card is Lower than last
        console.log("Card is Lower");
        if(this.state.selectDirection == "lower"){
          console.log("You are right! You said Lower and the card was Lower");
          let newBalance = parseInt(this.state.bankBalance) + parseInt(this.state.value);
          this.state.bankElement.current.addToBankValue(this.state.value);
          this.state.bankBalance = newBalance;
          console.log("Your bank = "+this.state.bankBalance);
        } else {
          console.log("You are wrong! You said Higher and the card was Lower");
          let newBalance = parseInt(this.state.bankBalance) - parseInt(this.state.value);
          this.state.bankElement.current.deleteFromBankValue(this.state.value);
          this.state.bankBalance = newBalance;
          console.log("Your bank = "+this.state.bankBalance);
        }
      }
      
      


      this.state.brucyBoardElement.current.changeCardIndex(this.state.cardIndex);

      if(this.state.cardIndex == '6'){
        console.log("GAME OVER!");
        console.log("Your final score is "+this.state.bankBalance);
        this.modelOpen = true;
      }
      

      this.state.maxValue = this.state.bankBalance;

      if(this.state.bankBalance == '0'){
        console.log("GAME OVER!");
        console.log("Your final score is "+this.state.bankBalance);
        this.modelOpen = true;
      }

      this.forceUpdate();

      
    }
  }

  handleRetry(event) {
    console.log("Play again");
    window.location.reload(false);
  }

  getResultMessage(finalScore){
    //Starting score = 10
    //Highest Possible Score = 640 (doubling each time and all correct)
    if(finalScore == 0){
      return "Ouch!"
    }else if (finalScore < 10) {
      return "Too bad! You ended with less than you started with";
    }else if (finalScore == 10){
      return "Did you do anything?"
    }else if (finalScore > 10 && finalScore < 200){
      return "Good try. Nice Score";
    }else if (finalScore >=200 && finalScore < 400){
      return "WOW Great Score";
    }else if (finalScore >=400 && finalScore < 640){
      return "That is a lebgendary score. Well done!";
    }else if(finalScore=='640'){
      return "640?! Highest Possible Score Achieved!!!!";
    }
    return "Nice job";
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

      <Popup open={this.modelOpen} closeOnDocumentClick={false}  position="center center">
        <div className="modalEnd">

          <div>{this.getResultMessage(this.state.maxValue)} </div>
          <div>You got {this.state.maxValue} points.</div>
          <div>What to play again?</div>
          <form onSubmit={this.handleRetry}>
          <input type="submit" value="Play Again" />
        </form>


        </div>
      </Popup>
      
      </div>
      

      


    );
  }
}
