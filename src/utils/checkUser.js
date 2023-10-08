export const checkUser = (usersList, {login, password}) => {
    const isUser = usersList.find(user => user.login === login && user.password === password);
    return isUser ? {userName: isUser.name, isAuth: true} : false;
} 