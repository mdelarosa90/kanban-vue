<template>
    <div :id="data.id" class="board pointer">
      <v-card-title v-bind:style="{backgroundColor: data.headerColor}">
        <span class="white--text text-truncate" style="max-width: 80%">{{data.name}}</span>
        <!-- <v-menu bottom left>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
                @click="editarLista(data)"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
        </v-menu> -->
      </v-card-title>
      <slot></slot>
      <!-- <List v-bind:list="listEdit ? defaultBoard : emptyBoard" /> -->
    </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import List from './List';
export default {
  name: "board",
  components: {
    List
  },
  props: {
    data: {
      type: Object,
      default: {
        id: '',
        headerColor: '',
        name: '',
        tareas: []
      }
    }
  },
  data: () => {
    return {
      defaultBoard: {
        id: '',
        name: '',
        headerColor: '',
        tareas: []
      },
      items: [
        { title: 'Editar' },
      ],
    }
  },
  computed: {
    ...mapState(["boards", "editNewList", "openBoard"]),
    ...mapGetters(['listEdit']),
     emptyBoard(){
      return {name: '', headerColor: '', id:'', tareas: []}
    }
  },
  methods: {
      drop: e => {
          const card_id = e.dataTransfer.getData('card_id');
          const card = document.getElementById(card_id);
          card.style.display = "block";
          e.target.appendChild(card);
      },
      editarLista(data) {
      this.$store.state.editNewList = true;
      this.defaultBoard = {...data};
      this.$store.state.openBoard = true;
    },
  }
};
</script>

<style>
.board {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 600px;
  background-color: rgba(1, 5, 19, 0.911);
  overflow-y: auto;
  overflow-x: hidden;
  opacity: 0.85;
  padding: 15px;
  z-index: 0;
  border-radius: 2mm;
}
.overflow {
  overflow: auto;
  padding-right: 10px;
  padding-top: 5px;
}
.index {
  z-index: 5000 !important;
}

.pointer {
  cursor: pointer;
}
</style>