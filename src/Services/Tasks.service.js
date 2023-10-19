import { wait } from "@testing-library/user-event/dist/utils"

const data =
  [
    {
      id: "dfskdfskfjsj",
      title: "titulo do backend",
      checked: false,
    },
    {
      id: "dfskdfskfjsj",
      title: "titulo do backend",
      checked: false,
    },
    {
      id: "dfskdfskfjsj",
      title: "titulo do backend",
      checked: true,
    }
  ]


function getTasks() {
  return new Promise((res, _) => {
    setTimeout(() => {
      res(data)
    }, 1000)
  })
}

async function createTask(task) {
  try {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/tasks`, {
      method: "post",
      body: JSON.stringify(task)
    })

    return res.json()
  } catch (err) {
    console.log('erro', err)
  }
}

async function updateTask(task) {
  try {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/tasks`, {
      method: "put",
      body: JSON.stringify(task)
    })

    return res.json()
  } catch (err) {
    console.log('erro', err)
  }
}

async function deleteTask(task) {
  try {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/tasks/${task.id}`, {
      method: "delete",
    })

    return res.json()
  } catch (err) {
    console.log('erro', err)
  }
}

export default {
  getTasks, 
  createTask,
  updateTask,
  deleteTask
}
