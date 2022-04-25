import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import { Logout } from '../pages/Logout'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { Navbar } from '../components/Navbar'
 
export const AppRouter = () => {
  return (
      <BrowserRouter>

      <Navbar/>

      <div className='container mt-3'>


          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/logout" element={<Logout/>}/>
              <Route path="*" element={
                  <main>
                      <p>RUTA EQUIVOCADA</p>
                  </main>
              }/>
          </Routes>

      </div>
      
      </BrowserRouter>
   
  )
}
