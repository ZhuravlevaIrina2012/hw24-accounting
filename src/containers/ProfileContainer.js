import Profile from "../components/Profile";
import {connect} from "react-redux";

function mapStateToProps (state){
    return{
        firstName: state.firstName,
        lastName: state.lastName
    }
}

export default connect(mapStateToProps)(Profile);