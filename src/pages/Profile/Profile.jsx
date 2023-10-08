import React from 'react'
import styles from './Profile.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { LOG_OUT }  from '../../Actions/Types'

const Profile = () => {
  
  const userName = useSelector((state) => state.auth.userName);
  const dispatch = useDispatch();

  const handleOut = () => dispatch({ type: LOG_OUT });

  return (
      <div className={styles.wrapper}>
        <div className={styles.welcome}>Здравствуйте <span className={styles.userName}>{userName}</span>!</div>
        <button className={styles.out} onClick={handleOut}>Выйти</button>
      </div>
  )
}

export default Profile