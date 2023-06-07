import React from 'react';
import s from './menu.module.css'
import skilla from '../../../assets/logo/skilla.svg'
import {Button} from '@mui/material';
import {AddCircleOutline, ErrorOutline} from '@mui/icons-material';
import List from '../menu-list/list';

const Menu = () => {
    return (
        <div className={s.menuBlock}>
            <img src={skilla} alt="logo" className={s.logoSkilla}/>
            <List/>
            <div className={s.btnBlock}>
                <Button variant="contained" size={'medium'} endIcon={<AddCircleOutline/>}>
                    Добавить заказ
                </Button>
                <Button variant="contained" endIcon={<ErrorOutline/>}>
                    Оплата
                </Button>
            </div>

        </div>
    );
};

export default Menu;