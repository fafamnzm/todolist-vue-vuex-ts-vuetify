<template>
  <div>
    <router-link v-for="nav in navOptions" :key="nav.text" :to="nav.address">
      <v-btn text rounded
        >{{ nav.text }}
        <p v-if="UndoneTodosLength > 0" class="UndoneTodo">
          {{ nav.text === "Todo" ? UndoneTodosLength : "" }}
        </p>
      </v-btn>
    </router-link>
  </div>
</template>

<script lang="ts">
import store from "@/store"
import ToDoModel from "@/store/models/TodoModel"
import { Component, Vue } from "vue-property-decorator"

@Component
export default class Nav extends Vue {
  private navOptions = [
    {
      text: "Home",
      address: "/"
    },
    {
      text: "About",
      address: "/about"
    },
    {
      text: "Todo",
      address: "/todo"
    }
  ]
  private incompleteTodos: Array<ToDoModel> = []

  get UndoneTodosLength() {
    const navTodos = store.getters.getTodos
    this.incompleteTodos = navTodos.filter(
      (todo: ToDoModel) => todo.completed === false
    )
    return this.incompleteTodos.length
  }
}
</script>

<style scoped>
.UndoneTodo {
  background-color: crimson;
}
</style>
