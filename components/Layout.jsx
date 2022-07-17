import React from 'react'
import { Header, Footer } from './'
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className=" min-h-screen">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
