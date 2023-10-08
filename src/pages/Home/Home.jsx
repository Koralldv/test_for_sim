import React from 'react'
import styles from './Home.module.css'
import { BiSolidHeart } from 'react-icons/bi';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Добашняя страница, чтобы было. Всем нужен дом, даже приложениям.</h1> 
      <i className={styles.icon}><BiSolidHeart/></i>
    </div>
  )
}

export default Home