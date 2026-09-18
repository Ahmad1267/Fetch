import React from 'react'
import Header1 from './Header1'
import Footer1 from './Footer1'
import { Outlet } from 'react-router'

export default function RootLayout() {
  return (
    <div>
      <Header1/>
    <Outlet/>

      <Footer1/>
    </div>
  )
}

