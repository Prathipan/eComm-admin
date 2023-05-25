import React from 'react'
import { Outlet } from 'react-router-dom'
import TopBar from '../components/topBar/TopBar'
import SideBar from '../components/sidebar/SideBar'

const Portal = () => {
  return (
    <>
    <TopBar />
      <div className="container">
        <SideBar />
        <Outlet />
      </div>
    </>
  )
}

export default Portal