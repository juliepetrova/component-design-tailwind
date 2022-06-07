<template>
  <button
    type="button"
    :disabled="isDisabled"
    class="flex flex-row justify-center items-center hover:text-primary text-white rounded-full shadow-lg p-4 py-2 bg-primary tracking-wider  hover:bg-transparent"
    :class="{ 'opacity-40  hover:bg-primary cursor-not-allowed hover:text-white': isDisabled }"
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
