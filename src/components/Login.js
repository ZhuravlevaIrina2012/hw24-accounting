import React, {useState} from 'react';
import {profilePage} from "../utils/Constants";
import {Link} from "react-router-dom";

const Login = props => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleClickLogin = () => {
        props.loginUser({login, password});
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
                <Link onClick={handleClickLogin} to={`/${profilePage}`} className='btn-grey'>Login</Link>
                <Link to={`/`} className='btn-grey'>Reset</Link>
            </div>
            }
            <p>{props.message}</p>
        </div>
    );
};

export default Login;