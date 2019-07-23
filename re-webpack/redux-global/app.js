
import React  from 'react'

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import actions from './redux/actions.js'


class App extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <div>aaaa</div>
            <div>{this.props.num}</div>
            <button onClick={this.props.actions.add}>Add</button>
        </div>;
    }
}


function mapStateToProps(state){
    return state;
}

var mapDispatchToProps = function (dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
