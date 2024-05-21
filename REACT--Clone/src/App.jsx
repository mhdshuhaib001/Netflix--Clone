import React from 'react'
import Home from "./pages/Homes/Home"
import Login from "./pages/Login/Login"
import { Routes,Route } from 'react-router-dom'
import Player from './pages/Players/Player'
const App = () => {
  return (
   <>
   <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/player/:id' element={<Player/>}/>
    </Routes>
    
   </div>
   </>
  )
}

export default App
