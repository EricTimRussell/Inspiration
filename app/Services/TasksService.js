import { appState } from "../AppState.js"
import { Task } from "../Models/Task.js"
import { Pop } from "../Utils/Pop.js"
import { SandboxServer } from "./AxiosService.js"

class TasksService {
  async completeToDo(id) {
    const todo = appState.todos.find(t => t.id == id)
    // @ts-ignore
    todo.completed = !todo.completed
    await SandboxServer.put(`/${appState.user}/todos/${id}`, todo)
    appState.emit('todos')
  }
  async deleteToDo(id) {
    const yes = await Pop.confirm('Delete ToDo?')
    if (!yes) { return }
    await SandboxServer.delete(`${appState.user}/todos/${id}`)
    appState.todos = appState.todos.filter(t => t.id != id)
    appState.emit('todos')
  }
  async getToDoList() {
    const res = await SandboxServer.get(`/${appState.user}/todos`)
    appState.todos = res.data.map(r => new Task(r))
    console.log(appState.todos);
  }
  async addToDo(formData) {
    const res = await SandboxServer.post(`/${appState.user}/todos`, formData)
    // console.log(res.data);
    let todo = new Task(res.data)
    appState.todos = [...appState.todos, todo]
  }





}
export const tasksService = new TasksService