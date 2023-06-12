import React, {useCallback, useEffect} from 'react';
import s from './filters.module.css'
import {Close, KeyboardArrowDown} from '@mui/icons-material';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {changeTypeCall, FiltersType} from '../../../bll/reducers/filter-reducer';
import {useAppDispatch} from '../../../bll/store';


const Filters = () => {
    const dispatch = useAppDispatch();
    const [callType, setCallType] = React.useState<FiltersType['callType']>('все');

    const handleChange = useCallback((event: SelectChangeEvent) => {
        setCallType(event.target.value as FiltersType['callType']);
    }, []);


    useEffect(() => {
        dispatch(changeTypeCall(callType))
    }, [callType]);

    const resetFilters = () => {
        setCallType('все')
        dispatch(changeTypeCall('все'))
    }

    return (
        <div className={s.filtersBlock}>
            {callType !== 'все' && <div className={s.filterDiv} onClick={resetFilters}>сбросить фильтр <Close/></div>}
            <div className={s.filterDiv}>
                <Box>
                    <FormControl fullWidth>
                        <Select
                            value={callType}
                            onChange={handleChange}
                        >
                            <MenuItem value={'входящий'}>Входящие</MenuItem>
                            <MenuItem value={'исходящий'}>Исходящие</MenuItem>
                            <MenuItem value={'все'}>Все типы</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className={s.filterDiv}>Все сотрудники <KeyboardArrowDown/></div>
            <div className={s.filterDiv}>Все звонки <KeyboardArrowDown/></div>
            <div className={s.filterDiv}>Все источники <KeyboardArrowDown/></div>
            <div className={s.filterDiv}>Все оценки <KeyboardArrowDown/></div>
            <div className={s.filterDiv}>Все ошибки <KeyboardArrowDown/></div>
        </div>
    );
};

export default Filters;