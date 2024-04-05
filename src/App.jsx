import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Greet} from './components/Greet'
import Welcome from './components/Greetbyclass'
import './App.css'
import Withprops from './components/Withprops'
import Classcomponentwithprop from './components/Classcomponentwithprop'
import States from './components/States'

function App() {

  return (
    <>

      <Greet></Greet>
      <Welcome></Welcome>
      <Withprops name="sahil"><p>child</p> <button>hello</button></Withprops>
      <Classcomponentwithprop name="sahil"> <button>class ka button</button> </Classcomponentwithprop>
      <States></States>
    </>
  )
}

export default App
