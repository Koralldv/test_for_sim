import React from 'react'
import { NotificationManager } from 'react-notifications'
import 'react-notifications/lib/notifications.css'

export const createNotification = (type, message, title, time) => {
  switch (type) {
    case 'info':
      NotificationManager.info(message, title, time)
      break
    case 'success':
      NotificationManager.success(message, title, time)
      break
    case 'warning':
      NotificationManager.warning(message, title, time)
      break
    case 'error':
      NotificationManager.error(message, title, time)
      break
    default:
      break
  }
}
