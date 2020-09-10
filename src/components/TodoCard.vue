<template>
  <div>
    <v-card :color="color" :hover="cardHover">
      <v-card-text>
        <v-spacer></v-spacer>
        <v-checkbox
          v-model="todo.completed"
          :label="checkboxLabel"
        ></v-checkbox>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator"
import ToDoModel from "../store/models/TodoModel"

@Component
export default class TodoCard extends Vue {
  @Prop() private todo!: ToDoModel
  private cardHover = true

  get color() {
    return this.todo.completed ? "rgb(65, 184, 131)" : "rgb(255, 232, 115)"
  }
  get checkboxLabel() {
    return this.todo.id + ". " + this.todo.title
  }
}
</script>

<style scoped></style>
