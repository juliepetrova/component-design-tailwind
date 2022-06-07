<template>
  <button
    type="button"
    class="flex flex-row justify-center items-center text-primary rounded-full shadow-lg drop-shadow-xl p-3 py-2 tracking-wider hover:bg-primary hover:text-white"
    :class="{ 'opacity-40': isDisabled }"
    :disabled="isDisabled"
  >
    <slot></slot>
    <h1 class="pl-2">{{ text }}</h1>
  </button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    isDisabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
