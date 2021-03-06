import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      squares: [0, 0, 0, 0, 0, 0, 0, 0, 0],
      turn: 0,

    }
  }


  // We need to create a function that will allow us to have an x and o by using.
  //true and false and if statement and take turns.
  //We are going to make a counter and from there make player 1 and if player 1 is grater thatn player2
  //then player 2 click and after that if amount is the same than player1 goes next and so on.

  handleGamePlay = (index) =>{
    const {squares} = this.state
      

    if (this.state.turn % 2 === 0 && squares[index] === 0){

      squares[index]="❌"
      this.setState({squares: squares, turn: this.state.turn +1})


    } else if (this.state.turn % 2 !== 0 && squares[index] === 0) {
      squares[index]="⭕️"
      this.setState({squares: squares, turn: this.state.turn +1})
    }

    }


// we need a way to have X and O change turns.


  render(){
    return(
      <>
        <h1>Raul's and Samantha's Tic-Tac-Toe</h1>
        <div className="squares">
          {this.state.squares.map((value, index) =>{
            return (
              <Square
              value={value}
              key={index}
              index={index}
              handleGamePlay={this.handleGamePlay}/>
            )
          })}
        </div>
      </>
    )
  }
}
export default App
