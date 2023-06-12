import React, {useEffect, useState} from 'react';
import {CalendarToday, KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material';
import s from './data-picker.module.css'
import {Button} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useAppDispatch} from '../../../bll/store';
import {getDate} from '../../../bll/reducers/filter-reducer';
import {plural} from '../../../utils/utils';


const DataPicker = () => {
    const dispatch = useAppDispatch();
    const [daysAgo, setDaysAgo] = useState<number>(3);
    const [dateEnd, setDateEnd] = useState<string>(new Date().toISOString().slice(0, 10));
    const [dateStart, setDateStart] = useState<string>(new Date(Date.now() - (daysAgo * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10));
// загрузка первичных данных за 3 дня
    useEffect(() => {
        dispatch(getDate(dateStart, dateEnd))
    }, [dateStart, dateEnd]);


    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const DayBack = () => {
        if (daysAgo > 1) {
            setDaysAgo(daysAgo - 1);
            setDateStart(new Date(Date.now() - (daysAgo * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10))
        }
    }
    const DayForward = () => {
        setDaysAgo(daysAgo + 1);
        setDateStart(new Date(Date.now() - (daysAgo * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10))
    }

    const setTreeDays = () => {
        setDaysAgo(3);
        setDateStart(new Date(Date.now() - (daysAgo * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10))
    }
    const setWeekDays = () => {
        setDaysAgo(7);
        setDateStart(new Date(Date.now() - (daysAgo * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10))
    }
    const setMonthDays = () => {
        setDaysAgo(30);
        setDateStart(new Date(Date.now() - (daysAgo * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10))
    }
    const setYearDays = () => {
        setDaysAgo(365);
        setDateStart(new Date(Date.now() - (daysAgo * 24 * 60 * 60 * 1000)).toISOString().slice(0, 10))
    }

    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const selectedDate = event.target.value ? new Date(event.target.value) : null;
        const today = new Date();
        const startDate = selectedDate ? new Date(Math.min(selectedDate.getTime(), today.getTime())) : today;
        setStartDate(startDate.toISOString().slice(0, 10));
    };
    const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const selectedDate = event.target.value ? new Date(event.target.value) : null;
        const today = new Date();
        const endDate = selectedDate ? new Date(Math.min(selectedDate.getTime(), today.getTime())) : today;
        setEndDate(endDate.toISOString().slice(0, 10));
    };
    const handleSave = () => {
        const formattedStartDate = formatDate(startDate);
        const formattedEndDate = formatDate(endDate);
        setDateStart(formattedStartDate)
        setDateEnd(formattedEndDate)
        const Days = (new Date(formattedEndDate).getTime() - new Date(formattedStartDate).getTime()) / (1000 * 3600 * 24)
        setDaysAgo(Days === 0 ? 1 : Days)
    };
    const formatDate = (date: string) => {
        const [day, month, year] = date.split('-');
        return `${day}-${month}-${year}`;
    };

    return (
        <div className={s.dataPickerBlock}>
            <Button onClick={DayBack} disabled={daysAgo === 1}>
                <KeyboardArrowLeft/>
            </Button>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <CalendarToday/>
                <span className={s.data}>{daysAgo}
                    <span> {`${plural(daysAgo, {one: 'день', few: 'дня', many: 'дней'})}`}</span>
                </span>
            </Button>
            <Button onClick={DayForward}><KeyboardArrowRight/></Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => {
                    handleClose();
                    setTreeDays()
                }}>3 дня</MenuItem>
                <MenuItem onClick={() => {
                    handleClose();
                    setWeekDays()
                }}>Неделя</MenuItem>
                <MenuItem onClick={() => {
                    handleClose();
                    setMonthDays()
                }}>Месяц</MenuItem>
                <MenuItem onClick={() => {
                    handleClose();
                    setYearDays()
                }}>Год</MenuItem>
                <MenuItem>
                    <div className={s.dataSave}>
                        <div>
                            Указать даты
                        </div>
                        <div>
                            <input type="date" id="startDate" max={endDate} value={startDate}
                                   onChange={handleStartDateChange}/>
                            <label htmlFor="endDate">-</label>
                            <input type="date" id="endDate" min={startDate} value={endDate}
                                   onChange={handleEndDateChange}/>
                            <Button onClick={() => {
                                handleClose();
                                handleSave()
                            }} disabled={!(startDate && endDate)}>
                                <CalendarToday/>
                            </Button>
                        </div>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default DataPicker;