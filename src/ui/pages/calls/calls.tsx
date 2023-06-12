import React, {useEffect, useMemo} from 'react';
import {getCallsPackTC} from '../../../bll/reducers/calls-reducer';
import {useAppDispatch, useAppSelector} from '../../../bll/store';
import CallsRow from './calls-row';
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
    const dateStart = useAppSelector(state => state.date.date_start)
    const dateEnd = useAppSelector(state => state.date.date_end)
    const callType = useAppSelector(state => state.date.callType)


    useEffect(() => {
        dispatch(getCallsPackTC(dateStart, dateEnd))
    }, [dateStart, dateEnd]);

    const callListFiltered = React.useMemo(() => {
        if (callType === 'входящий') {
            return callsList.filter(row => row.in_out === 1);
        } else if (callType === 'исходящий') {
            return callsList.filter(row => row.in_out === 0);
        } else {
            return callsList;
        }
    }, [callType, callsList]);

    const tableBody = useMemo(() =>
            callListFiltered.map((row) => (
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
            )),
        [callListFiltered]
    );
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