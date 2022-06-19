import React, { Fragment } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
interface Props {
    children: React.ReactNode;
  }
const Layout:React.FC<Props> = ({children}) => {
  return (
    <Fragment>
      <Navbar/>
      {children}
      <Footer/>
    </Fragment>
  )
}

export default Layout
