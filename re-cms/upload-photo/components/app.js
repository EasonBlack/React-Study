import React , { Component } from 'react';
import UploadSection from './UploadSection.js'

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import actions from '../redux/actions.js'

class App extends Component {

    render() {
        return  <section>
           <UploadSection upload={this.props.actions.upload} />
        </section>;
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