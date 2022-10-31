<script>
export default { name: "BodyGame" };
</script>

<template>
  <div class="game" :class="{ 'in-game': game.playing }">
    <div class="game__options" v-if="!game.playing">
      <div class="group">
        <ButtonOption
          @handleChoose="handleClickChoose"
          type-option="paper"
          name-icon="icon-paper.svg"
        />
        <ButtonOption
          @handleChoose="handleClickChoose"
          type-option="scissors"
          name-icon="icon-scissors.svg"
        />
      </div>
      <div class="group">
        <ButtonOption
          @handleChoose="handleClickChoose"
          type-option="rock"
          name-icon="icon-rock.svg"
        />
      </div>
    </div>
    <div class="game__options" v-else>
      <div class="group">
        <ButtonOption
          @handleChoose="handleClickChoose"
          :type-option="game.userSelection.typeIcon"
          :name-icon="game.userSelection.nameIcon"
          :is-winning-player="winnerPlayer === 'user'"
        >
          You picked!
        </ButtonOption>
        <ButtonOption
          @handleChoose="handleClickChoose"
          :type-option="game.computerSelection.typeIcon || 'default'"
          :name-icon="game.computerSelection.nameIcon || 'default'"
          :is-winning-player="winnerPlayer === 'computer'"
        >
          The house picker!
        </ButtonOption>
      </div>
    </div>
    <div class="game__message" v-if="game.finish">
      <h1>{{ message }}</h1>
      <button @click="restartGame()">Play Again</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ButtonOption from "@/components/ButtonOption/index.vue";
import RulesJson from "@/data/rules.json";
import { useGame } from "@/store";
import { useVerifyWinner } from "@/composables/useVerifyWinner";
import { WINNER_MESSAGE } from "@/constants";

const game = useGame();
const dynamicValues = RulesJson;
const winnerPlayer = ref("");
const message = ref(null);

function restartGame() {
  winnerPlayer.value = "";
  game.finish = false;
  game.userSelection = {
    nameIcon: null,
    typeIcon: null,
  };
  game.computerSelection = {
    nameIcon: null,
    typeIcon: null,
  };
  game.playing = false;
}

function verifyWinner(userPicked, computerPicked) {}

async function handleClickChoose(selected) {
  game.userSelection = selected;
  game.playing = true;
  const artificialIntelligence = new Promise((resolve) => {
    let choosingInterval = setInterval(() => {
      const dynamicIndex = Math.floor(Math.random() * dynamicValues.length);
      game.computerSelection = dynamicValues[dynamicIndex];
    }, 50);
    setTimeout(() => {
      clearInterval(choosingInterval);
      resolve(game.computerSelection);
    }, 3000);
  });
  const computerSelected = await artificialIntelligence;
  const role = useVerifyWinner(
    game.userSelection.typeIcon,
    computerSelected.typeIcon
  );
  winnerPlayer.value = role;
  message.value = WINNER_MESSAGE[role];
  if (role === "user") {
    game.increaseScore();
  }
  game.finish = true;
}
</script>

<style src="./style.scss" lang="scss" scoped></style>