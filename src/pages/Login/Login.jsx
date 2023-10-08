import React, { useState } from 'react'
import styles from './Login.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { checkFill } from '../../utils/checkInputFill';
import { checkUser } from '../../utils/checkUser';
import { useNavigate } from 'react-router-dom'
import { LOG_IN }  from '../../Actions/Types'
import { createNotification } from '../../Components/Notifications/Notifications'

const Login = () => {
  
  const [fields, setFields] = useState({login: '', password: ''});
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {usersList} = useSelector(state => state.usersList);
  const {auth} = useSelector(state => state);
  
  const handleInput = ({name, value}) => {
    setFields(prev => ({
      ...prev, [name]: value
    }))
  }

  const handleSubmit = () => {
    if (checkFill(fields)) {
      const isUser = checkUser(usersList, fields); 
      if (isUser) {
        dispatch({ type: LOG_IN, payload: isUser });
        createNotification("success", 'С возвращением!', 'Успешно');
        navigate('/profile');
      } else {
        createNotification("error", 'Имя пользователя или пароль введены не верно!', 'Ошибка');
      }
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.form}>
        {auth.isAuth ? 
          <div className={styles.title}>Вы уже вошли в свой аккаунт.</div>
        : 
        <>
          <input type='text' placeholder='Логин' name='login' value={fields.login} onChange={({target}) => handleInput(target)}/>
          <input type='password' placeholder='Пароль' name='password' value={fields.password} onChange={({target}) => handleInput(target)}/>
          <button className={styles.formButton} onClick={handleSubmit}>Войти</button>
        </>}
      </div>
    </div>
  )
}

export default Login