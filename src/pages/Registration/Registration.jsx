import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ADD_USER }  from '../../Actions/Types'
import { useSelector, useDispatch } from 'react-redux'
import styles from './Registration.module.css'
import { checkFill } from '../../utils/checkInputFill';
import { createNotification } from '../../Components/Notifications/Notifications'

const Registration = () => {
  
  const [fields, setFields] = useState({name: '', login: '', password: '', repeatPassword: ''});
  const [isRegistrate, setIsRegistrate] = useState(false);
  const dispatch = useDispatch();
  const {usersList} = useSelector(state => state.usersList);

  const handleInput = ({name, value}) => {
    setFields(prev => ({
      ...prev, [name]: value
    }))
  }

  const handleSubmit = () => {
    if (fields.password !== fields.repeatPassword) {
      return createNotification("error", 'Введенные пароли не совпадают!', 'Ошибка');
    }
    if (usersList.find(user => user.login === fields.login)) {
      return createNotification("error", 'Пользователь с таким логином уже зарегистрирован!', 'Ошибка');
    }
    if (checkFill(fields)) {
      const { name, login, password } = fields;
      dispatch({ type: ADD_USER, payload: { name, login, password } });
      setIsRegistrate(prev => true);
      createNotification("success", 'Аккаунт создан!', 'Успешно');
    }
  }

  return (
    <div className={styles.wrapper}>
  
      {!isRegistrate ?  
        <div className={styles.form}>
          <input type='text' placeholder='Имя' name='name' value={fields.name} onChange={({target}) => handleInput(target)}/>
          <input type='text' placeholder='Логин' name='login' value={fields.login} onChange={({target}) => handleInput(target)}/>
          <input type='password' placeholder='Пароль' name='password' value={fields.password} onChange={({target}) => handleInput(target)}/>
          <input type='password' placeholder='Повторите пароль' name='repeatPassword' value={fields.repeatPassword} onChange={({target}) => handleInput(target)}/>
          <button className={styles.formButton} onClick={handleSubmit}>Регистрация</button>        
        </div>
      
      : <Link to={'/login'} className={styles.formButton}>Войти</Link>}
    </div>
  )
}

export default Registration