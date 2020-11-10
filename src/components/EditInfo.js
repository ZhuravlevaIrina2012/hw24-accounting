import React, {useState} from 'react';
import {profilePage} from "../utils/Constants";
import {Link} from "react-router-dom";

const EditInfo = props => {
    const [newFirstName, setNewFirstName] = useState('');
    const [newLastName, setNewLastName] = useState('');

    const handleClickEditInfo = () => {
        props.editInfo({
            firstName: newFirstName,
            lastName: newLastName
        });
        setNewFirstName('');
        setNewLastName('');
    }

    return (
        <div>
            <h3>First name: {props.firstName}</h3>
            <h3>Last name: {props.lastName}</h3>
            <label htmlFor='newFirstName'>New first name:</label>
            <input
                value={newFirstName}
                onChange={event => setNewFirstName(event.target.value)}
                type='text'
                name='newFirstName'/>
            <label htmlFor='newLastName'>New last name:</label>
            <input
                value={newLastName}
                onChange={event => setNewLastName(event.target.value)}
                type='text'
                name='newLastName'/>
            <Link to={`/${profilePage}`} onClick={handleClickEditInfo} className='btn-grey'>Accept</Link>
            <Link to={`/${profilePage}`} className='btn-grey'>Cancel</Link>
        </div>
    );
};

export default EditInfo;