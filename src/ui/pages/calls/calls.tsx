import React, {useEffect} from 'react';
import {getCallsPackTC} from '../../../bll/reducers/calls-reducer';
import {useAppDispatch, useAppSelector} from '../../../bll/store';
import CallsRow from './calls-row';
import s from './calls.module.css'
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


const Calls = () => {
    const dispatch = useAppDispatch();
    const callsList = useAppSelector((state) => state.calls.results);

    const dateStart = '2023-03-01'
    const dateEnd = '2023-05-01'

    useEffect(() => {
        dispatch(getCallsPackTC(dateStart, dateEnd))
    }, []);


    const tableBody = callsList.map((row) => (
        <CallsRow
            key={row.id}
            in_out={row.in_out}
            date={row.date}
            person_avatar={row.person_avatar}
            from_number={row.from_number}
            source={row.source}
            status={row.status}
            time={row.time}
        />
    ));
    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{color: '#899CB1'}}>
                        <TableCell>Тип</TableCell>
                        <TableCell>Время</TableCell>
                        <TableCell>Сотрудник</TableCell>
                        <TableCell>Звонок</TableCell>
                        <TableCell>Источник</TableCell>
                        <TableCell>Оценка</TableCell>
                        <TableCell>Длительность</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>{tableBody}</TableBody>
            </Table>
        </TableContainer>
    );
};
export default Calls;