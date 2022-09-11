<template>
  <button
    class="flex align-middle rounded-md bg-primary p-2 px-3 font-light text-white hover:bg-transparent border-2 border-primary border-solid hover:text-primary"
    @click="$listeners"
  >
    <slot></slot>
    <h1 class="px-2">{{ text }}</h1>
  </button>
</template>

<script>
export default {
  name: "UI-Btn",
  props: {
    text: String,
  },
};
</script>
