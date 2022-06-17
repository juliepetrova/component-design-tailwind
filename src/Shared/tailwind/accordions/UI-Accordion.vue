<template>
  <div>
    <div
      class="flex justify-between align-middle items-center text-lg tracking-wide my-5 cursor-pointer"
      @click="toggle"
    >
      <h1 class="font-bold">{{ title }}</h1>
      <i
        class="ri-arrow-down-s-line font-light self-center icon"
        :class="{ rotate: isOpen }"
      ></i>
    </div>
    <hr class="border-solid border-t-1 border-primary" />

    <transition
      name="slide"
      v-on:before-enter="beforeEnter"
      v-on:enter="enter"
      v-on:before-leave="beforeLeave"
      v-on:leave="leave"
    >
      <div v-show="isOpen">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
import "remixicon/fonts/remixicon.css";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    beforeEnter(el) {
      el.style.height = "0";
    },
    enter(el) {
      el.style.height = el.scrollHeight + "px";
    },
    beforeLeave(el) {
      el.style.height = el.scrollHeight + "px";
    },
    leave(el) {
      el.style.height = "0";
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: 300ms ease-out;
  overflow: hidden;
}

.icon {
  transform: rotate(0deg);
  transition-duration: 0.3s;
}

.icon.rotate {
  transform: rotate(180deg);
  transition-duration: 0.3s;
}
</style>
