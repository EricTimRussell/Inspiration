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
  <div class="text-light d-flex p-3">
    <input type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.tasksController.completeToDo('${this.id}')">
    <h4 class="px-2">${this.description}</h4>
      <button class="mdi mdi-delete-forever-outline text-danger fs-4 selectable btn" onclick="app.tasksController.deleteToDo('${this.id}')"></button>
  </div>
    
    `
  }

  get UncompleteTemplate() {
    return `
<h5>ToDo:${this.uncomplete}</h5>
`

  }
  get uncomplete() {
    let todos = appState.todos.filter(t => t.id == this.id)
    let uncompleted = todos.filter(t => t.completed == false)
    return uncompleted.length
  }

}