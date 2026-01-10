import { useState } from 'react'

import './App.css'
import ElvHome from './pages/ElvHome'
import Elvitsolution from './pages/Elvitsolution'
import CinemaAV from './pages/CinemaAV'
import { Route, Routes } from 'react-router-dom'

function App() {
 

  return (
    <>
    <Routes>
       <Route path='/' element={<ElvHome/>}/>
       <Route path='/itsolution' element={<Elvitsolution/>}/>
       <Route path='/cinema' element={<CinemaAV/>}/>


    </Routes>
     
    </>
  )
}

export default App
