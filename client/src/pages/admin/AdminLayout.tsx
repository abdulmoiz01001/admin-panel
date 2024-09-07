import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardSidebar from '@/components/admin/custom/DashboardSidebar'
import DashboardHeader from '@/components/admin/custom/DashboardHeader'


const AdminLayout = () => {
  return (
   <>
   <div className='w-[100vw] min-h-[90vh] flex flex-col'>
    {/* <DashboardHeader onOpen={() => {}} /> */}
    <DashboardHeader />
    <div className='w-full h-[90vh] justify-center flex'>
        {/* <DashboardSidebarComp /> */}
        <DashboardSidebar />
      
          <div className=' w-[90%]   bg-gray-100 h-full flex flex-col p-4 space-y-4'>
          <Outlet />
    </div> 
     
    </div>
</div>

   </>
  )
}

export default AdminLayout
