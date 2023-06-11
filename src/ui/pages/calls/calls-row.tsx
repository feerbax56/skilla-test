import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import failCall from '../../../../src/assets/calls/fail.svg'
import successCall from '../../../../src/assets/calls/success.svg'
import outCall from '../../../../src/assets/calls/out.svg'

type PropsType = {
    key: number,
    in_out: number,
    date: string,
    person_avatar: string,
    from_number: string,
    source: string,
    status: string,
    time: number
}

function secondsToTime(seconds: number): string | undefined {
    if (seconds === 0) {
        return undefined;
    }
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = Math.floor(minutes % 60);
    const remainingSeconds = Math.floor(seconds % 60);
    let time = '';
    if (hours > 0) {
        time += `${hours.toString().padStart(2, '0')}:`;
    }
    if (remainingMinutes > 0 || hours > 0) {
        time += `${remainingMinutes.toString().padStart(2, '0')}:`;
    } else {
        time += '00:';
    }
    time += `${remainingSeconds.toString().padStart(2, '0')}`;
    return time;
}


const CallsRow: React.FC<PropsType> = ({
                                           key,
                                           in_out,
                                           date,
                                           person_avatar,
                                           from_number,
                                           source,
                                           status,
                                           time
                                       }) => {

    const typeCall = status === 'Не дозвонился' ? failCall : in_out === 1 ? successCall : outCall
    const timeCall = date.slice(10, 16)


    const lenghtTime = secondsToTime(time)

    return (
        <TableRow key={key}>
            <TableCell align="left"><img src={typeCall} alt="typeCall"/></TableCell>
            <TableCell align="left">{timeCall}</TableCell>
            <TableCell align="left"><img src={person_avatar} alt="avatarPerson"/></TableCell>
            <TableCell align="left">{from_number}</TableCell>
            <TableCell align="left">{source}</TableCell>
            <TableCell align="left">
                <button>Распознать</button>
            </TableCell>
            <TableCell align="right">{lenghtTime}</TableCell>
        </TableRow>
    );
};
export default CallsRow;