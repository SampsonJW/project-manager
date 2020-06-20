import React, { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ProjectReducer from './projectReducer';
import ProjectContext from './projectContext';
import { ADD_PROJECT, DELETE_PROJECT } from '../types';

function ProjectState(props) {
  const initialState = {
    projects: [
      {
        id: 1,
        name: 'Shopping',
        description: 'My Shopping List',
      },
      {
        id: 2,
        name: 'Work',
        description: 'What I need to do at work',
      },
      {
        id: 3,
        name: 'Coding',
        description: 'Coding project',
      },
    ],
  };
  const [state, dispatch] = useReducer(ProjectReducer, initialState);

  // Add Project
  const addProject = (project) => {
    project.id = uuidv4();
    dispatch({ type: ADD_PROJECT, payload: project });
  };
  // Delete Project
  const deleteProject = (id) => {
    dispatch({ type: DELETE_PROJECT, payload: id });
  };

  return (
    <ProjectContext.Provider
      value={{
        projects: state.projects,
        addProject,
        deleteProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
}

export default ProjectState;
