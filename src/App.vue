<template>
  <v-app>
    <v-app-bar
      app
      color="secondary"
      dark
    >
      <v-toolbar-title>Kanban</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn
        @click.prevent ="openModal"
        target="_blank"
        text
      >
        <span class="mr-2">Nueva Tarea</span>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Dashboard from './components/Dashboard';
import Task from './components/Task';
import {mapMutations} from 'vuex'

export default {
  name: 'App',

  components: {
    Dashboard,
    Task
  },
  data: () => ({
    
  }),
  methods: {
    ...mapMutations(['openModal'])
  }
};
</script>
