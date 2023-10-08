import React from 'react'
import styles from './Header.module.css'
import { Link, useLocation } from 'react-router-dom'
import { menu_list } from '../../assets/const'

const Header = () => {

    const local = useLocation();
    const getActivePage = ( path ) => `/${path}` == local.pathname ? 'link_active' : 'link';    

  return (
    <div className={styles.wrapper}>
        {menu_list.map(el => 
        <Link to={el.path} key={el.title}>
            <div className={styles[getActivePage(el.path)]}>
                <i className={styles.icon}>{el.icon}</i>
                <span className={styles.title}>{el.title}</span>
            </div>
        </Link>
        )}
    </div>
  )
}

export default Header