import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    open: false,
    tareas: [
      {
        id: Date.now(),
        title: 'Prueba',
        description: 'Esto es una prueba'
      },
      {
        id: Date.now(),
        title: 'Prueba Dos',
        description: 'Esto es una segunda prueba'
      }
    ]
  },
  mutations: {
    closeModal(state) {
      return state.open = false;
    },
    openModal(state) {
      return state.open = true;
    },
    addTask(state, item) {
      const task = {...item, id: Date.now()};
      state.open = false;
      return state.tareas = [...state.tareas, task]
    },
    editTask(state, item) {
      return state.tareas.map(task => {
        if (task.id === item.id) {
          return {
            ...task, ...item
          }
        } else {
          return task;
        }
      });
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    allTasks: state => state.frutas
  }
})
