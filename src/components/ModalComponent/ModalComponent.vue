<template>
  <Teleport to="body">
    <div id="modal" class="modal">
      <div class="modal__backdrop">
        <div class="modal__body">
          <div class="modal__title">
            <h1>Rules</h1>
          </div>
          <div class="modal__close">
            <button class="button-close" @click="toggleShowRules()">
              <img src="../../assets/icon-close.svg" alt="Icon Close" />
            </button>
          </div>
          <div class="modal__rules">
            <img src="../../assets/image-rules.svg" alt="Image Rules" />
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { useGame } from "@/store";
const game = useGame();
function toggleShowRules() {
  game.showRules = !game.showRules;
}
</script>

<style lang="scss" scoped>
@import "../../variables";
.modal {
  position: fixed;
  z-index: 10;
  inset-block-start: 0;
  inset-inline-start: 0;
  inline-size: 100%;
  block-size: 100vh;
  &__backdrop {
    background-color: hsl(0deg 0% 0% / 60%);
  }
  &__body {
    display: grid;
    grid-template-areas:
      "title"
      "body"
      "icon-close";
    background-color: hsl(0, 0%, 100%);
    inline-size: 100%;
    block-size: 100%;
    padding-inline: 31px;
    padding-block: 100px 55px;
    @media (min-width: 786px) {
      border-radius: 5px;
      max-inline-size: 400px;
      max-block-size: 415px;
      padding-inline: 33px;
      padding-block: 33px;
      grid-template-areas:
        "title icon-close"
        "body body";
    }
  }
  img {
    vertical-align: middle;
  }
  &__backdrop {
    inline-size: 100%;
    block-size: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__title {
    grid-area: title;
    text-align: center;
    @media (min-width: 786px) {
      text-align: start;
    }
    h1 {
      color: $dark-text;
      font-size: 32px;
    }
  }
  &__close {
    grid-area: icon-close;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    @media (min-width: 786px) {
      align-items: flex-start;
      justify-content: flex-end;
    }
    .button-close {
      border: none;
      outline: none;
      background: transparent;
      cursor: pointer;
      padding: 5px;
      img {
        transition: scale 300ms;
      }
      &:hover img {
        scale: 1.3;
      }
    }
  }
  &__rules {
    grid-area: body;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    @media (min-width: 786px) {
      align-items: flex-end;
    }
    img {
      inline-size: 100%;
      max-inline-size: 400px;
      @media (min-width: 786px) {
        max-inline-size: 303px;
      }
    }
  }
}
</style>