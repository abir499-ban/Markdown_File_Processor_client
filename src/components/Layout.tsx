import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = ({children} : {children : React.ReactNode}) => {
  return (
    <>
    <Header/>
    <div className='px-[100px] py-6 justify-center items-center text-center mx-auto'>
    <Outlet/>{children}
    </div>
    </>
  )
}

export default Layout