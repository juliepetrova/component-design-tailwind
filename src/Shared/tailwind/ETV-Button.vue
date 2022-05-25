<template>
  <button
    type="button"
    class="flex flex-row justify-center items-center text-white rounded-full shadow-lg p-3 py-2 bg-primary tracking-wider hover:text-primary hover:bg-white"
    :disabled="isDisabled"
    :class="{ 'opacity-40': isDisabled }"
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
