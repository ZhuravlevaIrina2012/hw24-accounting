import {bindActionCreators} from "redux";
import {loginUserAction} from "../actions/userActions";
import {connect} from "react-redux";
import Login from "../components/Login";

function mapStateToProps (state){
    return{
        firstName: state.firstName,
        lastName: state.lastName,
        message: state.message
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        loginUser: loginUserAction
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);