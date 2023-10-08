import React from 'react'
import styles from './NotFound.module.css'
import { BiSolidGhost } from 'react-icons/bi';

const NotFound = () => {
  return (
        <div className={styles.wrapper}>
            <div className={styles.preTitle}>404</div>
            <div className={styles.title}>Страница не найдена</div>
            <i className={styles.icon}><BiSolidGhost/></i>
        </div>
  )
}

export default NotFound