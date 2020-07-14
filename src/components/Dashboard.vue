<template>
  <v-container fluid style="overflow-x: 'auto'">
    <div class="board-canvas">
      <div v-for="column in boards" :key="column.id" class="ml-5 mt-5 board-list">
        <Board :id="column.id" :title="column.name" :color="column.headerColor">
          <draggable
            :list="column.tareas"
            ghost-class="ghost-card"
            :empty-insert-threshold="100"
            :animation="200"
            group="board"
            @start="drag=true"
            @end="drag=false"
          >
            <v-card
              v-for="(item, index) in column.tareas"
              :key="index"
              :id="item.id"
              class="mt-2"
              @dblclick="editarTarea(item, column.id)"
            >
              <v-card-title class="flex-column align-start">
                <span class="text-sm-h5 text-md-subtitle-2">id: {{item.id}}</span>
                <span
                  class="title font-weight-light text-sm-h5 text-md-h6"
                  :style="{color: column.headerColor}"
                >{{item.title}}</span>
              </v-card-title>
              <v-card-subtitle>{{item.description}}</v-card-subtitle>
            </v-card>
          </draggable>
        </Board>
      </div>
    </div>
    <Task v-bind:task="itemSelected" v-bind:board="boardSelected" />
    <List />
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import draggable from "vuedraggable";
import Task from "./Task";
import Board from "./Card";
import List from "./List";
export default {
  name: "Dashboard",
  components: {
    Task,
    Board,
    draggable,
    List
  },
  data: () => ({
    itemSelected: {
      title: "",
      description: "",
      id: ""
    },
    boardSelected: "",
    title: ""
  }),
  computed: {
    ...mapState(["boards", "editMode"]),
    ...mapGetters(["allTasks"])
  },
  methods: {
    editarTarea(data, board) {
      this.itemSelected = { ...data, boardId: board };
      this.boardSelected = board;
      this.$store.state.open = true;
      this.$store.state.editMode = true;
    },
    dragStart: e => {
      const target = e.target;
      e.dataTransfer.setData("card_id", target.id);
      setTimeout(() => {
        target.style.display = "none";
      }, 0);
    }
  },
  watch: {}
};
</script>

<style>
.flexBox {
  display: flex;
  justify-content: space-between;
  width: "100vh";
  z-index: -1000;
  overflow: hidden;
  margin: 0 auto;
  padding: 15px;
}

.ghost-card {
  opacity: 0.5;
  background: #f7fafc;
  border: 1px solid #4299e1;
}

.board-canvas {
  white-space: nowrap;
  margin-bottom: 8px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 8px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.board-list {
  width: 350px;
  margin: 0 4px;
  height: 100%;
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.44, rgb(122, 206, 217)),
    color-stop(0.72, rgb(73, 185, 189)),
    color-stop(0.86, rgb(28, 134, 148))
  );
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>
