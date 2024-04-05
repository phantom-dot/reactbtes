import React, { Component } from 'react'

export default class States extends Component {

constructor(props) {
  super(props)

  this.state = {
     message:"Please subscribe"
  }
}

  render() {
    return (
        <>
        <h1>{this.state.message}</h1>
        <button onClick={()=>this.subscribe()}> suscribe</button>
        </>
    )
  }


  subscribe() {
    this.setState({message:"thankyou for subscribing"})
  }

}
