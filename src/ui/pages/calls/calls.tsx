import React, {useEffect} from 'react';
import {callsAPI} from '../../../dal/callsAPI';
import {getCalls} from '../../../bll/reducers/calls-reducer';
import {useAppSelector} from '../../../bll/store';
import CallsRow from './calls-row';


const Calls = () => {

    const callsList = useAppSelector(state => state.calls.results)
    const total = useAppSelector(state => state.calls.total_rows)

    const tableBody = callsList.length ?
        (
            callsList.map((row) => (
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
            )))
        : (<div>Calls not found. Choose other search parameters.</div>)

    useEffect(() => {

        const fetchCallsList = async () => {
            const data = await callsAPI.getCallsList('2023-01-01', '2023-05-30');
            getCalls(data.data);
        };
        console.log('useEffect')
        fetchCallsList();
    }, []);

    const stateLog = () => {
        console.log(callsList)
    }

    return (
        <div>
            <div>шапка</div>
            <div>{total}</div>
            <div>
                {tableBody}
            </div>
            <button onClick={stateLog}>1111</button>
        </div>
    );
};

export default Calls;