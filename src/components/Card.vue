<template>
    <div :id="id" class="board">
      <v-card-title v-bind:style="{backgroundColor: color}">
        <span class="white--text">{{title}}</span>
      </v-card-title>
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "board",
  props: ["id", "title", "color"],
  methods: {
      drop: e => {
          const card_id = e.dataTransfer.getData('card_id');
          const card = document.getElementById(card_id);
          card.style.display = "block";
          e.target.appendChild(card);
      }
  }
};
</script>

<style>
.flexBox {
  display: flex;
  justify-content: space-between;
  width: "100vh";
  height: "100vh";
  overflow: hidden;
  margin: 0 auto;
  padding: 15px;
}
.flexBox .board {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  background-color: black;
  overflow:auto;
  opacity: 0.7;
  padding: 15px;
  z-index: -4000;
}
.index {
  z-index: 5000 !important;
}
</style>