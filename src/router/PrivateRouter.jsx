// import React from 'react'
// import { Navigate, Outlet } from 'react-router-dom'

// const PrivateRouter = ({isAutenticated}) => {
//   return (
//     <div>
//         {
//         isAutenticated ? <Outlet/> : <Navigate to={"/home"}/>
//       }
//     </div>
//   )
// }

// export default PrivateRouter


import { Navigate, Outlet } from "react-router-dom";




const PrivateRouter = ({ isAuthenticate }) => {

    return (
        <div>{isAuthenticate ? <Outlet /> : <Navigate to={"/"} />}</div>
    )
}

export default PrivateRouter;