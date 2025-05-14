import React from 'react'
import { Outlet } from 'react-router-dom'

const CenterLayout = () => {
  return (
    <div className='center-wrapper'>
        <main>
            {/* much like renderbody in mvc */}
            <Outlet />
        </main>
    </div>
  )
}

export default CenterLayout