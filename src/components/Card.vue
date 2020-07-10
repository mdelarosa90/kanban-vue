<template>
    <div :id="id" class="board" @dragover.prevent @drop.prevent="drop">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: "Board",
  props: ["id"],
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
  opacity: 0.7;
  padding: 15px;
}
</style>