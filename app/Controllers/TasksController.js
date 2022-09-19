import { appState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"
import { getFormData } from "../Utils/FormHandler.js"
import { Pop } from "../Utils/Pop.js"
import { setHTML, setText } from "../Utils/Writer.js"


function _drawToDoList() {
  let template = ''
  appState.todos.forEach(t => template += t.ToDoTemplate)
  setHTML('todo list', template)
  appState.todos.find(t => template = t.UncompleteTemplate)
  setHTML('todo count', template)
}


// TODO Change Hardcoded user to dynamic

export class TasksController {
  constructor() {
    appState.on('todos', _drawToDoList)
    this.getToDoList()
  }

  async addToDo() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      // console.log(formData);
      await tasksService.addToDo(formData)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error(error, 'addToDo')
      Pop.error(error)
    }
  }

  async getToDoList() {
    try {
      await tasksService.getToDoList()
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async deleteToDo(id) {
    try {
      await tasksService.deleteToDo(id)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

  async completeToDo(id) {
    try {
      await tasksService.completeToDo(id)
    } catch (error) {
      console.error(error)
      Pop.error(error)
    }
  }

}