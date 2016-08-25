import React , { Component } from 'react';
import ProjectCard from '../ProjectCard/project-card.js';


class ProjectCardList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="project-card-list">
                {
                    this.props.projects && this.props.projects.map(function (p, key) {
                        return <ProjectCard key={key} project={p}/>
                    }.bind(this))
                }
            </div>
    }

}

export default ProjectCardList