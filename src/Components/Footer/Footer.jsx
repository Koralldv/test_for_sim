import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.title}>Тестовое задание <span className={styles.company}>СИМ-1</span></div>
    </div>
  )
}

export default Footer