import React, {useEffect} from 'react';
import {callsAPI} from '../../../dal/callsAPI';
import {getCalls} from '../../../bll/reducers/calls-reducer';
import {useAppSelector} from '../../../bll/store';
import {callsListSelector} from '../../../bll/selectors';
import CallsRow from './calls-row';


const Calls = () => {

    const callsList = useAppSelector(callsListSelector)
    const tableBody = callsList.length ? (
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
        ))
    ) : (
        <div>Calls not found. Choose other search parameters.</div>
    )

    useEffect(() => {
        callsAPI.getCallsList('2023-01-01', '2023-05-30')
            .then(data => {
                getCalls(data.data.results)
            })
    }, [])
    return (
        <div>
            <div>шапка</div>
            <div>
                {tableBody}
            </div>
        </div>
    );
};

export default Calls;