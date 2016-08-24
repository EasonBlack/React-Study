import React , { Component } from 'react';
import ProjectCard from '../ProjectCard/project-card.js';


class ProjectCardList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="flex__row">
            {
                this.props.projects && this.props.projects.map(function (p) {
                    return <ProjectCard  project={p} />
                }.bind(this))
            }
        </div>
    }

}

export default ProjectCardList