import { Button, TableCell, TableRow } from '@material-ui/core';
import React from 'react';
import { useHistory } from 'react-router-dom';

export default function User({ user, onDelete }) {
    const history = useHistory();
    
    function onItemClick() {
        history.push('/users/' + user.id);
    };

    function onDeleteBtnClick(e) {
        e.stopPropagation();
        onDelete(user.id);
    };
    
    return (
        <TableRow onClick={onItemClick}>
            <TableCell component="th" scope="row">{user.name}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell align="right">
                <Button
                variant="contained"
                color="primary"
                onClick={onDeleteBtnClick}>
                    Delete
                </Button>
            </TableCell>
        </TableRow>
    )
}

