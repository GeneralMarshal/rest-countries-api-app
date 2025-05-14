import { Route,Routes } from 'react-router-dom'
import { useState } from 'react'

import './App.css'

import LandingPage from './pages/LandingPage'
import DetailsPage from './pages/DetailsPage'

export default function App() {
 const [toggleMode, setToggleMode] = useState<ToggleModecdm>("light")

  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<LandingPage toggleMode={toggleMode}/>}></Route>
          <Route path="/detailspage" element={<DetailsPage toggleMode={toggleMode}/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

