import React from 'react';
import s from './content.module.css'
import Calls from '../calls/calls';
import {IconButton} from '@mui/material';
import {ControlPoint} from '@mui/icons-material';
import Filters from '../filters/filters';
import Search from '../search/search';
import DataPicker from '../data-picker/data-picker';

const Content = () => {
    return (
        <div className={s.contentBlock}>
            <div className={s.dataPickerBlock}>
                <div className={s.addBalance}>
                    Баланс:
                    <span className={s.price}> 272 ₽
                      <IconButton aria-label="ControlPoint" color="primary">
                        <ControlPoint/>
                      </IconButton>
                    </span>
                </div>
                <div>
                    <DataPicker/>
                </div>

            </div>
            <div className={s.filterBlock}>
                <Search/>
                <Filters/>
            </div>
            <div>
                <Calls/>
            </div>
        </div>
    );
};

export default Content;