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
  // winning = ()=> {

  //   const winningConditions = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6] ]
  //     if (this.state.squares[index] [0][1][2] === true){this.setState({winner: "❌"})
  //       alert(winner)
  //     }

  // }


// we need a way to have X and O change turns.
// We need a way to set winning conditons, by stating what the winning index pairs are.  ex. [0,1,2]


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
