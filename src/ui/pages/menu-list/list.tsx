import React from 'react';
import Item from '../menu-item/item';
import {
    Description,
    DoneAll,
    Group,
    LocalLibrary,
    MailOutline,
    Person,
    Phone, Settings,
    Timeline,
    WorkOutline
} from '@mui/icons-material';


const List = () => {
    const listItem = [
        {id: 1, icon: <Timeline/>, text: 'Итоги'},
        {id: 2, icon: <DoneAll/>, text: 'Заказы'},
        {id: 3, icon: <MailOutline/>, text: 'Сообщения'},
        {id: 4, icon: <Phone/>, text: 'Звонки'},
        {id: 5, icon: <Group/>, text: 'Контрагенты'},
        {id: 6, icon: <Description/>, text: 'Документы'},
        {id: 7, icon: <Person/>, text: 'Исполнители'},
        {id: 8, icon: <WorkOutline/>, text: 'Отчеты'},
        {id: 9, icon: <LocalLibrary/>, text: 'База знаний'},
        {id: 10, icon: <Settings/>, text: 'Настройки'},
    ];
    return <Item listItem={listItem}/>
};

export default List;