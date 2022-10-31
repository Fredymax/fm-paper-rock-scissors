import { defineStore } from "pinia";
import { ref } from "vue";

export const useGame = defineStore("game", () => {
  const score = ref(0);
  const playing = ref(false);
  const showRules = ref(false);
  const finish = ref(false);
  const userSelection = ref({
    nameIcon: null,
    typeIcon: null,
  });
  const computerSelection = ref({
    nameIcon: null,
    typeIcon: null,
  });
  function increaseScore() {
    score.value++;
  }
  function decreaseScore() {
    if (score.value >= 1) {
      score.value--;
    }
  }
  return {
    finish,
    score,
    playing,
    showRules,
    userSelection,
    computerSelection,
    increaseScore,
    decreaseScore,
  };
});
