import React, { Fragment, useContext } from 'react';
import ProjectItem from './ProjectItem';
import ProjectContext from '../../context/project/projectContext';

function Projects() {
  const projectContext = useContext(ProjectContext);
  const { projects } = projectContext;
  return (
    <Fragment>
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </Fragment>
  );
}

export default Projects;
