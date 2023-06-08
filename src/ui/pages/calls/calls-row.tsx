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
    return (
        <TableRow key={key}>
            <TableCell align="left">{in_out}</TableCell>
            <TableCell align="left">{date}</TableCell>
            <TableCell align="left">{person_avatar}</TableCell>
            <TableCell align="left">{from_number}</TableCell>
            <TableCell align="left">{source}</TableCell>
            <TableCell align="left">{status}</TableCell>
            <TableCell align="left">{time}</TableCell>
        </TableRow>
    );
};
export default CallsRow;