import React, { Component } from 'react'
import Childcomponent from './Child'

export default class Parentcomponent extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message:"hello"
    }
    this.Clickhandler=this.Clickhandler.bind(this)
  }

  render() {
    return (
      <>
        <h1>{this.state.message}</h1>
        <Childcomponent Clickhandler={this.Clickhandler}/>
      </>
    )
  }


  Clickhandler(){
    console.log("button clicked")
    this.setState({message:"greeting through child without params"})
  }
}
