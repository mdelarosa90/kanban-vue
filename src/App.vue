<template>
  <v-app>
    <v-app-bar
      app
      color="rgba(1, 5, 19, 0.911)"
      dark
    >
       <router-link text icon color="white" class="mr-2" :to="{name: 'Home'}">
          <v-icon>mdi-home</v-icon>
        </router-link>
      <v-toolbar-title v-if="!edit" @click.prevent="edit = true">{{name}}</v-toolbar-title>
      <v-text-field v-if="edit" v-model="name" @keyup.enter="changeName"></v-text-field>
      <v-spacer></v-spacer>
        <v-btn
          @click.prevent ="openNewList"
          target="_blank"
          text
        >
        <span class="mr-1">Nueva Lista</span>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
      <v-btn
        @click.prevent ="openModal"
        target="_blank"
        text
        class="pa-2"
      >
        <span class="mr-1">Nueva Tarea</span>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="red">
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
    name: 'Kanban',
    edit: false
  }),
  methods: {
    ...mapMutations(['openModal', 'openNewList']),
    changeName(){
      this.edit = false;
    }
  },
  watch: {
     '$route':{
        handler: (to, from) => {
          document.title = to.meta.title || 'Vue-project'
        },
         immediate: true
      }
    },
};
</script>

<style>
    .router-link-active {
      background-color: transparent;
      cursor: pointer;
    }
    .v-application a{
      color: rgba(82, 140, 207, 0.616) !important;
    }
    .red {
      background-image: url('./assets/background.jpg');
      background-size: cover;
      background-repeat: no-repeat;
      overflow: auto !important;
    }
</style>
