import React from 'react'
import Sidebar from './Sidebar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className=' font-inter'>
      <Sidebar/>
      
      <div className='w-[calc(100%-256px)] h-full bg-gray-50 ml-64'>
        <Header/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout