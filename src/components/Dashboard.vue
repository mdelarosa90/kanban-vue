<template>
  <v-container fluid style="overflow-x: 'auto'">
      <v-layout row>
        <v-flex sm12 md3 v-for="column in boards" :key="column.id" class="ml-5 mt-5">
          <Board :id="column.id" :title="column.name" :color="column.headerColor">
            <draggable :list="column.tareas" :animation="200" group="board">
              <v-card
                v-for="(item, index) in column.tareas"
                :key="index"
                :id="item.id"
                class="mt-2"
                @dblclick="editarTarea(item, column.id)"
              >
                <v-card-title class="flex-column align-start">
                  <span class="text-sm-h5 text-md-subtitle-2">id: {{item.id}}</span>
                  <span class="title font-weight-light text-sm-h5 text-md-h6" :style="{color: column.headerColor}">{{item.title}}</span>
                </v-card-title>
                <v-card-subtitle>{{item.description}}</v-card-subtitle>
              </v-card>
            </draggable>
          </Board>
      </v-flex>
      </v-layout>
    <Task v-bind:task="itemSelected" v-bind:board="boardSelected" />
    <List />
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import draggable from "vuedraggable";
import Task from "./Task";
import Board from "./Card";
import List from './List';
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
    ...mapGetters(["allTasks"]),
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
    },
  },
  watch: {

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
  background: #F7FAFC;
  border: 1px solid #4299e1;
}
</style>
