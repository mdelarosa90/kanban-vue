import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

function generateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}

export default new Vuex.Store({
  state: {
    editMode: false,
    open: false,
    boards: [{
      id: generateUUID(),
      name: 'Backlog',
      headerColor: 'primary',
      tareas: [
        {
          id:  generateUUID(),
          title: 'Prueba',
          description: 'Esto es una prueba'
        },
        {
          id: generateUUID(),
          title: 'Prueba Dos',
          description: 'Esto es una segunda prueba'
        }
      ]
    }]
  },
  mutations: {
    closeModal(state) {
      return state.open = false;
    },
    openModal(state) {
      state.editMode = false
      return state.open = true;
    },
    addTask(state, item) {
      const task = {...item, id: generateUUID()};
      state.open = false;
      return state.boards[0].tareas = [...state.boards[0].tareas, task]
    },
    editTask(state, item) {
      state.open = false;
      let board = state.boards.find(b => b.id == item.boardId);
      delete item.boardId;
      const itemIdx = board.tareas.findIndex(task => task.id == item.id);
      Vue.set(board.tareas, itemIdx, item);
    },
    addList(state, item) {

    },
    editList(state, item) {
      
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    allTasks: state => state.boards
  }
})
