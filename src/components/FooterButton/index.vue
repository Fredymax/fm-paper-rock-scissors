<script>
export default { name: "FooterButton" };
</script>

<template>
  <div class="container__button">
    <button class="button" @click="toggleShowRules()">Rules</button>
  </div>
</template>

<script setup>
import { useGame } from "@/store";
const game = useGame();
function toggleShowRules() {
  game.showRules = !game.showRules;
}
</script>

<style lang="scss" scoped>
.container__button {
  text-align: center;
  @media (min-width: 768px) {
    text-align: end;
  }
  .button {
    cursor: pointer;
    padding-block: 10px;
    padding-inline: 35px;
    background: transparent;
    color: hsl(0, 0%, 100%);
    border: 1px solid hsl(0, 0%, 100%);
    border-radius: 5px;
    text-transform: uppercase;
    font-family: inherit;
    text-rendering: optimizeLegibility;
    &:active {
      scale: 0.99;
    }
  }
}
</style>