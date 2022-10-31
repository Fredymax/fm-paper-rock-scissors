<script setup>
import HeaderScore from "@/components/HeaderScore/index.vue";
import BodyGame from "@/components/BodyGame/index.vue";
import FooterButton from "@/components/FooterButton/index.vue";
import ModalComponent from "@/components/ModalComponent/ModalComponent.vue";
import { useGame } from "@/store";
const game = useGame();
</script>

<template>
  <div class="container">
    <HeaderScore />
    <BodyGame />
    <FooterButton />
    <ModalComponent v-if="game.showRules" />
  </div>
</template>
