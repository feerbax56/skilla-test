import React from 'react';
import s from './header.module.css'
import {KeyboardArrowDown, Search} from '@mui/icons-material';
import avatar from '../../../assets/avatar/avatar.svg'


const Header = () => {
    return (
        <div className={s.headerBlock}>
            <div className={s.headerText}>Среда, 13 окт</div>
            <div>аналитика</div>
            <Search/>
            <div className={s.headerText}>ИП Сидорова Александра Михайловна
                <KeyboardArrowDown/>
            </div>
            <div>
                <img src={avatar} alt="avatar"/>
                <KeyboardArrowDown/>
            </div>
        </div>
    );
};

export default Header;