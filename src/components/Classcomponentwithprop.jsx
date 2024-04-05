import React, { Component } from 'react'

export default class Classcomponentwithprop extends Component {
  render() {
    return (
        <>
         <h3>
            hello {this.props.name}  from class component using props
        </h3>
        {this.props.children}
        </>
       
        
        )
  }
}
