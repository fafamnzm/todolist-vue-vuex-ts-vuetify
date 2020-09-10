import Vue from "vue"
import Vuex from "vuex"
// import TodoService from "@/services/TodoService"
import ToDoModel from "./models/TodoModel"
import TodoService from "../services/TodoService"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: Array<ToDoModel>()
  },
  mutations: {
    FETCH_TODOS(state, todos: Array<ToDoModel>) {
      todos.reverse()
      state.todos = [...todos]
    },
    SET_TODOS(state, todos: Array<ToDoModel>): void {
      todos.map(todo => state.todos.push(todo))
    },
    ADD_TODO(state, todo: ToDoModel): void {
      state.todos = [todo, ...state.todos]
    }
  },
  actions: {
    async fetchTodos(context) {
      const response = await TodoService.getTodos()
      context.commit("FETCH_TODOS", response.data)
    },
    async addTodo(context, todo: ToDoModel) {
      return new Promise((resolve, reject) => {
        try {
          context.commit("ADD_TODO", todo)
          resolve()
        } catch (err) {
          reject(err)
        }
      })
    }
  },
  modules: {
    // TodoModule
  },
  getters: {
    getTodos(state) {
      const todos = state.todos
      return todos
    },
    singleTodo: state => (id: number) => {
      const todo = state.todos.find(todo => todo.id === id)
      return todo
    }
  }
})
