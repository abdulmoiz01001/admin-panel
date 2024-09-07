import React from 'react'

const DashboardComp = () => {
  return (
    <>
      <div className="w-[90%] bg-gray-900 text-white h-full flex flex-col p-4 space-y-6">
  <h1 className="text-3xl text-center text-white">Dashboards</h1>
  
  <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="bg-gray-800 shadow-lg p-6 rounded-lg flex flex-col justify-center items-center" style={{ height: '12rem' }}>
      <h2 className="text-xl font-semibold mb-2">Active Users</h2>
      <p className="text-3xl">54</p>
    </div>
    
    <div className="bg-gray-800 shadow-lg p-6 rounded-lg flex flex-col justify-center items-center" style={{ height: '12rem' }}>
      <h2 className="text-xl font-semibold mb-2">Orders</h2>
      <p className="text-3xl">23</p>
    </div>
    
    <div className="bg-gray-800 shadow-lg p-6 rounded-lg flex flex-col justify-center items-center" style={{ height: '12rem' }}>
      <h2 className="text-xl font-semibold mb-2">Sales</h2>
      <p className="text-3xl">RS-6777</p>
    </div>
  </div>
  
  <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
    <div className="bg-gray-800 shadow-lg p-6 rounded-lg flex flex-col justify-center items-center" style={{ height: '12rem' }}>
      <h2 className="text-xl font-semibold mb-2">Pending Tasks</h2>
      <p className="text-3xl">15</p>
    </div>
  </div>
</div>

    </>
  )
}

export default DashboardComp
