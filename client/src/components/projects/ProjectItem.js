import React from 'react';
import './ProjectItem.css';
import PropTypes from 'prop-types';

function ProjectItem({ project }) {
  return (
    <div className='card my-3 text-center' style={cardStyle}>
      <h4 className='mt-2 card-title' style={{ color: 'white' }}>
        {project.title}
      </h4>
      <p className='card-text' style={{ color: 'white' }}>
        {project.description}
      </p>
    </div>
  );
}
const cardStyle = {};

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
};

export default ProjectItem;
