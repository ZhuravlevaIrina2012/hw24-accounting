import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {profilePage} from "../utils/Constants";

const Register = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleClickRegister = () => {
        props.registerUser({
            firstName, lastName, login, password
        });
        setFirstName('');
        setLastName('');
        setLogin('');
        setPassword('');
    }

    return (
        <div>
            {!props.message &&
            <div>
                <label htmlFor='login'>Login:</label>
                <input
                    value={login}
                    onChange={event => setLogin(event.target.value)}
                    type='text'
                    name='login'/>
                <label htmlFor='password'>Password:</label>
                <input
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    type='password'
                    name='password'/>
                <label htmlFor='firstName'>First name:</label>
                <input
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                    type='text'
                    name='firstName'/>
                <label htmlFor='lastName'>Last name:</label>
                <input
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                    type='text'
                    name='lastName'/>
                <Link onClick={handleClickRegister} to={`/${profilePage}`} className='btn-grey'>Register</Link>
                <Link to={`/`} className='btn-grey'>Reset</Link>
            </div>
            }
            <p>{props.message}</p>
        </div>
    );
};

export default Register;