import Footer from 'components/Footer'
import Header from 'components/Navbar/Navbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div className="flex flex-col items-center justify-start w-full bg-gray-50">
        <Header className="flex justify-center items-center w-full p-6 sm:p-5 bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full px-16 gap-10">
            <Outlet />
            <Footer className="flex flex-col items-center justify-center w-full" />
        </div>
    </div>
  )
}

export default Layout
