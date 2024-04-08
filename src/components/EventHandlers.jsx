import React, { Component } from 'react'

export default class EventHandlers extends Component {


constructor(props) {
  super(props)

  this.state = {
     message:"hello world"
  }
  this.clickHandler=this.clickHandler.bind(this);
}

  render() {
    return (
        <>
        <h1>{this.state.message}</h1>
        {/* 1st way of binding */}
        <button onClick={this.clickHandler.bind(this)}>1st way of binding</button>
        {/* 2nd way of binding */}
        <button onClick={()=>{this.clickHandler()}}>2nd way of binding</button>
        {/* 3rd way of binding */}
        <button onClick={this.clickHandler}>3rd way of binding</button>
        </>
      
        
       
    )
  }

//   clickHandler(){
//         this.setState({
//                 message:"button clicked"
//         })
//   }


//  4th way of binding 
clickHandler=()=>{
    this.setState({
        message:"button clicked"
})
}

}
