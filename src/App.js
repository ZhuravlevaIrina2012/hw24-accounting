import React from 'react';
import './App.css';
import Main from "./components/Main";
import {Route, Switch} from "react-router-dom";
import {changePasswordPage, editInfoPage, loginPage, profilePage, registerPage} from "./utils/Constants";
import Login from "./containers/LoginContainer";
import Register from "./containers/RegisterContainer";
import Profile from "./containers/ProfileContainer";
import EditInfo from "./containers/EditInfoContainer";
import ChangePassword from "./containers/ChangePasswordContainer";

const App = () => {
    return (
        <Switch>
            <Route path={`/`} exact component={Main}/>
            <Route path={`/${loginPage}`} exact component={Login}/>
            <Route path={`/${registerPage}`} exact component={Register}/>
            <Route path={`/${profilePage}`} exact component={Profile}/>
            <Route path={`/profile/${editInfoPage}`} exact component={EditInfo}/>
            <Route path={`/profile/${changePasswordPage}`} exact component={ChangePassword}/>
        </Switch>
    );
};

export default App;
