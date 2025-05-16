import { Route,Routes } from 'react-router-dom'
import { useState } from 'react'

import './App.css'

import LandingPage from './pages/LandingPage'
import DetailsPage from './pages/DetailsPage'

export default function App() {
 const [toggleMode, setToggleMode] = useState<ToggleMode>("light")

 const toggleProps = {toggleMode, setToggleMode}

  return (
    <>
      <Routes>
        <Route >
          <Route path="/" element={<LandingPage toggleProps={toggleProps}/>}></Route>
          <Route path="/detailspage/:code" element={<DetailsPage toggleProps={toggleProps}/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

