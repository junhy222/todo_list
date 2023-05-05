import React, { useState } from "react";
import ViewTodo from "./components/ViewTodo";
import AddTodo from "./components/AddTodo";
import { getStorage } from "./util/Storage";
import SelectProgress from "./components/SelectProgress";
import { MdDarkMode } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [progress, setProgress] = useState("ALL");
  const [todoList, setTodoList] = useState(getStorage());
  const onClick = () => {
    setDarkMode(mode => !mode);
  } 

  return (
    <div className={darkMode ? "dark_mode" : "day_mode"}>
      <div className="mode">{darkMode ? <MdDarkMode onClick={onClick}/> : <BsSun onClick={onClick}/>}</div>
      <SelectProgress progress={progress} setProgress={setProgress}/>
      <ViewTodo progress={progress} todoList={todoList} setTodoList={setTodoList} />
      <AddTodo progress={progress} setTodoList={setTodoList}/>
    </div>
  );
}

export default App;
