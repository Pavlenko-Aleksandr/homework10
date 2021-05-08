import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { addUser, editUser} from '../../../../store/actions/actions';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
    },
    },
}));

const initialUser = {
    name: "",
    phone: "",
    email: "",
};

function Form({addUser, editUser, users}) {
    const { id } = useParams();
    const history = useHistory();
    const classes = useStyles();

    const [user, setUser] = useState(
        users.find((item) => id === item.id) ||
            initialUser);

    function onFormSubmit(e) {
    e.preventDefault();

    if (user.id) {
        editUser(user);
    } else {
        addUser(user);
    }

    history.goBack();
    resetForm();
    }

    function resetForm() {
    setUser(user);
    }
    
    const onInputChange = (e) => { 
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    return (
        <Container maxWidth="sm">
            <form className={classes.root} noValidate autoComplete="off">
                <input
                    required
                    type="text"
                    name="name"
                    defaultValue={user.name}
                    onChange={onInputChange}
                    placeholder="name"
                    /><br/>
                <input
                    required
                    type="tel"
                    name="phone"
                    defaultValue={user.phone}
                    onChange={onInputChange}
                    placeholder="phone"
                /><br/>
                <input
                    required
                    type="email"
                    name="email"
                    defaultValue={user.email}
                    onChange={onInputChange}
                    placeholder="email"
                /><br/>
                <Button variant="contained" color="primary" onClick={onFormSubmit}>Save user</Button><br/>
                <Button variant="contained" color="secondary" onClick={() => history.push('/users')}>Cancel</Button>
            </form>
        </Container>
    )
};

const mapStateToProps =  (state) => ({ users: state.users });

const mapDispatchToProps = {
        addUser,
        editUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
