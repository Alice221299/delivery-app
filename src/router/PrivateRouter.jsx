import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = ({isAutenticated}) => {
  return (
    <div>
        {
        isAutenticated ? <Outlet/> : <Navigate to={"/"}/>
      }
    </div>
  )
}

export default PrivateRouter