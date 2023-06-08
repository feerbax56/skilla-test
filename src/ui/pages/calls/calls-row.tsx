import React from 'react';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

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

const CallsRow = (props: PropsType) => {
    return (
        <div key={props.key}>
            <TableRow>
                <TableCell align="left">{props.in_out}</TableCell>
                <TableCell align="left">{props.date}</TableCell>
                <TableCell align="left">{props.person_avatar}</TableCell>
                <TableCell align="left">{props.from_number}</TableCell>
                <TableCell align="left">{props.source}</TableCell>
                <TableCell align="left">{props.status}</TableCell>
                <TableCell align="left">{props.time}</TableCell>
            </TableRow>
        </div>
    );
};

export default CallsRow;