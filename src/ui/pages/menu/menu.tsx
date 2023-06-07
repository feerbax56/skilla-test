import React from 'react';
import s from './menu.module.css'
import skilla from '../../../assets/logo/skilla.svg'
const Menu = () => {
    return (
        <div className={s.menuBlock}>
            <img src={skilla} alt="logo" className={s.logoSkilla}/>
        </div>
    );
};

export default Menu;