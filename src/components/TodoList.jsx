import React from 'react';
import { MdOutlineDone } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';

const TodoList = ({ items, isCompleteScreen, onDelete, onComplete }) => {
  return (
    <div className="todo-list">
      {items.map((list, index) => (
        <div className="todo-list-item" key={index}>
          <div className="todo-item">
            <h4 className="todo-task">{list.task}</h4>
            <p className="todo-subtask">{list.subtask}</p>
            {isCompleteScreen && (
              <small className="todo-complete-time">
                Completed on: {list.completedOn}
              </small>
            )}
          </div>
          <div className="todo-icon">
            <IoClose className="del-icon" size={24} onClick={() => onDelete(index)} />
            {!isCompleteScreen && (
              <MdOutlineDone
                className="done-icon"
                size={24}
                onClick={() => onComplete(index)}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
