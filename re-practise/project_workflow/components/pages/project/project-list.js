import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { Link } from 'react-router'
import projectListActions from '../../../actions/projectList.js';

class ProjectList extends Component {

    constructor(props) {
        super(props);
        this.state= {
            bbb: '12'
        }
        this.props.fetch();
        console.log(this.props);
    }


    render() {
        console.log(this.props.projects);
        return (
            <div>
                {
                    this.props.projects && this.props.projects.map(function (p) {
                        return (<div>
                           {p.name}
                        </div>)
                    }.bind(this))
                }
            </div>

        )
    }
}

var mapStateToProps = function (state) {
    return state.project
};

var mapDispatchToProps = function (dispatch) {
    return bindActionCreators(projectListActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
