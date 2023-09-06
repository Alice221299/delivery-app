// import React from 'react'
// import { Navigate, Outlet } from 'react-router-dom'

// const PublicRouter = ({isAutenticated}) => {
//   return (
//     <div>
//         {
//         isAutenticated ? <Navigate to={"/login"}/> : <Outlet/>
//     }
//     </div>
//   )
// }

// export default PublicRouter

import { Navigate, Outlet } from "react-router-dom";

const PublicRouter = ({ isAuthenticate }) => {
    return (
        <div>{isAuthenticate ? <Navigate to={"/home"} /> : <Outlet />}</div>
    )
}

export default PublicRouter;