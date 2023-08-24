import React, { useEffect, useState } from 'react';
import TodoList from './TodoList';

const TodoWrapper = () => {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [Task, setTask] = useState('');
  const [subTask, setSubTask] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);
  const [fieldsEmpty, setFieldsEmpty] = useState(false); // State to track empty fields
  const [currentTaskIndex, setCurrentTaskIndex] = useState(-1); // To track the currently selected task index for adding subtasks
  const [subTaskText, setSubTaskText] = useState(""); // To store the text of the subtask being entered


  const addSubtask = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index]?.subtasks?.push(subTaskText);
    setTodos(updatedTodos);
    setSubTaskText("");
    setCurrentTaskIndex(-1);
    localStorage.setItem('todos', JSON.stringify(updatedTodos)); // Save updated todos to localStorage
  };

  const handelAddTodo = (e) => {
    e.preventDefault();
    if (Task.trim() === '') {
      setFieldsEmpty(true); // Set the state to indicate fields are empty
      return;
    }
    setFieldsEmpty(false);

    let newTodoItem = {
      task: Task,
      subtasks: [] // Initialize an empty array for subtasks
    };

    let updatedTodoArray = [...todos];
    updatedTodoArray.push(newTodoItem);
    setTodos(updatedTodoArray);
    localStorage.setItem('todos', JSON.stringify(updatedTodoArray)); // Save updated todos to localStorage
    setSubTask("");
    setTask("");
  };

  // const handelDelete = (index) => {
  //   const filteredTodos = todos.filter((data) => data.id !== index)
  //   setTodos(filteredTodos)
  //   localStorage.setItem('todos', JSON.stringify(filteredTodos));
  // }

  const handelDelete = (index) => {
    let reducedTodo = [...todos];
    reducedTodo.splice(index, 1);

    localStorage.setItem('todos', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  }

  const handelComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let completedOn = `${dd}-${mm}-${yyyy} at ${h}:${m}:${s}`;

    let filtredItem = {
      ...todos[index],
      completedOn: completedOn
    }

    let updatedCompletedArray = [...completedTodos];
    updatedCompletedArray.push(filtredItem);
    setCompletedTodos(updatedCompletedArray);
    handelDelete(index)
    localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArray));
  }

  const handelDeleteCompleted = (index) => {
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index, 1);

    localStorage.setItem('completedTodos', JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  }

  const handleMoveUp = (index) => {
    const updatedItems = [...todos];
    const [item] = updatedItems.splice(index, 1);
    updatedItems.splice(index - 1, 0, item);
    setTodos(updatedItems);
    localStorage.setItem('todos', JSON.stringify(updatedItems));
  }

  const handleMoveDown = (index) => {
    const updatedItems = [...todos];
    const [item] = updatedItems.splice(index, 1);
    updatedItems.splice(index + 1, 0, item);
    setTodos(updatedItems);
    localStorage.setItem('todos', JSON.stringify(updatedItems));
  }



  useEffect(() => {
    let savedTodos = JSON.parse(localStorage.getItem('todos'));
    let savedCompletedTodos = JSON.parse(localStorage.getItem('completedTodos'));
    if (savedTodos) {
      setTodos(savedTodos);
    }


    if (savedCompletedTodos) {
      setCompletedTodos(savedCompletedTodos)
    }
  }, [])

  return (
    <div>
      <h1 className="todo-logo">My Task List</h1>

      <div className="todo-wrapper">
        <div className="todo-input-container">
          {/* ... your input fields and add button ... */}
          <div className="todo-input">
            <div className="todo-input-item">
              <label htmlFor="">Task</label>
              <input type="text" placeholder="New Task 🖊" value={Task} onChange={(e) => setTask(e.target.value)} autoFocus/>
            </div>
            {/* <div className="todo-input-item">
              <label htmlFor="">SubTask</label>
              <input type="text" placeholder="SubTask" value={subTask} onChange={(e) => setSubTask(e.target.value)} />
            </div> */}
            <div className="todo-input-item">
              <button type="button" className="primaryBtn" onClick={handelAddTodo}>Add Task</button>
            </div>
          </div>
          {fieldsEmpty && <small className="error-msg">Task title is required!</small>}
        </div>


        <div className="btn-area">
          {/* ... your buttons for switching screens ... */}
          <button className={`secondaryBtn ${isCompleteScreen === false && 'active'}`} onClick={() => setIsCompleteScreen(false)}>Todo</button>
          <button className={`secondaryBtn ${isCompleteScreen === true && 'active'}`} onClick={() => setIsCompleteScreen(true)}>Completed</button>
        </div>

        <TodoList
          items={isCompleteScreen ? completedTodos : todos}
          isCompleteScreen={isCompleteScreen}
          onDelete={isCompleteScreen ? handelDeleteCompleted : handelDelete}
          onComplete={handelComplete}
          onMoveUp={handleMoveUp}
          onMoveDown={handleMoveDown}
          currentTaskIndex={currentTaskIndex}
          subTaskText={subTaskText}
          setSubTaskText={setSubTaskText}
          addSubtask={addSubtask}
          setCurrentTaskIndex={setCurrentTaskIndex}
        />
      </div>
    </div>
  );
};

export default TodoWrapper;
