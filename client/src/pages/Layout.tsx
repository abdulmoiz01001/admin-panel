import Footer from '@/components/Footer'
import TopHeader from '@/components/TopHeader'
import Navbar from '@/components/Navbar'

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='text-black'>
      <TopHeader/>
      <Navbar/>
      <Outlet />
      <Footer/>
    </div>
  )
}

export default Layout
