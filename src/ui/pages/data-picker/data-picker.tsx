import React from 'react';
import {CalendarToday, KeyboardArrowLeft, KeyboardArrowRight} from '@mui/icons-material';
import s from './data-picker.module.css'
import {Button} from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import dayjs from 'dayjs';
import {DemoContainer, DemoItem} from '@mui/x-date-pickers/internals/demo';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DateRangePicker} from '@mui/x-date-pickers-pro/DateRangePicker';

const DataPicker = () => {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={s.dataPickerBlock}>
            <Button>
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
                <span>3 дня</span>
            </Button>
            <Button><KeyboardArrowRight/></Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>3 дня</MenuItem>
                <MenuItem onClick={handleClose}>Неделя</MenuItem>
                <MenuItem onClick={handleClose}>Месяц</MenuItem>
                <MenuItem onClick={handleClose}>Год</MenuItem>
                <MenuItem onClick={handleClose}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer
                            components={[
                                'DateRangePicker',
                                'MobileDateRangePicker',
                                'DesktopDateRangePicker',
                                'StaticDateRangePicker',
                            ]}
                        >
                            <DemoItem label="Указать даты" component="DateRangePicker">
                                <DateRangePicker
                                    defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
                                />
                            </DemoItem>
                        </DemoContainer>
                    </LocalizationProvider>
                </MenuItem>
            </Menu>
        </div>
    );
};

export default DataPicker;