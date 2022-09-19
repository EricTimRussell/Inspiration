import { appState } from "../AppState.js"

export class Task {

  constructor(data) {
    this.id = data.id
    this.completed = data.completed || false
    this.description = data.description
    this.user = data.user
  }



  get ToDoTemplate() {
    return /*html*/`
  <div class="text-hilighter d-flex px-1">
    <input class ="mx-2" type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.tasksController.completeToDo('${this.id}')">
    <h4 class="npt-1">${this.description}</h4>
    <button class="mdi mdi-delete text-danger fs-5 selectable btn" onclick="app.tasksController.deleteToDo('${this.id}')"></button>
  </div>
    
    `
  }

  get UncompleteTemplate() {
    return `
<h5>ToDo:${this.uncomplete}</h5>
`

  }
  get uncomplete() {
    let uncompleted = appState.todos.filter(t => t.completed === false)
    return uncompleted.length
  }

}