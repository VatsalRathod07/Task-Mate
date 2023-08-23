// import React, { useEffect, useState } from 'react'
// import './App.css'
// import { MdOutlineDone } from 'react-icons/md'
// import { IoClose } from 'react-icons/io5'

// const App = () => {

//   const [isCompleteScreen, setIsCompleteScreen] = useState(false);
//   const [todos, setTodos] = useState([]);
//   const [Task, setTask] = useState("");
//   const [subTask, setSubTask] = useState("");
//   const [completedTodos, setCompletedTodos] = useState([])

//   const handelAddTodo = (e) => {
//     e.preventDefault();

//     let newTodoItem = {
//       // id: Math.random(),
//       task: Task,
//       subtask: subTask
//     }

//     let updatedTodoArray = [...todos];
//     updatedTodoArray.push(newTodoItem);
//     setTodos(updatedTodoArray);
//     localStorage.setItem('todos', JSON.stringify(updatedTodoArray));
//     setSubTask("")
//     setTask("")
//   }

//   // const handelDelete = (index) => {
//   //   const filteredTodos = todos.filter((data) => data.id !== index)
//   //   setTodos(filteredTodos)
//   //   localStorage.setItem('todos', JSON.stringify(filteredTodos));
//   // }

//   const handelDelete = (index) => {
//     let reducedTodo = [...todos];
//     reducedTodo.splice(index);

//     localStorage.setItem('todos', JSON.stringify(reducedTodo));
//     setTodos(reducedTodo);
//   }

//   const handelComplete = (index) => {
//     let now = new Date();
//     let dd = now.getDate();
//     let mm = now.getMonth() + 1;
//     let yyyy = now.getFullYear();
//     let h = now.getHours();
//     let m = now.getMinutes();
//     let s = now.getSeconds();

//     let completedOn = `${dd}-${mm}-${yyyy} at ${h}:${m}:${s}`;

//     let filtredItem = {
//       ...todos[index],
//       completedOn: completedOn
//     }

//     let updatedCompletedArray = [...completedTodos];
//     updatedCompletedArray.push(filtredItem);
//     setCompletedTodos(updatedCompletedArray);
//     handelDelete(index)
//     localStorage.setItem('completedTodos', JSON.stringify(updatedCompletedArray));
//   }

//   const handelDeleteCompleted = (index) => {
//     let reducedTodo = [...completedTodos];
//     reducedTodo.splice(index);

//     localStorage.setItem('completedTodos', JSON.stringify(reducedTodo));
//     setCompletedTodos(reducedTodo);
//   }

//   useEffect(() => {
//     let savedTodos = JSON.parse(localStorage.getItem('todos'));
//     let savedCompletedTodos = JSON.parse(localStorage.getItem('completedTodos'));
//     if (savedTodos) {
//       setTodos(savedTodos);
//     }

//     if (savedCompletedTodos) {
//       setCompletedTodos(savedCompletedTodos)
//     }
//   }, [])


//   return (
//     <div>
//       <h1 className="todo-logo">My Task List</h1>

//       <div className="todo-wrapper">
//         <div className="todo-input">
//           <div className="todo-input-item">
//             <label htmlFor="">Task</label>
//             <input type="text" placeholder="New Task" value={Task} onChange={(e) => setTask(e.target.value)} />
//           </div>

//           <div className="todo-input-item">
//             <label htmlFor="">SubTask</label>
//             <input type="text" placeholder="SubTask" value={subTask} onChange={(e) => setSubTask(e.target.value)} />
//           </div>

//           <div className="todo-input-item">
//             <button type="button" className="primaryBtn" onClick={handelAddTodo}>Add Task</button>
//           </div>
//         </div>

//         <div className="btn-area">
//           <button className={`secondaryBtn ${isCompleteScreen === false && 'active'}`} onClick={() => setIsCompleteScreen(false)}>Todo</button>
//           <button className={`secondaryBtn ${isCompleteScreen === true && 'active'}`} onClick={() => setIsCompleteScreen(true)}>Completed</button>
//         </div>

//         <div className="todo-list">
//           {isCompleteScreen === false && todos.map((list, index) => {
//             return (
//               <div className="todo-list-item">
//                 <div className="todo-item" key={index}>
//                   <h4 className="todo-task">{list.task}</h4>
//                   <p className="todo-subtask">{list.subtask}</p>
//                 </div>

//                 <div className="todo-icon">
//                   <IoClose className="del-icon" size={24} onClick={() => handelDelete(index)} />
//                   <MdOutlineDone className="done-icon" size={24} onClick={() => handelComplete(index)} />
//                 </div>
//               </div>
//             )
//           })}

//           {isCompleteScreen === true && completedTodos.map((list, index) => {
//             return (
//               <div className="todo-list-item">
//                 <div className="todo-item" key={index}>
//                   <h4 className="todo-task">{list.task}</h4>
//                   <p className="todo-subtask">{list.subtask}</p>
//                   <small className="todo-complete-time">Completed on: {list.completedOn}</small>
//                 </div>

//                 <div className="todo-icon">
//                   <IoClose className="del-icon" size={24} onClick={() => handelDeleteCompleted(index)} />
//                 </div>
//               </div>
//             )
//           })}
//         </div>

//       </div>
//     </div>
//   )
// }

// export default App

import './App.css'
import React from 'react';
import TodoWrapper from './components/TodoWrapper';

const App = () => {
  return (
    <div>
      <TodoWrapper/>
    </div>
  )
}

export default App