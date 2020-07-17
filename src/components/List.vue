<template>
  <v-row justify="center">
    <v-dialog v-model="openBoard" persistent max-width="600px">
      <v-card :elevation="12">
        <v-card-title class="teal darken-3" dark>
          <v-icon left color="white">mdi-view-list</v-icon>
          <span class="headline white--text">Edición de Listas</span>
        </v-card-title>
        <v-form ref="form" v-model="valid">
          <v-card-text class="pa-0">
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="Titulo" :counter="30" :rules="nameRules" v-model="list.name" required></v-text-field>
                </v-col>
                <v-col class="d-flex justify-center">
                  <v-color-picker v-model="list.headerColor" :rules="colorRules" required></v-color-picker>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="closeEditList">Cancelar</v-btn>
            <v-btn
              v-if="!editNewList"
              :disabled="!valid"
              color="teal darken-3"
              text
              @click="addList(list)"
            >Guardar</v-btn>
            <v-btn
              v-else-if="editNewList"
              color="warning darken-3"
              text
              @click="updateList(list)"
            >Actualizar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapMutations, mapState, mapGetters } from "vuex";
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
  data: () => {
    return {
      valid: true,
      nameRules: [
        v => !!v || "Title is required",
        v => (v && v.length <= 30) || "Title must be less than 30 characters"
      ],
      colorRules: [v => !!v || "Color is required"]
    };
  },
  computed: {
    ...mapState(["openBoard", "editNewList"]),
    listCopy() {
      return {...this.list}
    }
  },
  methods: {
    ...mapMutations(["addList", "closeEditList", "updateList"])
  }
};
</script>