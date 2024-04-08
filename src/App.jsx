import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Greet} from './components/Greet'
import Welcome from './components/Greetbyclass'
import './App.css'
import Withprops from './components/Withprops'
import Classcomponentwithprop from './components/Classcomponentwithprop'
import States from './components/States'
import SetState from './components/SetState'
import EventHandlers from './components/EventHandlers'
import Parentcomponent from './components/Parentcomponent'
function App() {

  return (
    <>
        <Parentcomponent />
    </>
  )
}

export default App
