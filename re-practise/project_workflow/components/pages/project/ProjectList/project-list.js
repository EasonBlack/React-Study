import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import { Link } from 'react-router'
import projectListActions from '../../../../actions/projectList.js';
import ProjectCardList from './ProjectCardList/project-card-list.js';

class ProjectList extends Component {

    constructor(props) {
        super(props);
        this.props.fetch();
    }

    render() {
        return (
            <div >
                <div className="project-list-title">My Project</div>
                <div className="project-list-back">
                    <ProjectCardList projects={this.props.projects} />
                </div>
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
