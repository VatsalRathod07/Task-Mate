import React, { useState } from 'react';
import { MdOutlineAdd, MdOutlineDone } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { BsArrowUpShort, BsArrowDownShort } from 'react-icons/bs'
import { BiShow, BiHide } from 'react-icons/bi'

const TodoList = ({ items, isCompleteScreen, onDelete, onComplete, onMoveUp, onMoveDown, currentTaskIndex, subTaskText, setSubTaskText, addSubtask, setCurrentTaskIndex }) => {
  // Initialize the showSubtasks state with an array of false values
  const [showSubtasks, setShowSubtasks] = useState(new Array(items.length).fill(true));

  const toggleSubtasks = (index) => {
    setShowSubtasks(prevState => {
      const updatedVisibility = [...prevState];
      updatedVisibility[index] = !updatedVisibility[index];
      return updatedVisibility;
    });
  };

  return (
    <div className="todo-list">
      {items.map((list, index) => (
        <div className="todo-list-item" key={index}>
          <div className="todo-item">
            <h4 className="todo-task">{list.task}</h4>
            {showSubtasks[index] && list.subtasks && list.subtasks.map((subtask, subIndex) => (
              <p className="todo-subtask" key={subIndex}>{subtask}</p>
            ))}
            {currentTaskIndex === index && (
              <div className="todo-input-subtask">
                <input
                  type="text"
                  placeholder="Enter subtask"
                  value={subTaskText}
                  onChange={(e) => setSubTaskText(e.target.value)}
                  autoFocus
                />
                <button onClick={() => addSubtask(index)} className="todo-btn-subtask">Add Subtask</button>
              </div>
            )}
            {isCompleteScreen && (
              <small className="todo-complete-time">
                Completed on: {list.completedOn}
              </small>
            )}
          </div>
          <div className="todo-icon">
            <MdOutlineAdd className="add-icon" size={22} onClick={() => setCurrentTaskIndex(index)} />
            <IoClose className="del-icon" size={24} onClick={() => onDelete(index)} />
            {!isCompleteScreen && (
              <MdOutlineDone
                className="done-icon"
                size={24}
                onClick={() => onComplete(index)}
              />
            )}
            <div className="todo-controls">
              <small onClick={() => toggleSubtasks(index)} className="hide-show-btn">{showSubtasks[index] ? <BiShow/> : <BiHide/>}</small>
              {/* {index > 0 && <button onClick={() => onMoveUp(index)}>Move Up</button>} */}
              {/* {index < items.length - 1 && <button onClick={() => onMoveDown(index)}>Move Down</button>} */}
              {/* {index > 0 && <BsArrowDownShort onClick={() => onMoveUp(index)} />}
              {index < items.length - 1 && <BsArrowUpShort onClick={() => onMoveDown(index)} />} */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
