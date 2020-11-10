import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import ChangePassword from "../components/ChangePassword";
import {changePasswordAction} from "../actions/userActions";

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        changePassword: changePasswordAction
    }, dispatch);
}

function mapStateToProps (state){
    return{
        firstName: state.firstName,
        lastName: state.lastName
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);