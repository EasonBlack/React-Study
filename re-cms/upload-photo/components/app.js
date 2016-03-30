import React , { Component } from 'react';
import UploadSection from './UploadSection.js'
import ImagePoint from './ImagePoint.js'

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import actions from '../redux/actions.js'

class App extends Component {

    render() {
        console.log(this.props.points);
        return  <section>
           <UploadSection upload={this.props.actions.upload}
                          addpoint={this.props.actions.addPoint}
                          points={this.props.points}
                          savepoints={this.props.actions.savePoints}/>
           <ImagePoint points={this.props.points} />
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