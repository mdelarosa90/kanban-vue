<template>
  <v-row justify="center">
    <v-dialog v-model="open" persistent max-width="600px">
      <v-card>
        <v-card-title class="teal darken-3" dark>
          <v-icon left color="white">mdi-label</v-icon>
          <span class="headline white--text">Edición de Tareas</span>
        </v-card-title>
        <v-form ref="form" v-model="valid">
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    label="Titulo"
                    :counter="30"
                    :rules="nameRules"
                    v-model="task.title"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-textarea label="Descripcion" :rules="descriptionRules" v-model="task.description" required></v-textarea>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeModal">Cancelar</v-btn>
            <v-btn
              v-if="!editMode"
              :disabled="!valid"
              color="teal darken-3"
              text
              @click="addTask(task)"
            >Guardar</v-btn>
            <v-btn
              v-else-if="editMode"
              color="warning darken-3"
              text
              :disabled="!valid"
              @click="editTask(task)"
            >Actualizar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapMutations, mapState } from "vuex";
import Task from "./Task";
export default {
  name: "Task",
  props: {
    task: {
      type: Object,
      default: () => {
        return {
          title: "",
          description: "",
          id: "",
          boardId: ""
        };
      }
    }
  },
  computed: {
    ...mapState(["open", "editMode"])
  },
  methods: {
    ...mapMutations(["addTask", "closeModal", "editTask"])
  },
  data: () => {
    return {
      valid: true,
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 30) || "Name must be less than 30 characters"
      ],
      descriptionRules: [
        v => !!v || "Description is required"
      ]
    };
  }
};
</script>