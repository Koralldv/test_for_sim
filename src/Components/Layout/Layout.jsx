import React from 'react'
import styles from './Layout.module.css'
import { Outlet, useMatch } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const Layout = () => {
  return (
    <div className={styles.wrapper}>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
  )
}

export default Layout