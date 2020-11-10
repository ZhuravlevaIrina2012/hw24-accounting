import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {profilePage} from "../utils/Constants";

const ChangePassword = props => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleClickChange = () => {
        props.changePassword({oldPassword, newPassword});
        setOldPassword('');
        setNewPassword('');
    }

    return (
        <div>
            <label htmlFor='oldPassword'>Old password:</label>
            <input
                value={oldPassword}
                onChange={event => setOldPassword(event.target.value)}
                type='password'
                name='oldPassword'/>
            <label htmlFor='newPassword'>New password:</label>
            <input
                value={newPassword}
                onChange={event => setNewPassword(event.target.value)}
                type='password'
                name='newPassword'/>
            <Link onClick={handleClickChange} to={`/${profilePage}`} className='btn-grey'>Change</Link>
            <Link to={`/${profilePage}`} className='btn-grey'>Cancel</Link>
        </div>
    );
};

export default ChangePassword;