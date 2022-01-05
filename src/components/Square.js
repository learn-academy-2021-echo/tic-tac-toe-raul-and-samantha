import React, { Component } from 'react'

class Square extends Component{

  handleClick = () => {
    this.props.handleGamePlay(this.props.index)
  }

  render(){
    return(
      <>
        <div onClick={this.handleClick} className="square">
          {this.props.value}
          {/* value = the value of a ? that is getting passed through via value={value} */}
        </div>

      </>
    )
  }
}
export default Square