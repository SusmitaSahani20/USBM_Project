/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState, useRef } from 'react';
import './App.css';

function App() {
  let [todolist, settodolist] = useState([]);
  const inputRef = useRef(null);

  let saveToDoList = (event) => {
    event.preventDefault();
    let toname = inputRef.current.value;
    if (!todolist.includes(toname)) {
      let finalToDolist = [...todolist, toname];
      settodolist(finalToDolist);
      inputRef.current.value = '';  // Clear input field after adding
      inputRef.current.focus();     // Focus input field after adding
    } else {
      alert("ToDo name already Exists...");
    }
  }

  let list = todolist.map((value, index) => {
    return (
      <ToDoListItem
        value={value}
        key={index}
        indexNumber={index}
        todolist={todolist}
        settodolist={settodolist}
      />
    );
  });

  return (
    <div className='App'>
      <h1>To-Do List</h1>
      <form onSubmit={saveToDoList}>
        <input ref={inputRef} type="text" name="toname" />
        <button type="submit">ADD TASK</button>
      </form>
      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  );
}

export default App;

function ToDoListItem({ value, indexNumber, todolist, settodolist }) {
  let [status, setStatus] = useState(false);

  function deleteRow() {
    let finalData = todolist.filter((v, i) => i !== indexNumber);
    settodolist(finalData);
  }

  let checkStatus = () => {
    setStatus(!status);
  }

  return (
    <li className={status ? 'completetodo' : ''} onClick={checkStatus}>
      {indexNumber + 1}. {value}
      <span onClick={deleteRow}>&times;</span>
    </li>
  );
}
