<template>
  <v-container>
    <div class="flexBox">
       <v-row>
         <v-col>
           <Board id="board-1">
              <v-card
                v-for="(item, index) of tareas"
                :key="index"
                :id="item.id"
                draggable="true"
                @dragstart="dragStart"
                @dragover.stop
                class="mt-2"
                @dblclick="editarTarea(item)"
              >
                <v-card-title>
                  <span class="title font-weight-light">{{item.title}}</span>
                </v-card-title>
                <v-card-subtitle>{{item.description}}</v-card-subtitle>
              </v-card>
           </Board>
         </v-col>
         <v-col>
           <Board id="board-2"/>

         </v-col>
       </v-row>
    </div>
    <Task v-bind:task="itemSelected" v-bind:newTask="editMode" />
  </v-container>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Task from "./Task";
import Board from "./Card";
export default {
  name: "Dashboard",
  components: {
    Task,
    Board
  },
  data: () => ({
    itemSelected: {
      title: "",
      description: "",
      id: ""
    },
    editMode: true
  }),
  computed: {
    ...mapState(["tareas"]),
    ...mapGetters(["allTasks"])
  },
  methods: {
    editarTarea(data) {
      this.itemSelected = { ...data };
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
</style>
