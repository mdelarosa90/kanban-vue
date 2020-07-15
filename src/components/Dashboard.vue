<template>
  <v-container fluid class="board-main-content">
    <div class="board-canvas">
      <draggable
        :list="boards"
        ghost-class="ghost-card"
        :empty-insert-threshold="100"
        :animation="200"
        group="dashboard"
        @start="drag=true"
        @end="drag=false"
      >
        <div v-for="column in boards" :key="column.id" class="ml-5 mt-5 board-list">
          <Board :data="column">
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
                <v-card-title class="flex-column align-start pointer">
                  <span class="text-sm-h5 text-md-subtitle-2">id: {{item.id}}</span>
                  <span
                    class="title font-weight-light text-sm-h5 text-md-h6"
                    :style="{color: column.headerColor}"
                  >{{item.title}}</span>
                </v-card-title>
                <v-card-subtitle>{{item.description}}</v-card-subtitle>
              </v-card>
              <v-flex class="d-flex align-content-end">
                <v-divider></v-divider>
                <v-btn class="ma-2" text icon :color="column.headerColor" @click="editList(column)">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </v-flex>
            </draggable>
          </Board>
        </div>
      </draggable>
    </div>
    <Task v-bind:task="editMode ? itemSelected : defaultItem" v-bind:board="boardSelected" />
    <List v-bind:list="editNewList ? defaultBoard : emptyBoard" />
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
    defaultItem: {
      title: "",
      description: "",
      id: "",
      boardId: ""
    },
    defaultBoard: {
      name: "",
      headerColor: "",
      tareas: []
    },
    boardSelected: "",
    title: ""
  }),
  computed: {
    ...mapState(["boards", "editMode", "editNewList"]),
    ...mapGetters(["allTasks"]),
    emptyBoard() {
      return { name: "", headerColor: "", id: "", tareas: [] };
    }
  },
  methods: {
    editarTarea(data, board) {
      this.$store.state.open = true;
      this.itemSelected = { ...data, boardId: board };
      this.boardSelected = board;
      this.$store.state.editMode = true;
    },
    editList(data) {
      this.defaultBoard = { ...data };
      this.$store.state.editNewList = true;
      this.$store.state.openBoard = true;
    },
    dragStart: e => {
      const target = e.target;
      e.dataTransfer.setData("card_id", target.id);
      setTimeout(() => {
        target.style.display = "none";
      }, 0);
    }
  }
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

.board-main-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 0;
  transition: margin 0.1s ease-in;
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

.emphasize-max {
  z-index: 2000 !important;
}

.emphasize-min {
  z-index: 0 !important;
}

.pointer {
  cursor: "pointer" !important;
}
</style>
