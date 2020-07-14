<template>
  <v-row justify="center">
    <v-dialog v-model="openBoard" persistent max-width="600px">
      <v-card>
        <v-card-title class="teal darken-3" dark>
          <v-icon left color="white">mdi-label</v-icon>
          <span class="headline white--text">Edición de Tareas</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Titulo" v-model="list.name"></v-text-field>
              </v-col>
              <v-col class="d-flex justify-center">
                <v-color-picker v-model="list.headerColor"></v-color-picker>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="closeEditList">Cancelar</v-btn>
          <v-btn v-if="!editMode" color="teal darken-3" text @click="addList(list)">Guardar</v-btn>
          <v-btn
            v-else-if="editMode"
            color="warning darken-3"
            text
            @click="editList(list)"
          >Actualizar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapMutations, mapState } from "vuex";
export default {
  props: {
    list: {
      type: Object,
      default: () => {
        return {
          id: "",
          name: "",
          headerColor: "",
          tareas: []
        };
      }
    }
  },
  computed: {
    ...mapState(["openBoard", "editMode"])
  },
  methods: {
    ...mapMutations(["addList", "closeEditList", "editList"])
  }
};
</script>