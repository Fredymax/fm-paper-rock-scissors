<script>
export default { name: "ButtonOption" };
</script>

<template>
  <div class="option__container">
    <button
      :class="`option ${typeOption} ${isWinningPlayer ? 'winner' : ''}`"
      @click="handleClick(typeOption)"
    >
      <figure class="option__content">
        <img v-if="nameIcon !== 'default'" :src="icon" :alt="nameIcon" />
      </figure>
    </button>
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script setup>
import { useGame } from "@/store";
import { watchEffect, defineProps, ref, toRefs, defineEmits } from "vue";
const game = useGame();
const emit = defineEmits(["handleChoose"]);
const props = defineProps({
  typeOption: {
    type: String,
    default: "default",
  },
  nameIcon: {
    type: String,
    default: "default",
  },
  isWinningPlayer: {
    type: Boolean,
    default: false,
  },
});

const { typeOption, nameIcon } = toRefs(props);
const icon = ref(null);

watchEffect(async () => {
  if (nameIcon.value && nameIcon.value !== "default") {
    icon.value = (await import(`/src/assets/${nameIcon.value}`)).default;
  }
});

function handleClick(selected) {
  if (nameIcon.value == "default" || game.playing) return;
  emit("handleChoose", {
    nameIcon: nameIcon.value,
    typeIcon: typeOption.value,
  });
}
</script>
<style src="./style.scss" lang="scss" scoped></style>