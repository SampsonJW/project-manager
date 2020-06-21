import React, { Fragment, useContext, useState } from 'react';
import ProjectItem from './ProjectItem';
import ProjectContext from '../../context/project/projectContext';

function Projects() {
  const projectContext = useContext(ProjectContext);
  const { projects } = projectContext;
  const [project, setProject] = useState({
    name: '',
    description: '',
  });
  const { name, description } = project;
  const onChange = () => {};
  const projectForm = () => {};
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

        {/* TODO: use this, when onclick, popup a modal which has form to fill title and description. COPY TRELLO */}
        {/* <div className='card my-3 bg-light' onClick={projectForm}>
          <h1 className='text-center' style={{ paddingTop: '20%' }}>
            <i className='fas fa-plus-circle'></i>
          </h1>
        </div> */}

        <div className='card my-3 bg-light' onClick={projectForm}>
          <div>
            <input
              className='form-control mb-1'
              type='text'
              placeholder='Project Title...'
              name='title'
              value={name}
              onChange={onChange}
            />
          </div>
          <div>
            <textarea
              className='form-control mb-3'
              type='text'
              placeholder='Enter description...'
              name='description'
              style={{ resize: 'none' }}
              value={description}
              onChange={onChange}
            />
          </div>
          <div className='text-center'>
            <input
              type='submit'
              value='Add Project'
              className='btn btn-primary mx-1'
            />
            <input value='Cancel' className='btn btn-secondary my-0' />
          </div>
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
