<template>
  <div>
    <div class="m-auto mt-5">
      <v-container>
        <v-row>
          <v-col cols="0" md="1" lg="2">
            <v-spacer></v-spacer>
          </v-col>
          <v-col cols="2" md="1">
            <v-select
              v-model="limit"
              :items="limitOptions"
              @change="Paginate()"
              label=""
              hint="No. todos"
              persistent-hint
            ></v-select>
          </v-col>
          <v-col cols="3" md="5">
            <v-text-field v-model="newTodo.title" type="text"></v-text-field>
          </v-col>
          <v-col cols="1" md="2">
            <v-btn color="deep-purple accent-4" dark @click="AddTodo()"
              >Add Todo</v-btn
            >
          </v-col>
          <v-col cols="0" md="2">
            <v-spacer></v-spacer>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <v-row>
        <v-col cols="4" v-for="todo in todos" :key="todo.id">
          <TodoCard :todo="todo" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import TodoCard from "../components/TodoCard.vue"
import TodoModel from "../store/models/TodoModel"
import store from "@/store"

@Component({
  components: { TodoCard }
})
export default class Todo extends Vue {
  private model: TodoModel = new TodoModel()
  private todos: Array<TodoModel> = []
  private limit = 20
  private limitOptions = ["all", 10, 20, 50, 100]
  private newTodo = this.model

  async mounted() {
    const checkTodos = store.getters.getTodos
    if (checkTodos.length > this.limit) {
      console.log("You already did the me! -That's what she said!")
    } else {
      await store.dispatch("fetchTodos", this.limit)
    }
    this.Paginate()
  }

  Paginate() {
    const todos = this.GetTodos()
    if (this.limit < todos.length) this.todos = todos.slice(0, this.limit)
    else this.todos = todos
  }

  GetTodos(): Array<TodoModel> {
    const todos = store.getters.getTodos
    return todos
  }

  async AddTodo() {
    // this.newTodo.id = Math.floor(Math.random() * 1000000000)  // In case for a random ID
    this.newTodo.id = this.GetTodos().length + 1
    const value = {
      id: this.newTodo.id,
      title: this.newTodo.title,
      completed: this.newTodo.completed
    }
    if (this.newTodo.title.length > 1) {
      // We can have more accurate input validation
      this.newTodo.id = this.todos.length + 1
      await store.dispatch("addTodo", value)
      this.newTodo.title = ""
    }
    this.Paginate()
  }
}
</script>

<style scoped></style>
