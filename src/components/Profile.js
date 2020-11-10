import React from 'react';
import {Link} from "react-router-dom";
import {changePasswordPage, editInfoPage} from "../utils/Constants";

const Profile = props => {
    return (
        <div>
            <h3>First name: {props.firstName}</h3>
            <h3>Last name: {props.lastName}</h3>
            <Link to={`/profile/${editInfoPage}`} className='btn-grey'>Edit information</Link>
            <Link to={`/profile/${changePasswordPage}`} className='btn-grey'>Change password</Link>
            <Link to={`/`} className='btn-grey'>Logout</Link>
        </div>
    );
};

export default Profile;