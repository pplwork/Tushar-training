import React from 'react';
import ProjectList from '../projects/ProjectList';
import Notifications from './Notifications';



function Dashboard() {
    return <div className='dashboard'>
        <ProjectList />
        <Notifications />
    </div>;
}

export default Dashboard;
