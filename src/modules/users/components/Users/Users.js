import React, { useEffect } from 'react';
import User from '../User/User';
import { connect } from 'react-redux';
import { deleteUser, fetchUsers} from '../../../../store/actions/actions';
import { useHistory } from 'react-router-dom';
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core';

function Users({ users, deleteUser, fetchUsers }) {
    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);
    const history = useHistory();
    
    return (
        <Container maxWidth="xl">
            <Typography align="center" variant="h4">Users</Typography>
            <TableContainer component={Paper}>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Phone</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <User key={user.id} user={user} onDelete={deleteUser} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="secondary" onClick={() => history.push('/add')}>ADD</Button>
        </Container>
    );
}

const mapStateToProps = (state) => ({ users: state.users });

const mapDispatchToProps =  {
        deleteUser,
        fetchUsers,
};


export default connect(mapStateToProps, mapDispatchToProps)(Users);