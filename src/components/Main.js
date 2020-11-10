import React from 'react';
import {Link, Route} from "react-router-dom";
import {loginPage, registerPage} from "../utils/Constants";

const Main = () => {
    return (
        <div>
            <Link to={`/${loginPage}`} className='btn-grey'>Login</Link>
            <Link to={`/${registerPage}`} className='btn-grey'>Register</Link>
        </div>
    );
};

export default Main;