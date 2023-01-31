import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Netflix from './Netflix'
import Signup from './Signup'

export default function Login() {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path ='/login' element={<Login/>} />
        <Route exact path ='/signup' element={<Signup/>} />
        <Route exact path ='/' element={<Netflix/>} />
    </Routes>
    </BrowserRouter>
  )
}
