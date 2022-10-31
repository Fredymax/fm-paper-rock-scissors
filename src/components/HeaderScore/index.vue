<script>
export default { name: "HeaderScore" };
</script>

<template>
  <header class="header">
    <h1 class="header__title">ROCK PAPER SCISSORS</h1>
    <div class="header__score">
      <div class="score__title">score</div>
      <div class="score__count">{{ store.score }}</div>
    </div>
  </header>
</template>

<script setup>
import { useGame } from "@/store";
const store = useGame();
</script>

<style src="./style.scss" lang="scss" scoped></style>