import React from 'react';
import ProjectSummary from './ProjectSummary';
import { useSelector } from 'react-redux';


function ProjectList() {
    const project = useSelector(state => state.project.projects);
    console.log(project);
    return <div className='project-list'>
        {
            project.map((project) => {
                return <ProjectSummary title={project.title} content={project.content} key={project.id}/>
            })
        }
    </div>;
}

export default ProjectList;
