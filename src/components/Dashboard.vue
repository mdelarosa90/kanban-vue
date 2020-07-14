<template>
  <v-container>
    <div class="flexBox">
      <v-row id="dashboard">
        <v-col v-for="column of boards" :key="column.id">
          <Board id="board-1" :title="column.name" :color="column.headerColor">
            <draggable :list="column.tareas" :animation="200" :sort="true" :group="column">
              <v-card
                v-for="(item, index) of column.tareas"
                :key="index"
                :id="item.id"
                class="mt-2"
                @dblclick="editarTarea(item, column.id)"
              >
                <v-card-title class="flex-column align-start">
                  <strong>id: {{item.id}}</strong>
                  <span class="title font-weight-light">{{item.title}}</span>
                </v-card-title>
                <v-card-subtitle>{{item.description}}</v-card-subtitle>
              </v-card>
            </draggable>
          </Board>
        </v-col>
      </v-row>
    </div>
    <Task v-bind:task="itemSelected" v-bind:board="boardSelected" v-bind:newTask="editMode" />
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
    editMode: true,
    newList: true,
    title: ""
  }),
  computed: {
    ...mapState(["boards"]),
    ...mapGetters(["allTasks"])
  },
  methods: {
    editarTarea(data, board) {
      this.itemSelected = { ...data, boardId: board };
      this.boardSelected = board;
      this.editMode = false;
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
