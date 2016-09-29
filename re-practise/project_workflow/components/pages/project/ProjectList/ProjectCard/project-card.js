import React , { Component } from 'react';

class ProjectCard extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="project-card">
            <div className="card">
                <div>{this.props.project.name}</div>
                <div>{this.props.project.type}</div>
            </div>
        </div>
    }

}

export default ProjectCard
