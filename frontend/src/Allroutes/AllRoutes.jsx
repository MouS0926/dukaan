import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../Component/Dashboard'
import Refund from '../Component/Refund'

export default function AllRoutes() {
  return (
    <div>
       <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/refund' element={<Refund/>}/>
       </Routes>

    </div>
  )
}
