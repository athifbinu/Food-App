import React from 'react'

import Header from "../Header/Header.jsx"
import Footer from "../Footer/Footer.jsx"

import Routers from '../../router/Routers'

const Layout = () => {
  return (
    <div>
      <Header/>
      <div>
        <Routers/>
      </div>
      <Footer/>
    </div>
  )
}

export default Layout
