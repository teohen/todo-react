import './App.css';
import ListItem from '../ListItem/ListItem.js';
import AddTask from '../AddTask/AddTask.js';
import { useEffect, useState } from 'react';
import services from '../../Services/Tasks.service'


function List(tasks) {
  if (!tasks) {
    return null
  }
  return tasks.map((task) => {
    return <ListItem task={task} />
  })
}

function TodoList(tasks) {
  return (
    <>
      <h1>To-Do List</h1>
      <ul id="task-list">
      { List(tasks) }
      </ul>
      <AddTask />
    </>
  )
}

const getTasks = async (setTasks, setLoading) => {
  setLoading(true)
  const res = await services.getTasks()
  setTasks(res)
  setLoading(false)
}


function App() {

  const [loading, setLoading] = useState(false)
  const [tasks, setTasks] = useState(null)

  useEffect(() => {

    getTasks(setTasks, setLoading)
  }, [])

  return (
    <div id="todo-list">
    { !loading && TodoList(tasks) }
    { loading && <h1> loading... </h1> }
   </div>
  );
}

export default App;
