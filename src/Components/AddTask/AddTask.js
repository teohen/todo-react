import { useState } from "react";
import services from '../../Services/Tasks.service'


async function createTask(task, setTask) {
  setTask('')
  // const res = await services.createTask(task)
}

function AddTask() {

  const [taskName, setTaskName] = useState('')

  return (
  <div>
      <input
        type="text"
        id="new-task"
        placeholder="New Task"
        value={taskName}
        onInput={e => setTaskName(e.target.value)}
        />

    { taskName != '' && <button
        id="add-task"
        type="submit"
        onClick={() => createTask(taskName, setTaskName)}
    >
        Add Task
      </button>
    }
  </div>
  )
};

export default AddTask;
