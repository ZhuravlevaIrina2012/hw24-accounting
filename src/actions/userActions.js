import {base_url} from "../utils/Constants";

export const SUCCESS_ACTION = 'SUCCESS_ACTION';
export const ERROR_REGISTRATION = 'ERROR_REGISTRATION';
export const ERROR_EDIT = 'ERROR_EDIT';
export const ERROR_LOGIN = 'ERROR_LOGIN';
export const ERROR_NEW_PASSWORD = 'ERROR_NEW_PASSWORD';

export const successAction = data => (
    {
        type: SUCCESS_ACTION,
        payload: {
            firstName: data.firstName,
            lastName: data.lastName
        }
    }
)

export const errorEditInfoAction = () => (
    {
        type: ERROR_EDIT,
        payload: 'Edit Info Error'
    }
)

export const errorRegistrationAction = () => (
    {
        type: ERROR_REGISTRATION,
        payload: 'Registration Error'
    }
)

export const errorLoginAction = () => (
    {
        type: ERROR_LOGIN,
        payload: 'Error information'
    }
)

export const errorChangePassword = () => (
    {
        type: ERROR_NEW_PASSWORD,
        payload: 'Forbidden'
    }
)

export const registerUserAction = userInfo => {
    return dispatch => {
        fetch(`${base_url}/user`, {
            method: 'POST',
            body: JSON.stringify(userInfo),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                localStorage.setItem('user', JSON.stringify({
                    login: userInfo.login,
                    password: userInfo.password
                }));
                dispatch(successAction(data));
            })
            .catch(e => {
                console.log(e.message);
                dispatch(errorRegistrationAction());
            });
    }
}


export const editInfoUserAction = newUserInfo => {
    const user =JSON.parse(localStorage.getItem('user'));
    return dispatch => {
        fetch(`${base_url}/user`, {
            method: 'PUT',
            body: JSON.stringify(newUserInfo),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${btoa(user.login +':' + user.password)}`
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => dispatch(successAction(data)))
            .catch(e => {
                console.log(e.message);
                dispatch(errorEditInfoAction());
            });
    }
}

export const loginUserAction = user => {
    return dispatch => {
        fetch(`${base_url}/login`, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${btoa(user.login+':'+user.password)}`
            }
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('' + response.status);
                }
            })
            .then(data => {
                localStorage.setItem('user', JSON.stringify({
                    login: user.login,
                    password: user.password
                }));
                dispatch(successAction(data))
            })
            .catch(e => {
                console.log(e.message);
                dispatch(errorLoginAction());
            });
    }
}

export const changePasswordAction = passwords => {
    const user =JSON.parse(localStorage.getItem('user'));
    return dispatch => {
        fetch(`${base_url}/user/password`, {
            method: 'PUT',
            headers: {
                'Authorization': `Basic ${btoa(user.login+':'+user.password)}`,
                'X-Password': `${passwords.oldPassword} - ${passwords.newPassword}`
            }
        })
            .then(response => {
                if (response.ok) {
                    localStorage.setItem('user', JSON.stringify({
                        login: user.login,
                        password: passwords.newPassword
                    }))
                } else {
                    throw new Error('' + response.status);
                }
            })
            .catch(e => {
                console.log(e.message);
                dispatch(errorChangePassword());
            });
    }
}