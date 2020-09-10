<template>
  <v-app>
    <v-app-bar app color="rgb(65, 184, 131)" dark>
      <div class="d-flex align-center">
        <v-btn text>
          <v-img
            alt="Fafa Image"
            class="shrink mr-2"
            contain
            src="https://www.faramarz-monazami.com/wp-content/uploads/2019/05/cropped-Capture3-6.jpg"
            transition="scale-transition"
            width="40"
            @click="GoToTheDevelopersPage"
          />
        </v-btn>
      </div>

      <v-spacer></v-spacer>
      <Nav />
    </v-app-bar>

    <v-main>
      <div id="app">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Nav from "./views/Nav.vue"

@Component({
  components: { Nav }
})
export default class Todo extends Vue {
  GoToTheDevelopersPage() {
    window.location.href = "https://www.faramarz-monazami.com/"
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
