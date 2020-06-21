import React, { Fragment, useContext } from 'react';
import ProjectItem from './ProjectItem';
import ProjectContext from '../../context/project/projectContext';

function Projects() {
  const projectContext = useContext(ProjectContext);
  const { projects } = projectContext;
  return (
    <Fragment>
      <h2 className='text-center my-2'>
        <i class='fas fa-project-diagram'></i>
        {'  Projects'}
      </h2>
      <div style={projectsStyle}>
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
        <div className='card my-3 bg-light'>
          <h1 className='text-center' style={{ paddingTop: '20%' }}>
            <i className='fas fa-plus-circle'></i>
          </h1>
        </div>
      </div>
    </Fragment>
  );
}

const projectsStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem',
};

export default Projects;
