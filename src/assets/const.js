import { BiHomeHeart, BiBookAdd, BiSolidUser, BiDoorOpen } from 'react-icons/bi';

export const menu_list = [
    {
        title: 'На главную',
        path: '',
        icon: <BiHomeHeart/>
    },
    {
        title: 'Профиль',
        path: 'profile',
        icon: <BiSolidUser/>
    },
    {
        title: 'Регистрация',
        path: 'registration',
        icon: <BiBookAdd/>
    },
    {
        title: 'Войти',
        path: 'login',
        icon: <BiDoorOpen/>
    },
];