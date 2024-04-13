 import { Navigate, Outlet } from 'react-router-dom';
 import Navbar from '../../components/Navbar/Navbar'
 // eslint-disable-next-line react/prop-types
 function ProtectedRoute({ currentUser }) {
     if (currentUser) {
         return (
             <>
             <Navbar />
                 <Outlet  />
             </>
         )
     } else {
         return <Navigate to={'/login'} />
     }
 }
 export default ProtectedRoute;