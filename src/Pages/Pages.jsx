import React from 'react'
import Home from './Home'
import {Routes, Route} from 'react-router-dom'
import Cusine from './Cusine'

function Pages() {
  return (
    <div>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/cusine/:type' element= {<Cusine/>}></Route>
        </Routes>
    </div>
  )
}

export default Pages