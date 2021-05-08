import api from '../../api'
import { URL } from '../../constants'

export const ACTION_ADD_USER = 'ACTION_ADD_USER';
export const ACTION_EDIT_USER = 'ACTION_EDIT_USER';
export const ACTION_DELETE_USER = 'ACTION_DELETE_USER';
export const ACTION_SET_USERS = 'ACTION_SET_USERS';

export const fetchUsers = () => {
    return (dispatch) => {
        api.get(URL).then(({data}) => {
            dispatch({
                type: ACTION_SET_USERS,
                payload: data
            })
        });
    }
};

export const deleteUser = (id) => {
    return (dispatch) => {
        api.delete(URL + id);
        dispatch({
            type: ACTION_DELETE_USER,
            payload: id
        });
    }
};
export const addUser = (user) => {
    return (dispatch) => {
        api.post(URL, user ).then(({data}) => {
            dispatch({
                type: ACTION_ADD_USER,
                payload: data
            })
        });
    }
};

export const editUser = (user) => {
    return (dispatch) => {
        api.put(URL + user.id, user ).then(({ data }) => {
            dispatch({
                type: ACTION_EDIT_USER,
                payload: data
            })
        });
    }
};
