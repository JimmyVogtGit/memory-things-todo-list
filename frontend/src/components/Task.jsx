import React from 'react';

function Task({ id, title }) {
  return (
    <div>
      <input type='checkbox' />
      <Link to={`my-task/${id}`}>{title}</Link>
    </div>
  );
}

export default Task;
