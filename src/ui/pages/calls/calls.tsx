import React, {useEffect} from 'react';
import {getCallsPackTC} from '../../../bll/reducers/calls-reducer';
import {useAppDispatch, useAppSelector} from '../../../bll/store';
import CallsRow from './calls-row';

const Calls = () => {
    const dispatch = useAppDispatch();
    const callsList = useAppSelector((state) => state.calls.results);
    const total = useAppSelector((state) => state.calls.total_rows);

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
        <div>
            <div>Header</div>
            <div>{total}</div>
            <div>{tableBody}</div>
        </div>
    );
};
export default Calls;