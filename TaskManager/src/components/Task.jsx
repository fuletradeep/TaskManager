import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import FlipMove from 'react-flip-move';

const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    <FlipMove duration={600} easing="ease-in-out">
    <li className="list-item">
      <span>{task.title} </span>
      <div>
        <button
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <i className="fas fa-trash-alt"></i>
        </button>{' '}
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
          <i className="fas fa-pen"></i>
        </button>
      </div>
    </li>
    </FlipMove>
  )
}

export default Task