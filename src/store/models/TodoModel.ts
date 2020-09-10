export default class ToDoModel {
  id: number
  title: string
  completed: boolean

  constructor() {
    this.id = 1
    this.title = ""
    this.completed = false
  }
}

// import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators"
// @Module({ namespaced: true, name: "test" })
// class Todo extends VuexModule {
//   public todos: Array<object> = []
//   @Mutation
//   public SET_TODO(todos: Array<object>): void {
//     this.todos = todos
//   }
//   @Action
//   public setTodo(todos: Array<object>): void {
//     this.context.commit("SET_TODO", todos)
//   }
// }
// export default Todo
