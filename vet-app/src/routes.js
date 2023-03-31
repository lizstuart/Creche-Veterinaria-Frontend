import SignIn from './pages/SignIn';
import Home from './pages/Home';
import { Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { getItem } from './Utils/storage';

function ProtectedRoutes({ redirectTo }) {
  const isAuthenticated = getItem('token');

  return isAuthenticated ? <Outlet/> : <Navigate to={redirectTo} />
}

function MainRoutes() {
    return (
        <Routes>
          <Route path='/' element={<SignIn />} />
    
          <Route element={<ProtectedRoutes redirectTo='/' />}>
            <Route path='/home' element={<Home/>} />
          </Route>
        </Routes>
      )   
}

export default MainRoutes;
