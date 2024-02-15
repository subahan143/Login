import React, { useState } from 'react'
import {BrowserRouter ,Route,Routes} from 'react-router-dom'
import Login from './Component/Login/Login'
import Home from './Component/Home/Home'

const Routing = () => {

  // const [auth,set_auth]  = useState(false)


  
  return (
  
    <BrowserRouter>
  <Routes>
<Route path='/' element={<Login/>}/>
<Route path='/home' element={<Home/>}/>
  </Routes>
    </BrowserRouter>
  )
}

export default Routing
