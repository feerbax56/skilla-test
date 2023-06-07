import React from 'react';
import s from './content.module.css'
import Cals from '../calls/cals';
import {IconButton} from '@mui/material';
import {ControlPoint} from '@mui/icons-material';
import Filters from '../filters/filters';
import Search from '../search/search';

const Content = () => {
    return (
        <div className={s.contentBlock}>
            <div>
                <div className={s.addBalance}>
                    Баланс:
                    <span className={s.price}> 272 ₽
                      <IconButton aria-label="ControlPoint" color="primary">
                        <ControlPoint/>
                      </IconButton>
                    </span>
                </div>
                <div>
                    data picker
                </div>

            </div>
            <div>
                <Search/>
               <Filters/>
            </div>
            <div>
                <Cals/>
            </div>
        </div>
    );
};

export default Content;