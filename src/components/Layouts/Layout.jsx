import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Outlet} from 'react-router-dom'
function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main >
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout