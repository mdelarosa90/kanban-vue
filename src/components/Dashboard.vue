<template>
  <v-container>
    <v-card v-for="(item, index) of tareas" :key="index" class="mt-2" @click="editarTarea(item)">
      <v-card-title>
        <span class="title font-weight-light">{{item.title}}</span>
      </v-card-title>
      <v-card-subtitle>{{item.description}}</v-card-subtitle>
    </v-card>
    <Task v-bind:task="itemSelected" />
  </v-container>
</template>

<script>
import {mapState, mapGetters} from 'vuex';
import Task from './Task';
  export default {
    name: 'Dashboard',
    components: {
      Task
    },
    data: () => ({
      itemSelected: {
        title: '',
        description: '',
        id: ''
      }
    }),
    computed: {
      ...mapState(['tareas']),
      ...mapGetters(['allTasks']),
    },
    methods: {
      editarTarea(data){
        this.itemSelected = {...data};
        this.$store.state.open = true;
      }
    }
  }
</script>
