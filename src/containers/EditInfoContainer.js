import {bindActionCreators} from "redux";
import {editInfoUserAction} from "../actions/userActions";
import {connect} from "react-redux";
import EditInfo from "../components/EditInfo";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        editInfo: editInfoUserAction
    }, dispatch);
}

function mapStateToProps (state){
    return{
        firstName: state.firstName,
        lastName: state.lastName
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditInfo);