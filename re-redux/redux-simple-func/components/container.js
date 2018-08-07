import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import actions from '../redux/actions.js'
import App from './app.js';


function mapStateToProps(state) {
    return state;
}

var mapDispatchToProps = function (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);