import React from 'react'

export default function Withprops(props) {
  return (
    <>
    <h1>Hello from {props.name} </h1>
    <u>{props.children}</u>
    </>
    
  )
}
