import { Route,Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './App.css'

import LandingPage from './pages/LandingPage'
import DetailsPage from './pages/DetailsPage'

export default function App() {
 const [toggleMode, setToggleMode] = useState<ToggleMode>(()=>{
 const theme = localStorage.getItem("theme")
 return theme === "dark" ? "dark" : "light"
})

 const toggleProps = {toggleMode, setToggleMode}

 useEffect(()=>{
  localStorage.setItem("theme", toggleMode)
 }, [toggleMode])

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

