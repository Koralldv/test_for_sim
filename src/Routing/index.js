import React, { useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Registration from '../pages/Registration/Registration';
import Profile from '../pages/Profile/Profile';
import NotFound from '../pages/NotFound/NotFound';
import Layout from '../Components/Layout/Layout';

const Routing = () => {

    const local = useLocation();
    const navigate = useNavigate();
    const isAuth = useSelector((state) => state.auth.isAuth);

    useEffect(() => {
        if (local.pathname == '/profile' && !isAuth)  {
            navigate('/login');
        }
        if (local.pathname == '/registration' && isAuth)  {
            navigate('profile');
          }
      }, [local, isAuth])

    return (
        <Routes>
            <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/registration' element={<Registration/>} />
            <Route path='/profile' element={<Profile/>} />
            <Route path='*' element={<NotFound/>} />
            </Route>
        </Routes>
  )
}

export default Routing;