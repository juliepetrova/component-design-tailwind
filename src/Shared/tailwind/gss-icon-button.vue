<template>
  <button
    class="flex align-middle rounded-md bg-primary p-2 px-3 font-light text-white hover:bg-white border-2 border-primary border-solid hover:text-primary"
    @click="$emit('clicked')"
  >
    <slot></slot>
    <h1 class="pl-2">{{ text }}</h1>
  </button>
</template>

<script>
export default {
  name: "GSSButton",
  props: {
    text: String,
  },
};
</script>
