import React, { Component } from 'react'

export default class SetState extends Component {

    constructor(props) {
      super(props)
      this.state = {
         count:0
      }
    }



  render() {
    return (
        
        <>
          <h1>{this.state.count}</h1>
            <button onClick={()=>this.increment5times()}>click me to inc count</button>
        </>
      

    )
  }


  
    // inccount(params) {
    // this.setState({count:this.state.count+1})
    // console.log(this.state.count)
    // }

    increasewhole5(){
        this.setState((prevstate)=>({
            count: prevstate.count+1
        }));
    }


    increment5times(){
      this.increasewhole5();
      this.increasewhole5();
      this.increasewhole5();
      this.increasewhole5();
      this.increasewhole5();
    }

}
