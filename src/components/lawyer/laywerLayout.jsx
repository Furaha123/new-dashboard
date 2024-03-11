import React from 'react'
import Sidenav from './../lawyer/sidenav'
import Header from './../lawyer/header'
import { Outlet } from 'react-router-dom'

function LaywerLayout() {
  return (
    <>
    <Sidenav/>
    <Header/>
    <Outlet/>
    </>
  )
}

export default LaywerLayout