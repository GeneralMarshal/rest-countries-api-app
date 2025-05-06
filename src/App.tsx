import { Route,Routes } from 'react-router-dom'
import './App.css'

import LandingPage from './pages/LandingPage'

export default function App() {
 

  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<LandingPage/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

