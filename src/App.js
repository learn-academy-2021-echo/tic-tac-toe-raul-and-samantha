import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      board: ["", "", "", "", "", "", "", "", ""],
      player: null,
      player1:["", "", "", "", ""],
      player2:["", "", "", "", ""]
    }
  }
  componentDidMount(){
    let treasure = Math.floor(Math.random()*this.state.board.length)
    this.setState({player: treasure})
  }
// we need a way to have X and O change turns.  
  handleGamePlay = (index) => {
    const { board, player } = this.state
    if(index === player){
      board[index]="❌"
      this.setState({board: board})
    }else{
    board[index]="⭕️"
    this.setState({board: board})
    }
    
  }

  render(){
    return(
      <>
        <h1>Raul's and Samantha's Tic-Tac-Toe</h1>
        <div className="gameboard">
          {this.state.board.map((value, index) =>{
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