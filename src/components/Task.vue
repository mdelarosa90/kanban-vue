<template>
  <v-row justify="center">
    <v-dialog v-model="open" persistent max-width="600px">
      <v-card>
        <v-card-title class="teal darken-3" dark>
          <v-icon left color="white">mdi-label</v-icon>
          <span class="headline white--text">Edición de Tareas</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Titulo" v-model="task.title"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea label="Descripcion" v-model="task.description"></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeModal">Cancelar</v-btn>
          <v-btn color="teal darken-3" text @click="addTask(task)">Guardar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import Task from './Task'
export default {
  name: "Task",
  data() {
    return {
      //     task: {
      //         title: '',
      //         description: '',
      //         id: ''
      //     },
      //     dialog: false,
    };
  },
  computed: {
    ...mapState(["open"])
  },
  methods: {
    ...mapMutations(["addTask", "closeModal"]),
  },
  props: {
    task: {
      type: Object,
      default: () => {
        return {
          title: "",
          description: "",
          id: ""
        };
      }
    }
  }
};
</script>