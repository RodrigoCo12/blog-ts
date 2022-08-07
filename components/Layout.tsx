import React from 'react'
import { Header, Footer } from './'
const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className=" min-h-screen">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
