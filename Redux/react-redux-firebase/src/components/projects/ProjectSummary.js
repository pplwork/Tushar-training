import React from 'react';
import {Link} from 'react-router-dom'
function ProjectSummary(props) {
    return <div className='project-summary'>
            <h2>{props.title}</h2>
            <p>{props.content}</p>
            <p>Date 21st Jan, 2022</p>
    </div>;
}

export default ProjectSummary;
