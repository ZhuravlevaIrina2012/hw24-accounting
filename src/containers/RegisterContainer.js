import {registerUserAction} from "../actions/userActions";
import {bindActionCreators} from "redux";
import Register from "../components/Register";
import {connect} from "react-redux";

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        registerUser: registerUserAction
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(Register);